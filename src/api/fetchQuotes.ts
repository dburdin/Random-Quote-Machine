import axios from "axios";

const BASE_URL = "https://api.api-ninjas.com";

export const fetchQuotes = async () => {
  const response = await axios.get(`${BASE_URL}/v1/quotes`);
  return response;
};
