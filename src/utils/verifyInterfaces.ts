import { IFilms } from 'interface/IFilms';
import { IPeople } from 'interface/IPeople';
import { IPlanets } from 'interface/IPlanets';
import { IStarships } from 'interface/IStarships';

export const isIFilms = (data: any): data is IFilms => {
  return 'title' in data;
};

export const isIPeople = (data: any): data is IPeople => {
  return 'birth_year' in data;
};

export const isIPlanets = (data: any): data is IPlanets => {
  return 'diameter' in data;
};

export const isIStarships = (data: any): data is IStarships => {
  return 'model' in data;
};
