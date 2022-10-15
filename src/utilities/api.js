import axios from "axios";

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  params: {
    key: "AIzaSyBJeqwSh72LsJaI5EtPx1Wjmfh3B1wN_IE",
  },
});

export default request;
