import { environment } from '../constants/environment';
import { ILogin } from '../types/auth';
import { fetchAPI } from '../utils/fetch';

export const login = async (payload: ILogin) => {
  const result = await fetchAPI(`${environment.API_URL}/auth/login`, {
    method: 'POST',
    body: JSON.stringify(payload),
  });

  return result;
};
