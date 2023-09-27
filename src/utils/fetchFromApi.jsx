import axios from "axios";


const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
const options = {
    url: BASE_URL,
    params: {
      part: 'snippet',
      videoId: 'M7FIvfx5J10',
      maxResults: '10'
    },
    headers: {
      'X-RapidAPI-Key': '3d33408b59msh7d04b55bcc1c421p1ebbf7jsnf1077d893a65',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  
    return data;
  };
  