import axios from "axios";

const baseAxios = axios.create({
  baseURL: "https://k7heb.sse.codesandbox.io/"
});

export default baseAxios;
