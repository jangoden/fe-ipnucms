import axios from 'axios';
import { NewsApiResponse } from './types';

const API_KEY = '5ba23306c6d54c02af5e2b4eefec82bc';
const BASE_URL = 'https://newsapi.org/v2/top-headlines';

export const getNews = async (category: string = 'general', page: number = 1, pageSize: number = 10): Promise<NewsApiResponse> => {
  try {
    const response = await axios.get(`${BASE_URL}?country=us&category=${category}&apiKey=${API_KEY}&page=${page}&pageSize=${pageSize}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
    return { articles: [], totalResults: 0, status: 'error' };
  }
};