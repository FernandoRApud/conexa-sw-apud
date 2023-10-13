import { IPeople } from './IPeople';
import { IPlanets } from './IPlanets';
import { ISpecies } from './ISpecies';
import { IStarships } from './IStarships';
import { IVehicles } from './IVehicles';

export type IFilms = {
  title: string
  episode_id: number
  opening_crawl: string
  director: string
  producer: string
  release_date: string
  species: [] | ISpecies[]
  starships: [] | IStarships[]
  vehicles: [] | IVehicles[]
  characters: [] | IPeople[]
  planets: [] | IPlanets[]
  url: string
  created: string
  edited: string
};
