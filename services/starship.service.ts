import { msgResponseError } from 'enum/msgResponseError';
import { routes } from 'enum/routes';
import { toast } from 'react-toastify';

export const getAllStarships = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${routes.ROUTE_STARSHIP}`);
  if (!response.ok) {
    toast.error(msgResponseError.ERROR_GET_STARSHIPS);
  } else {
    const current = await response.json();
    return current;
  }
};

export const getStarshipByPage = async (page: number) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${routes.ROUTE_STARSHIP_PAGE}${page}`);
  if (!response.ok) {
    toast.error(msgResponseError.ERROR_GET_STARSHIPS);
  }
  const current = await response.json();
  return current;
};

export const getStarshipById = async (id: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${routes.ROUTE_STARSHIP_ID}${id}`);
  if (!response.ok) {
    toast.error(msgResponseError.ERROR_GET_STARSHIP);
  }
  const current = await response.json();
  return current;
};

export const getStarshipByIdBatched = async (id: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${routes.ROUTE_STARSHIP_ID}${id}/batched`);
  if (!response.ok) {
    toast.error(msgResponseError.ERROR_GET_STARSHIP);
  } else {
    const current = await response.json();
    return current;
  }
};

export const getStarshipBySearch = async (search: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${routes.ROUTE_STARSHIP_SEARCH}${search}`);
  if (!response.ok) {
    toast.error(msgResponseError.ERROR_GET_STARSHIPS);
  }
  const current = await response.json();
  return current;
};
