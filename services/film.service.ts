import { msgResponseError } from 'enum/msgResponseError';
import { routes } from 'enum/routes';
import { toast } from 'react-toastify';

export const getAllFilms = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${routes.ROUTE_FILM}`);
  if (!response.ok) {
    toast.error(msgResponseError.ERROR_GET_FILMS);
  } else {
    const current = await response.json();
    return current;
  }
};

export const getFilmByPage = async (page: number) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${routes.ROUTE_FILM_PAGE}${page}`);
  if (!response.ok) {
    toast.error(msgResponseError.ERROR_GET_FILMS);
  }
  const current = await response.json();
  return current;
};

export const getFilmById = async (id: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${routes.ROUTE_FILM_ID}${id}`);
  if (!response.ok) {
    toast.error(msgResponseError.ERROR_GET_FILM);
  }
  const current = await response.json();
  return current;
};

export const getFilmByIdBatched = async (id: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${routes.ROUTE_FILM_ID}${id}/batched`);
  if (!response.ok) {
    toast.error(msgResponseError.ERROR_GET_FILM);
  } else {
    const current = await response.json();
    return current;
  }
};

export const getFilmBySearch = async (search: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${routes.ROUTE_FILM_SEARCH}${search}`);
  if (!response.ok) {
    toast.error(msgResponseError.ERROR_GET_FILMS);
  }
  const current = await response.json();
  return current;
};
