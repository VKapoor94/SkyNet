import defaultAxios from 'axios';

const axios = defaultAxios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  headers: {'Content-Type': 'application/json'},
});

export const getDetailsofUser = async payload => {
  try {
    const user = await axios.get('users/' + payload.id);
    return user.data;
  } catch (err) {
    return console.log(err);
  }
};
