const mongoose = require("mongoose");
const Post = require("../models/posts");

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
    res.status(200).json({ message: "Метод обновления пока не реализован" });
  }

  // Удалить пост
  static async deletePost(req, res) {
    res.status(200).json({ message: "Метод удаления пока не реализован" });
  }
}

// Правильный экспорт класса
module.exports = API;
