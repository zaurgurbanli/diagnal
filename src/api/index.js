import axios from 'axios';

const options = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 20000,
};
const baseUrl =
  'https://raw.githubusercontent.com/zaurgurbanli/diagnal/main/json/';

export const getMethod = async url => {
  try {
    const fullUrl = baseUrl + url;
    const response = await axios.get(fullUrl, options);
    if (response.status === 200) {
      return {status: true, data: response.data};
    }
    return {error: response.status, status: false};
  } catch (error) {
    return {error, status: false};
  }
};
