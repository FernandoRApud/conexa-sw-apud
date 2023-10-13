import { IPeople } from 'interface/IPeople';
import React from 'react';
import './style.css';
import toUpperAllCases from '@/utils/toUpperAllCases';
import transformGender from './utils/transformGender';
import transformHair from './utils/transformHair';
import {
  getFilms, getHomeworld, getSpecies, getStarships, getVehicles,
} from './utils/detailedInfo';

function PeopleCard({ data, isDetailed } : {
  data: IPeople,
  isDetailed: boolean
}) {
  return (
    <div className="midP p-2 grid gap-2">
      <p>Height: {data.height}</p>
      <p>Mass: {data.mass}</p>
      <p>Hair Color: {transformHair(toUpperAllCases(data.hair_color))}</p>
      <p>Skin Color: {toUpperAllCases(data.skin_color)}</p>
      <p>Eye Color: {toUpperAllCases(data.eye_color)}</p>
      <p>Birth Year: {data.birth_year}</p>
      <p>Gender: {transformGender(data.gender)}</p>
      {
        isDetailed && (
          <>
            <span className="text-center">= Extra information! =</span>
            <p>Homeworld: {getHomeworld(data)}</p>
            <p>Films: {getFilms(data)}</p>
            <p>Species: {getSpecies(data)}</p>
            <p>Vehicles: {getVehicles(data)}</p>
            <p>Starships: {getStarships(data)}</p>
          </>
        )
      }
    </div>
  );
}

export default PeopleCard;
