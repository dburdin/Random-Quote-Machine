import axios from "axios";

import { BASE_URL } from "../constants/constants";

const { colors } = BASE_URL;

export const fetchColors = async () => {
  const response = await axios.get(`${colors}/random?format=json`);
  return response;
};
