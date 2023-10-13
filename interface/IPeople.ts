import { IFilms } from './IFilms';
import { IPlanets } from './IPlanets';
import { ISpecies } from './ISpecies';
import { IStarships } from './IStarships';
import { IVehicles } from './IVehicles';

export type IPeople = {
  name: string
  birth_year: string
  eye_color: string
  gender: string
  hair_color: string
  height: string
  mass: string
  skin_color: string
  homeworld: string | IPlanets
  films: [] | IFilms[]
  species: [] | ISpecies[]
  starships: [] | IStarships[]
  vehicles: [] | IVehicles[]
  url: string
  created: string
  edited: string
};
