import React, {
  ChangeEvent, useEffect, useState,
} from 'react';
import './style.css';
import { IResponse } from 'interface/IResponse';
import { IFilms } from 'interface/IFilms';
import { IPeople } from 'interface/IPeople';
import { IPlanets } from 'interface/IPlanets';
import { ISpecies } from 'interface/ISpecies';
import { IStarships } from 'interface/IStarships';
import { IVehicles } from 'interface/IVehicles';
import { indexedTypes } from 'enum/indexedTypes';
import toUpperAllCases from '@/utils/toUpperAllCases';
import { Input, Pagination } from '@nextui-org/react';
import { getPeopleByPage, getPeopleBySearch } from 'services/people.service';
import { getFilmByPage, getFilmBySearch } from 'services/film.service';
import { getStarshipByPage, getStarshipBySearch } from 'services/starship.service';
import { getPlanetByPage, getPlanetBySearch } from 'services/planet.service';
import Card from '../Card';
import Loading from '../Loading';

function Cards({ data, indexedType, updateData, loading, setLoading, isFavourites, isDetailed } : {
  data: IResponse,
  indexedType: indexedTypes.INDEX_FILMS | indexedTypes.INDEX_PEOPLE | indexedTypes.INDEX_PLANETS | indexedTypes.INDEX_STARSHIPS,
  updateData: (_response: IResponse) => void,
  loading: boolean,
  setLoading: (_boolean: boolean) => void,
  isFavourites: boolean,
  isDetailed: boolean
}) {
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(1);
  const NAME_INDEX = 'name';
  const TITLE_INDEX = 'title';

  useEffect(() => {
    setTotal(Math.ceil(data.count / 10));
  }, [data]);

  const generateKey = (result: IFilms | IPeople | IPlanets | ISpecies | IStarships | IVehicles) => {
    if (NAME_INDEX in result) {
      return result.name;
    }
    if (TITLE_INDEX in result) {
      return result.title;
    }
    return '';
  };

  const setCurrentPage = async (pageNumber: number) => {
    if (indexedType === indexedTypes.INDEX_PEOPLE) {
      setLoading(true);
      setPage(pageNumber);
      const people = await getPeopleByPage(pageNumber);
      updateData(people);
    }

    if (indexedType === indexedTypes.INDEX_FILMS) {
      setLoading(true);
      setPage(pageNumber);
      const film = await getFilmByPage(pageNumber);
      updateData(film);
    }

    if (indexedType === indexedTypes.INDEX_STARSHIPS) {
      setLoading(true);
      setPage(pageNumber);
      const starship = await getStarshipByPage(pageNumber);
      updateData(starship);
    }

    if (indexedType === indexedTypes.INDEX_PLANETS) {
      setLoading(true);
      setPage(pageNumber);
      const planet = await getPlanetByPage(pageNumber);
      updateData(planet);
    }
  };

  const debounce = (func: (_value: ChangeEvent<HTMLInputElement>) => void, delay: number) => {
    let timerId: number;

    return (value: ChangeEvent<HTMLInputElement>) => {
      clearTimeout(timerId);
      timerId = window.setTimeout(() => {
        func(value);
      }, delay);
    };
  };

  const search = debounce(async (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (!isFavourites && indexedType === indexedTypes.INDEX_PEOPLE) {
      setLoading(true);
      const response = await getPeopleBySearch(value);
      updateData(response);
    }

    if (!isFavourites && indexedType === indexedTypes.INDEX_FILMS) {
      setLoading(true);
      const response = await getFilmBySearch(value);
      updateData(response);
    }

    if (!isFavourites && indexedType === indexedTypes.INDEX_STARSHIPS) {
      setLoading(true);
      const response = await getStarshipBySearch(value);
      updateData(response);
    }

    if (!isFavourites && indexedType === indexedTypes.INDEX_PLANETS) {
      setLoading(true);
      const response = await getPlanetBySearch(value);
      updateData(response);
    }
  }, 2000);

  return (
    <>
      {
        !isDetailed && <h1>{toUpperAllCases(indexedType)}</h1>
      }
      {
        (data && data.results && data.results.length > 0 && !isFavourites && !isDetailed) && (
          <div className="input-container px-20 py-10">
            <Input
              key="outside"
              type="text"
              label="Search"
              labelPlacement="outside"
              description="You can filter searching! :)"
              className="inputFather"
              classNames={{
                label: 'labelInputColor',
                input: 'text-black',
              }}
              onChange={ search }
              isDisabled={ loading }
            />
          </div>
        )
      }
      <div>
        {
          loading
            ? (
              <div className="loading-container max-w-full flex justify-center min-h-full">
                <Loading spinner label="Fetching data, please await, the original API is really slow..." />
              </div>
            )
            : data && data.results && data.results.length > 0 ? (
              <>
                <div className="container grid gap-1 p-1 max-w-full px-20">
                  {
                    data.results.map((result) => (
                      <Card
                        keyReserved={ generateKey(result) }
                        data={ result }
                        indexedType={ indexedType }
                        key={ generateKey(result) }
                        isFavourites={ isFavourites }
                        isDetailed={ isDetailed }
                      />
                    ))
                  }
                </div>
              </>
            ) : (
              <span className="flex justify-center w-full text-center my-5">
                No data available
              </span>
            )
        }
        {
          data && data.results && total > 1 && (data.results.length > 0) && (
            <div
              className="paginationContainer pb-6"
            >
              <Pagination
                className=""
                total={ total }
                color="secondary"
                page={ page }
                classNames={{
                  cursor: 'bg-slate-700',
                }}
                isDisabled={ loading }
                onChange={ setCurrentPage }
              />
            </div>
          )
        }
      </div>
    </>
  );
}

export default Cards;
