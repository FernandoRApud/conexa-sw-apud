import { msgResponseError } from 'enum/msgResponseError';
import { routes } from 'enum/routes';
import { toast } from 'react-toastify';

export const getAllPlanets = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${routes.ROUTE_PLANET}`);
  if (!response.ok) {
    toast.error(msgResponseError.ERROR_GET_PLANETS);
  } else {
    const current = await response.json();
    return current;
  }
};

export const getPlanetByPage = async (page: number) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${routes.ROUTE_PLANET_PAGE}${page}`);
  if (!response.ok) {
    toast.error(msgResponseError.ERROR_GET_PLANETS);
  }
  const current = await response.json();
  return current;
};

export const getPlanetById = async (id: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${routes.ROUTE_PLANET_ID}${id}`);
  if (!response.ok) {
    toast.error(msgResponseError.ERROR_GET_PLANET);
  }
  const current = await response.json();
  return current;
};

export const getPlanetByIdBatched = async (id: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${routes.ROUTE_PLANET_ID}${id}/batched`);
  if (!response.ok) {
    toast.error(msgResponseError.ERROR_GET_PLANET);
  } else {
    const current = await response.json();
    return current;
  }
};

export const getPlanetBySearch = async (search: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${routes.ROUTE_PLANET_SEARCH}${search}`);
  if (!response.ok) {
    toast.error(msgResponseError.ERROR_GET_PLANETS);
  }
  const current = await response.json();
  return current;
};
