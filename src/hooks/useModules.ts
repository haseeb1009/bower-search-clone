import useSWR from 'swr';

import {
  API_KEY,
  BASE_URL,
} from '../constants/constants';
import { ModuleType } from '../types/types';

const Page_Size = 5;

const fetcher = async (url: string) => {
  const response = await fetch(url, {
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error('Error fetching data');
  }

  const data = await response.json();
  return data;
};

const useModules = (query: string, page: number, sortByStars?: boolean) => {
  const params = new URLSearchParams({
    q: query,
    page: page.toString(),
    per_page: Page_Size.toString(),
    sort: sortByStars ? 'stars' : '',
  });
  const url = `${BASE_URL}/search?${params}&api_key=${API_KEY}`;
  return useSWR<ModuleType[]>(url, fetcher);
};

export default useModules;
