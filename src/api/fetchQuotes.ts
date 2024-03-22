import axios from "axios";

import { API_KEY, BASE_URL } from "../constants/constants";

const { quotes } = BASE_URL;
const { quotesApi } = API_KEY;

export const fetchQuotes = async () => {
  const response = await axios.get(`${quotes}/v1/quotes`, {
    headers: { "X-Api-Key": quotesApi },
  });
  return response;
};
