import axios from 'axios';

const BASE_CONNECTION = axios.create({
  baseURL: 'https://simple-blog-api.crew.red',
});

const api = {
  getPosts: () => BASE_CONNECTION.get("/posts"),
  singlePost: (id) => BASE_CONNECTION.get(`/posts/${id}`),
  createPost: (title, body) => BASE_CONNECTION.post("/posts", { title, body }),
};

export default api;
