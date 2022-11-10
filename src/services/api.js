import axios from 'axios';

const token = 'wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu';
axios.defaults.baseURL =
  'https://api.json-generator.com/templates/ZM1r0eic3XEy/data';

export const getJobList = async () => {
  const response = await axios.get(`?access_token=${token}`);
  return response.data;
};

export const getJobById = async id => {
  const response = await axios.get(`?access_token=${token}`);
  const jobById = response.data.find(job => job.id === id);
  return jobById;
};
