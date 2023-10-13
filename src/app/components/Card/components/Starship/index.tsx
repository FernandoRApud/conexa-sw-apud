import { IStarships } from 'interface/IStarships';
import React from 'react';
import './style.css';
import transformSpeed from './utils/transformGender';
import { getFilms, getPilots } from './utils/detailedInfo';

function StarshipCard({ data, isDetailed } : {
  data: IStarships,
  isDetailed: boolean
}) {
  return (
    <div className="midS p-2 grid gap-2">
      <p>Model: {data.model}</p>
      <p>Manufacturer: {data.manufacturer}</p>
      <p>Cost: {data.cost_in_credits}</p>
      <p>Length: {data.length}</p>
      <p>Max Speed: {transformSpeed(data.max_atmosphering_speed)}</p>
      <p>Crew: {data.crew}</p>
      <p>Passengers: {data.passengers}</p>
      <p>Cargo Capacity: {data.cargo_capacity}</p>
      <p>Consumables: {data.consumables}</p>
      <p>Hyperdrive Rating: {data.hyperdrive_rating}</p>
      <p>MGLT: {data.MGLT}</p>
      <p>Starship Class: {data.starship_class}</p>
      {
        isDetailed && (
          <>
            <span className="text-center">= Extra information! =</span>
            <p>Pilots: {getPilots(data)}</p>
            <p>Films: {getFilms(data)}</p>
          </>
        )
      }
    </div>
  );
}

export default StarshipCard;
