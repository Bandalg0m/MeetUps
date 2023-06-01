import axios from "axios";

const token = localStorage.getItem("token");

const myAxios = axios.create({
  baseURL: "https://api.fit-meetups.ru/",
});

if (token) {
  console.log(token);
  myAxios.defaults.headers.common["Authorization"] = "Bearer " + token;
}
export default myAxios;
