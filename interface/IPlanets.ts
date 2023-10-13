import { IFilms } from './IFilms';
import { IPeople } from './IPeople';

export type IPlanets = {
  name: string
  diameter: string
  rotation_period: string
  orbital_period: string
  gravity: string
  population: string
  climate: string
  terrain: string
  surface_water: string
  residents: [] | IPeople[]
  films: [] | IFilms[]
  url: string
  created: string
  edited: string
};
