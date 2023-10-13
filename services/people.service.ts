import { msgResponseError } from 'enum/msgResponseError';
import { routes } from 'enum/routes';
import { toast } from 'react-toastify';

export const getAllPeople = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${routes.ROUTE_PEOPLE}`);
  if (!response.ok) {
    toast.error(msgResponseError.ERROR_GET_PEOPLES);
  } else {
    const current = await response.json();
    return current;
  }
};

export const getPeopleByPage = async (page: number) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${routes.ROUTE_PEOPLE_PAGE}${page}`);
  if (!response.ok) {
    toast.error(msgResponseError.ERROR_GET_PEOPLES);
  }
  const current = await response.json();
  return current;
};

export const getPeopleById = async (id: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${routes.ROUTE_PEOPLE_ID}${id}`);
  if (!response.ok) {
    toast.error(msgResponseError.ERROR_GET_PEOPLE);
  } else {
    const current = await response.json();
    return current;
  }
};

export const getPeopleByIdBatched = async (id: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${routes.ROUTE_PEOPLE_ID}${id}/batched`);
  if (!response.ok) {
    toast.error(msgResponseError.ERROR_GET_PEOPLE);
  } else {
    const current = await response.json();
    return current;
  }
};

export const getPeopleBySearch = async (search: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${routes.ROUTE_PEOPLE_SEARCH}${search}`);
  if (!response.ok) {
    toast.error(msgResponseError.ERROR_GET_PEOPLES);
  }
  const current = await response.json();
  return current;
};
