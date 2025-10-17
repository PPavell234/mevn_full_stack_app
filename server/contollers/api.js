const Post = require("../models/posts");

module.exports = class API {
  static async fetchAllPost(req, res) {
    try {
      const posts = await Post.find();
      res.status(200).json(posts);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  }

  //create a post

  static async createPost(req, res) {
    const post = req.body;
    const imagename = req.file.filename;
    post.image = imagename;
    try {
      await Post.create(post);
      res.status(201).json({ message: "Post create successfully!" });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  static async updatePost(req, res) {
    res.send("create updatePost");
  }

  static async createPost(req, res) {
    res.send("create Post");
  }

  static async deletePost(req, res) {
    res.send("delete Post");
  }

  static async fetchPostByID(req, res) {
    res.send("fetch Post By Id");
  }
};
