import { environment } from '../constants/environment';
import { ICart } from '../types/order';
import { fetchAPI } from '../utils/fetch';
import { getLocalStorage } from '../utils/storage';

export const getOrders = async () => {
  let url = `${environment.API_URL}/orders?page=1&pageSize=10`;

  const result = await fetchAPI(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${getLocalStorage('auth')}`,
    },
  }).then((data) => data);

  return result;
};

export const getOrderById = async (id: string) => {
  let url = `${environment.API_URL}/orders/${id}`;

  const result = await fetchAPI(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${getLocalStorage('auth')}`,
    },
  }).then((data) => data);

  return result;
};

export const createOrder = async (payload: {
  customerName: string;
  tableNumber: number;
  cart: ICart[];
}) => {
  const result = await fetchAPI(`${environment.API_URL}/orders`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${getLocalStorage('auth')}`,
    },
    body: JSON.stringify(payload),
  });

  return result;
};

export const updateOrder = async (id: string, payload: { status: string }) => {
  const result = await fetchAPI(`${environment.API_URL}/orders/${id}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${getLocalStorage('auth')}`,
    },
    body: JSON.stringify(payload),
  });

  return result;
};
