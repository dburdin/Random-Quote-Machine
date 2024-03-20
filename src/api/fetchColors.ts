import axios from "axios";

const BASE_URL = "https://www.thecolorapi.com";

export const fetchColors = async () => {
  const response = await axios.get(`${BASE_URL}/random?format=json`);
  return response;
};
