// src/utilts/fetchData.js

export const exerciseOptions = {
  method: 'GET',
  params: {
    limit: '0',
    offset: '0',
  },
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
    'x-rapidapi-host': process.env.REACT_APP_RAPIDAPI_HOST,
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_YOUTUBE_RAPIDAPI_KEY,
    'x-rapidapi-host': process.env.REACT_APP_YOUTUBE_RAPIDAPI_HOST,
  },
};


export const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};
