import { useEffect, useState } from 'react';
import youtube from '../api/youtube';

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (searchTerm) => {
    const response = await youtube.get('/search', {
      params: { q: searchTerm },
    });
    setVideos(response.data.items);
  };

  return [videos, search];
};

export default useVideos;
