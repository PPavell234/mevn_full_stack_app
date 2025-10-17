const Post = require("../models/posts");
const mongoose = require("mongoose");

module.exports = class API {
  // получить все посты
  static async fetchAllPost(req, res) {
    try {
      const posts = await Post.find();
      res.status(200).json(posts);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  // создать пост
  static async createPost(req, res) {
    try {
      const post = req.body;
      const imagename = req.file ? req.file.filename : null;
      post.image = imagename;

      const createdPost = await Post.create(post);
      res.status(201).json(createdPost);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  // обновить пост
  static async updatePost(req, res) {
    res.send("update Post");
  }

  // удалить пост
  static async deletePost(req, res) {
    res.send("delete Post");
  }

  // получить пост по ID
  static async fetchPostByID(req, res) {
    const id = req.params.id;

    // Проверка, что id корректный
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid post ID" });
    }

    try {
      const post = await Post.findById(id);
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }
      res.status(200).json(post);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
};
