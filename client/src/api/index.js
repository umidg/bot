import axios from "axios";
const SERVER_URL = "http://localhost:5003/";

export const getApi = async (url, data, method = "POST") => {
  return await axios({
    method,
    url: SERVER_URL + url,
    data,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.data)
    .catch((err) => console.log(err, "err"));
};
