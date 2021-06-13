import defaultAxios from 'axios';

const axios = defaultAxios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  headers: {'Content-Type': 'application/json'},
});

export const getPhotoofUser = async payload => {
  try {
    const photo = await axios.get('photos/' + payload.id);
    return photo.data;
  } catch (err) {
    return console.error(err);
  }
};
