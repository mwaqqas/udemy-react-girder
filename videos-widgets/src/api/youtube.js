import axios from 'axios';

const KEY = 'AIzaSyA2aK7W39KljvbjxZMOCsrjnFZYEYo9aPo';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    key: KEY,
    part: 'snippet',
    maxResults: 5,
    type: 'video',
  },
});
