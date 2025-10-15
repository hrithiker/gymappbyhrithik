export const exerciseOptions = {
    method: 'GET',
    // url: 'https://exercisedb.p.rapidapi.com/exercises',
    params: {
      limit: '0',
      offset: '0'
    },
    headers: {
      'x-rapidapi-key': 'f5ad70933amsh038de695401c18ep1ef77ejsn636b6a7f0ee2',
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }

};

  export const youtubeOptions = {
  method: 'GET',

  headers: {
    'x-rapidapi-key': 'b166ba297dmsh6147c4492c2a26fp159b10jsnb991d4e82d16',
    'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
