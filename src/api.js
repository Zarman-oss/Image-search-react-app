import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID kdUH-oi1ifMh0Rz3xDpPEXtge8OrYM7sGlvpsH_DITc',
    },
    params: {
      query: 'term',
    },
  });

  return response.data.results;
};

export default searchImages;
