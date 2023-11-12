import axios from 'axios';

const apiUrl = 'http://127.0.0.1:4567';

export const getPlatforms = async () => {
  try {
    const response = await axios.get(`${apiUrl}/platforms`);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const getPlayer = async (playerName, platform) => {
  try {
    const response = await axios.get(`${apiUrl}/${platform}/${playerName}`);
    return response.data;
  } catch (error) {
    console.error('Error trying to obtain the player:', error);
    throw error;
  }
};