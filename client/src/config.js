import axios from "axios";

export const axiosIntance = axios.create({
  baseURL: "https://socialguruji.herokuapp.com/api/",
});
