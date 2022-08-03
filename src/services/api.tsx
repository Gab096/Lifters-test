import axios from "axios";

const URL =
  "https://gist.githubusercontent.com/thiagossampaio/060e82b4801b0841fc683b0ce5efa06d/raw/e3cc555d9c71fd1b1160e20d7b10c083b5abcd61/desafio_front_end";
const api = axios.create({
  baseURL: URL,
});
export default api;
