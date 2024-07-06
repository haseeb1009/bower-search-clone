import useSWR, { SWRResponse } from 'swr';

import {
  API_KEY,
  BASE_URL,
} from '../constants/constants';
import { ModuleType } from '../types/types';

const Page_Size = 5;

type UseLibrariesType = {
  data: ModuleType[] | undefined;
  loading: boolean;
  error: string | null;
};

// const fetcher: any = async (
//   url: string,
//   query?: string,
//   page?: number,
//   sort?: boolean
// ) => {
//   const response = await axios.get(url, {
//     params: {
//       query,
//       page,
//       sort,
//       per_page: Page_Size,
//       api_key: API_KEY,
//     },
//   });
//   return response.data;
// };
const fetcher = async (
  url: string,
  query?: string,
  page?: number,
  sort?: string // updated type from boolean to string to match the use case
) => {
  const params = new URLSearchParams({
    q: query || '',
    page: page?.toString() || '1',
    sort: sort || '',
    per_page: Page_Size.toString(),
    api_key: API_KEY,
  });
console.log(url);
  const response = await fetch(`${url}?${params.toString()}`, {
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error('Error fetching data');
  }

  const data = await response.json();
  return data;
};

const useModules = (
  query: string,
  page: number,
  sortByStars?: boolean
): UseLibrariesType => {
  const url = `${BASE_URL}/search?${query ? `q=${query}&` : ''}${
    page ? `page=${page}&` : ''
  }${sortByStars ? 'sort=stars' : ''}`;

  const { data, isLoading, error }: SWRResponse<ModuleType[], string> = useSWR(
    url,
    fetcher
  );

  return {
    data: data,
    loading: isLoading,
    error: error ? 'Error fetching libraries' : null,
  };
};

export default useModules;
