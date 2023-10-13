import './style.css';
import { indexedTypes } from 'enum/indexedTypes';
import { DataByIndexedType } from 'interface/IDataByIndexedType';
import React from 'react';
import {
  isIFilms, isIPeople, isIPlanets, isIStarships,
} from '@/utils/verifyInterfaces';
import PeopleCard from './components/People';
import FilmCard from './components/Films';
import StarshipCard from './components/Starship';
import PlanetCard from './components/Planet';
import ButtomButtons from './components/BottomButtons';

function Card({ keyReserved, data, indexedType, isFavourites, isDetailed } : {
  keyReserved: string,
  data: DataByIndexedType[keyof DataByIndexedType],
  indexedType: indexedTypes.INDEX_FILMS | indexedTypes.INDEX_PEOPLE | indexedTypes.INDEX_PLANETS | indexedTypes.INDEX_STARSHIPS,
  isFavourites: boolean,
  isDetailed: boolean
}) {
  return (
    <div
      className="w-full rounded-lg bgcolor"
    >
      <h1
        className="rounded-lg w-full h-auto shadowImage text-center title"
      >
        <p className="flex justify-center items-center bg-slate-700 rounded-lg">{keyReserved}</p>
      </h1>
      {
        indexedType === indexedTypes.INDEX_PEOPLE && isIPeople(data) && (
          <PeopleCard data={ data } isDetailed={ isDetailed } />
        )
      }
      {
        indexedType === indexedTypes.INDEX_FILMS && isIFilms(data) && (
          <FilmCard data={ data } isDetailed={ isDetailed } />
        )
      }
      {
        indexedType === indexedTypes.INDEX_STARSHIPS && isIStarships(data) && (
          <StarshipCard data={ data } isDetailed={ isDetailed } />
        )
      }
      {
        indexedType === indexedTypes.INDEX_PLANETS && isIPlanets(data) && (
          <PlanetCard data={ data } isDetailed={ isDetailed } />
        )
      }
      <ButtomButtons
        data={ data }
        indexedType={ indexedType }
        isFavourites={ isFavourites }
        isDetailed={ isDetailed }
      />
    </div>
  );
}

export default Card;
