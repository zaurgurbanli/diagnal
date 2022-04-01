import axios from 'axios';

const options = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

export const getPosters = async page => {
  try {
    const url = ``;
    const response = await axios.get(url, options);
    return response;
  } catch (error) {
    return {error: true, errObj: error};
  }
};
