import { environment } from '../constants/environment';
import { fetchAPI } from '../utils/fetch';

export const getMenus = async (category?: string) => {
  let url = `${environment.API_URL}/menu?page=1&pageSize=25`;

  if (category) {
    url += `&category=${category}`;
  }

  const result = await fetchAPI(url, {
    method: 'GET',
  }).then((data) => data);

  return result;
};
