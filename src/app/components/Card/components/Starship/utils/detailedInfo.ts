import { IStarships } from 'interface/IStarships';

export const getPilots = (data: IStarships) => {
  const reducer = data.pilots.reduce((accumulator, pilot, index) => {
    if (index === 0) {
      return pilot.name;
    }
    return `${accumulator}, ${pilot.name}`;
  }, '');
  return reducer.length > 0 ? reducer : 'No information';
};

export const getFilms = (data: IStarships) => {
  const reducer = data.films.reduce((accumulator, film, index) => {
    if (index === 0) {
      return film.title;
    }
    return `${accumulator}, ${film.title}`;
  }, '');
  return reducer.length > 0 ? reducer : 'No information';
};
