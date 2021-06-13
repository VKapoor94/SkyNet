import defaultAxios from 'axios';

const axios = defaultAxios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  headers: {'Content-Type': 'application/json'},
});

export const deleteUserFromList = async payload => {
  try {
    const user = await axios.delete('posts/' + payload.id);
    console.log(user.data);
    return user.data;
  } catch (err) {
    return console.log(err);
  }
};
