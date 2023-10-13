import { IFilms } from 'interface/IFilms';
import React from 'react';
import './style.css';
import {
  getCharacters, getPlanets, getSpecies, getStarships, getVehicles,
} from './utils/detailedInfo';

function FilmCard({ data, isDetailed } : {
  data: IFilms,
  isDetailed: boolean
}) {
  return (
    <div className="midF p-2 grid gap-2 ">
      <p>Episode: {data.episode_id}</p>
      <p>Director: {data.director}</p>
      <p>Producer: {data.producer}</p>
      <p>Release Date: {data.release_date}</p>
      {
        isDetailed && (
          <>
            <span className="text-center">= Extra information! =</span>
            <p>Opening: {data.opening_crawl}</p>
            <p>Characters: {getCharacters(data)}</p>
            <p>Planets: {getPlanets(data)}</p>
            <p>Species: {getSpecies(data)}</p>
            <p>Vehicles: {getVehicles(data)}</p>
            <p>Starships: {getStarships(data)}</p>
          </>
        )
      }
    </div>
  );
}

export default FilmCard;
