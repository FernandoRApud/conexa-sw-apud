import { IFilms } from './IFilms';
import { IPeople } from './IPeople';

export type IStarships = {
  name: string
  model: string
  starship_class: string
  manufacturer: string
  cost_in_credits: string
  length: string
  crew: string
  passengers: string
  max_atmosphering_speed: string
  hyperdrive_rating: string
  MGLT: string
  cargo_capacity: string
  consumables: string
  films: [] | IFilms[]
  pilots: [] | IPeople[]
  url: string
  created: string
  edited: string
};
