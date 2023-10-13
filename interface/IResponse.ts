import { Url } from 'url';
import { IPeople } from './IPeople';
import { ISpecies } from './ISpecies';
import { IStarships } from './IStarships';
import { IVehicles } from './IVehicles';
import { IPlanets } from './IPlanets';
import { IFilms } from './IFilms';

export type IResponse = {
  count: number,
  next?: Url,
  previous?: Url
  results: IFilms[] | IPeople[] | IPlanets[] | ISpecies[] | IStarships[] | IVehicles[]
  length: number
}
