import axios from './axiosDeclaration';

export const getAllUsers = async () => {
  try {
    const users = await axios.get('users?_limit=10');
    return users.data;
  } catch (err) {
    return console.error(err);
  }
};

export const deleteUserFromList = async payload => {
  try {
    const user = await axios.delete('posts/' + payload.id);
    console.log(user.data);
    return user.data;
  } catch (err) {
    return console.log(err);
  }
};

export const getDetailsofUser = async payload => {
  try {
    const user = await axios.get('users/' + payload.id);
    return user.data;
  } catch (err) {
    return console.log(err);
  }
};

export const getAllPhotos = async () => {
  try {
    const photos = await axios.get('photos?_limit=10');
    return photos.data;
  } catch (err) {
    return console.error(err);
  }
};

export const getPhotoofUser = async payload => {
  try {
    const photo = await axios.get('photos/' + payload.id);
    return photo.data;
  } catch (err) {
    return console.error(err);
  }
};
