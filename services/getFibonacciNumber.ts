import axios from 'axios';

interface ApiResponse {
  fibonacciNumber: number;
}

const API_URL = 'http://localhost/api';

export const getFibonacciNumber = async (number: number): Promise<number | undefined> => {
  try {
    const response = await axios.get<ApiResponse>(`${API_URL}/fibonacci/${number}`);
    return response.data.fibonacciNumber;
  } catch (error) {
    throw error;
  }
};
