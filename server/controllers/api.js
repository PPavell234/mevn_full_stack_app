const mongoose = require("mongoose");
const Post = require("../models/posts");
const fs = require("fs");

class API {
  // Получить все посты
  static async fetchAllPost(req, res) {
    try {
      const posts = await Post.find();
      res.status(200).json(posts);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  // Получить пост по ID
  static async fetchPostByID(req, res) {
    const id = req.params.id;

    // Проверяем корректность ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        error: "Некорректный ID поста",
        description:
          "Переданный идентификатор не соответствует формату MongoDB ObjectId (24 шестнадцатеричных символа).",
        receivedValue: id,
        exampleFormat: "652e7f0b2a8f8b1d2c9b1234",
      });
    }

    try {
      const post = await Post.findById(id);
      if (!post) {
        return res.status(404).json({
          error: "Пост не найден",
          description: "В базе данных отсутствует запись с таким ID.",
          id: id,
        });
      }

      res.status(200).json(post);
    } catch (err) {
      res.status(500).json({
        error: "Ошибка сервера при поиске поста",
        details: err.message,
      });
    }
  }

  // Создать пост
  static async createPost(req, res) {
    try {
      const post = req.body;
      if (req.file) {
        post.image = req.file.filename;
      }

      const newPost = await Post.create(post);
      res.status(201).json({
        message: "Пост успешно создан",
        data: newPost,
      });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  // Обновить пост
  static async updatePost(req, res) {
    const id = req.params.id;

    // Проверяем корректность ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        error: "Некорректный ID поста",
        description:
          "Переданный идентификатор не соответствует формату MongoDB ObjectId.",
        receivedValue: id,
        expectedFormat: "652e7f0b2a8f8b1d2c9b1234",
      });
    }

    let new_image = "";

    if (req.file) {
      new_image = req.file.filename;

      // Удаляем старое изображение, если оно было
      try {
        fs.unlinkSync("./uploads/" + req.body.old_image);
      } catch (err) {
        console.warn("⚠️ Не удалось удалить старое изображение:", err.message);
      }
    } else {
      new_image = req.body.old_image;
    }

    const newPost = {
      title: req.body.title,
      content: req.body.content,
      image: new_image,
    };

    try {
      const updatedPost = await Post.findByIdAndUpdate(id, newPost, {
        new: true,
      });

      if (!updatedPost) {
        return res.status(404).json({ message: "Пост не найден" });
      }

      res.status(200).json({
        message: "Пост успешно обновлён",
        updatedPost,
      });
    } catch (err) {
      res.status(500).json({
        message: "Ошибка при обновлении поста",
        details: err.message,
      });
    }
  }

  static async deletePost(req, res) {
    const id = req.params.id;

    // Проверяем корректность ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        error: "Некорректный ID поста",
        description:
          "Переданный идентификатор не соответствует формату MongoDB ObjectId.",
        receivedValue: id,
      });
    }

    try {
      const deletedPost = await Post.findByIdAndDelete(id);

      if (!deletedPost) {
        return res.status(404).json({ message: "Пост не найден" });
      }

      // Удаляем изображение, если оно существует
      if (deletedPost.image) {
        const imagePath = `./uploads/${deletedPost.image}`;
        if (fs.existsSync(imagePath)) {
          fs.unlinkSync(imagePath);
        }
      }

      res.status(200).json({ message: "Пост успешно удалён" });
    } catch (err) {
      res.status(500).json({
        message: "Ошибка при удалении поста",
        details: err.message,
      });
    }
  }
}

module.exports = API;
