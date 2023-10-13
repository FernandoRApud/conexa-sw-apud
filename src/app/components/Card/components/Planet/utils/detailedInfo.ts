import { IPlanets } from 'interface/IPlanets';

export const getFilms = (data: IPlanets) => {
  const reducer = data.films.reduce((accumulator, film, index) => {
    if (index === 0) {
      return film.title;
    }
    return `${accumulator}, ${film.title}`;
  }, '');
  return reducer.length > 0 ? reducer : 'No information';
};
export const getResidents = (data: IPlanets) => {
  const reducer = data.residents.reduce((accumulator, residents, index) => {
    if (index === 0) {
      return residents.name;
    }
    return `${accumulator}, ${residents.name}`;
  }, '');
  return reducer.length > 0 ? reducer : 'No information';
};

