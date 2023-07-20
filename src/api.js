import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID oPfewNgXHKIYSoQ_vOT5UvFrp58e0Jf3lcnRdrCz1WM',
    },
    params: {
      query: 'term',
    },
  });

  return response.data.results;
};

export default searchImages;
