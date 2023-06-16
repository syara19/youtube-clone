import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  method: "GET",
  url: BASE_URL,
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "d422e6bad6msh2f3775d7ceed548p104827jsn2197e70ff3d6",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchApi = async (url) => {
  const response = await axios.get(`${BASE_URL}/${url}`, options);

  return response.data;
};
