import axios from "axios";
// waiting on "BE" URL to fill baseURL: ("");
export const AxiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://mentor-be.herokuapp.com/api",
    headers: {
      Authorization: token,
    },
  });
};
