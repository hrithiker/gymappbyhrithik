// fetchData.js

export const exerciseOptions = {
  method: 'GET',
  params: {
    limit: '0',
    offset: '0',
  },
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
    'x-rapidapi-host': import.meta.env.VITE_RAPIDAPI_HOST,
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_YOUTUBE_RAPIDAPI_KEY,
    'x-rapidapi-host': import.meta.env.VITE_YOUTUBE_RAPIDAPI_HOST,
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
