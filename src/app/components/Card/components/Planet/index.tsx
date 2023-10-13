import { IPlanets } from 'interface/IPlanets';
import React from 'react';
import './style.css';
import toUpperAllCases from '@/utils/toUpperAllCases';
import { getFilms, getResidents } from './utils/detailedInfo';

function PlanetCard({ data, isDetailed } : {
  data: IPlanets,
  isDetailed: boolean
}) {
  return (
    <div className="midPl p-2 grid gap-2">
      <p>Name: {data.name}</p>
      <p>Rotation Period: {data.rotation_period}</p>
      <p>Orbital Period: {data.orbital_period}</p>
      <p>Diameter: {data.diameter}</p>
      <p>Climate: {toUpperAllCases(data.climate)}</p>
      <p>Gravity: {toUpperAllCases(data.gravity)}</p>
      <p>Terrain: {toUpperAllCases(data.terrain)}</p>
      <p>Surface Water: {data.surface_water}</p>
      <p>Population: {data.population}</p>
      {
        isDetailed && (
          <>
            <span className="text-center">= Extra information! =</span>
            <p>Residents: {getResidents(data)}</p>
            <p>Films: {getFilms(data)}</p>
          </>
        )
      }
    </div>
  );
}

export default PlanetCard;
