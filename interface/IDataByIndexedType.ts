import { indexedTypes } from 'enum/indexedTypes';
import { IFilms } from './IFilms';
import { IPeople } from './IPeople';
import { IPlanets } from './IPlanets';
import { IStarships } from './IStarships';
import { ISpecies } from './ISpecies';
import { IVehicles } from './IVehicles';

export type DataByIndexedType = {
  [indexedTypes.INDEX_FILMS]: IFilms;
  [indexedTypes.INDEX_PEOPLE]: IPeople;
  [indexedTypes.INDEX_PLANETS]: IPlanets;
  [indexedTypes.INDEX_STARSHIPS]: IStarships;
  [indexedTypes.INDEX_SPECIES]: ISpecies;
  [indexedTypes.INDEX_VEHICLES]: IVehicles;
};
