import axios from 'axios';

const BASE_URL = 'http://localhost:3000'; // Replace with your API URL

export const postData = async (endpoint: any, data: any) => {
  try {
    const response = await axios.post(`${BASE_URL}${endpoint}`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data; // Return the response data
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};
