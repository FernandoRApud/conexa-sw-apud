import { IFilms } from 'interface/IFilms';

export const getCharacters = (data: IFilms) => {
  const reducer = data.characters.reduce((accumulator, character, index) => {
    if (index === 0) {
      return character.name;
    }
    return `${accumulator}, ${character.name}`;
  }, '');
  return reducer.length > 0 ? reducer : 'No information';
};

export const getPlanets = (data: IFilms) => {
  const reducer = data.planets.reduce((accumulator, planet, index) => {
    if (index === 0) {
      return planet.name;
    }
    return `${accumulator}, ${planet.name}`;
  }, '');
  return reducer.length > 0 ? reducer : 'No information';
};
export const getStarships = (data: IFilms) => {
  const reducer = data.starships.reduce((accumulator, starship, index) => {
    if (index === 0) {
      return starship.name;
    }
    return `${accumulator}, ${starship.name}`;
  }, '');
  return reducer.length > 0 ? reducer : 'No information';
};

export const getVehicles = (data: IFilms) => {
  const reducer = data.vehicles.reduce((accumulator, vehicle, index) => {
    if (index === 0) {
      return vehicle.name;
    }
    return `${accumulator}, ${vehicle.name}`;
  }, '');
  return reducer.length > 0 ? reducer : 'No information';
};

export const getSpecies = (data: IFilms) => {
  const reducer = data.species.reduce((accumulator, specie, index) => {
    if (index === 0) {
      return specie.name;
    }
    return `${accumulator}, ${specie.name}`;
  }, '');
  return reducer.length > 0 ? reducer : 'No information';
};
