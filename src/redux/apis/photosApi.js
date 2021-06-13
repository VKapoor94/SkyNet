import defaultAxios from 'axios';

const axios = defaultAxios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  headers: {'Content-Type': 'application/json'},
});

export const getAllPhotos = async () => {
  try {
    const photos = await axios.get('photos?_limit=10');
    return photos.data;
  } catch (err) {
    return console.error(err);
  }
};
