import { IPeople } from 'interface/IPeople';

export const getHomeworld = (data: IPeople) => {
  if (typeof data.homeworld === 'object') return data.homeworld.name;
};

export const getFilms = (data: IPeople) => {
  const reducer = data.films.reduce((accumulator, film, index) => {
    if (index === 0) {
      return film.title;
    }
    return `${accumulator}, ${film.title}`;
  }, '');
  return reducer.length > 0 ? reducer : 'No information';
};

export const getSpecies = (data: IPeople) => {
  const reducer = data.species.reduce((accumulator, specie, index) => {
    if (index === 0) {
      return specie.name;
    }
    return `${accumulator}, ${specie.name}`;
  }, '');
  return reducer.length > 0 ? reducer : 'No information';
};

export const getVehicles = (data: IPeople) => {
  const reducer = data.vehicles.reduce((accumulator, vehicle, index) => {
    if (index === 0) {
      return vehicle.name;
    }
    return `${accumulator}, ${vehicle.name}`;
  }, '');
  return reducer.length > 0 ? reducer : 'No information';
};

export const getStarships = (data: IPeople) => {
  const reducer = data.starships.reduce((accumulator, starship, index) => {
    if (index === 0) {
      return starship.name;
    }
    return `${accumulator}, ${starship.name}`;
  }, '');
  return reducer.length > 0 ? reducer : 'No information';
};
