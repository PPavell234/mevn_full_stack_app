import axios from "axios";

const url = "http://localhost:5000/api/post";

export default class API {
  // Получить все посты
  static async getAllPost() {
    const res = await axios.get(url);
    return res.data;
  }

  // Получить пост по ID
  static async getPostByID(id) {
    const res = await axios.get(`${url}/${id}`);
    return res.data;
  }

  // Добавить новый пост
  static async addPost(post) {
    const res = await axios.post(url, post);
    return res.data;
  }

  // Обновить пост по ID
  static async updatePost(id, post) {
    const res = await axios.patch(`${url}/${id}`, post);
    return res.data;
  }

  // Удалить пост по ID
  static async deletePost(id) {
    const res = await axios.delete(`${url}/${id}`);
    return res.data;
  }
}
