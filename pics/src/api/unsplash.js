import axios from 'axios';

const accessKey = 'xzpu_Zf3yp53l-thhA8FxXmTp3oJGUw66v7sMElV5zM';
const secretKey = '5Q1bjzuKSyFDJc80b3pRdgkuAKQYZJ9yDRJg0Xb_Vf8';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${accessKey}`,
  },
});
