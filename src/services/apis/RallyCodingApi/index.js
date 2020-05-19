import axios from "axios";

const baseURL = "http://rallycoding.herokuapp.com/api/tokens";

export default axios.create({
  baseURL: baseURL,
});
