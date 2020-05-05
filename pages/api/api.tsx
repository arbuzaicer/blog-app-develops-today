import axios from 'axios';

const BASE_CONNECTION = axios.create({
  baseURL: 'https://simple-blog-api.crew.red',
});

const api = {
  getPosts: () => BASE_CONNECTION.get("/posts"),
  singlePost: (id: number) => BASE_CONNECTION.get(`/posts/${id}`),
  createPost: (title: string, body: string) => BASE_CONNECTION.post("/posts", { title, body }),
};

export default api;
