import useSWR, { SWRResponse } from 'swr'

import {
  API_KEY,
  BASE_URL,
} from '../constants/constants'
import { ModuleType } from '../types/types'

const Page_Size = 5

type UseLibrariesType = {
  data: ModuleType[] | undefined
  loading: boolean
  error: string | null
}

const fetcher = async (url: string) => {
  const response = await fetch(`${url}&api_key=${API_KEY}`, {
    method: 'GET',
  })

  if (!response.ok) {
    throw new Error('Error fetching data')
  }

  const data = await response.json()
  return data;
}

const useModules = (
  query: string,
  page: number,
  sortByStars?: boolean
): UseLibrariesType => {
  const params = new URLSearchParams({
    q: query,
    page: page.toString(),
    per_page: Page_Size.toString(),
    sort: sortByStars ? 'stars' : '',
  })
  const url = `${BASE_URL}/search?${params}`

  const {
    data,
    isLoading,
    error,
  }: SWRResponse< ModuleType[]> = useSWR(
    url,
    fetcher
  )

  return {
    data: data,
    loading: isLoading,
    error: error ? 'Error fetching libraries' : null,
  }
}

export default useModules
