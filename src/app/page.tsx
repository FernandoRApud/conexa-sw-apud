'use client';

import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { IResponse } from 'interface/IResponse';
import { indexedTypes } from 'enum/indexedTypes';
import { NextUIProvider } from '@nextui-org/react';
import getIdOfUrl from '@/utils/getIdOfUrl';
import { getPeopleById } from 'services/people.service';
import { getFilmById } from 'services/film.service';
import { getStarshipById } from 'services/starship.service';
import { getPlanetById } from 'services/planet.service';
import Loading from './components/Loading';
import 'react-toastify/dist/ReactToastify.css';
import Cards from './components/Cards';
import Header from './components/Header';
import { getLocalStorage } from './customeHooks/localStorageHook';

function Home() {
  const defaultValue = {
    count: 0,
    results: [],
    length: 0,
  };

  const [loading, setLoading] = useState(true);
  const [loadingPeople, setLoadingPeople] = useState(true);
  const [loadingFilms, setLoadingFilms] = useState(true);
  const [loadingStarships, setLoadingStarships] = useState(true);
  const [loadingPlanets, setLoadingPlanets] = useState(true);
  const [people, setPeople] = useState<IResponse>(defaultValue);
  const [films, setFilms] = useState<IResponse>(defaultValue);
  const [starships, setStarships] = useState<IResponse>(defaultValue);
  const [planets, setPlanets] = useState<IResponse>(defaultValue);

  useEffect(() => {
    getInitialValues();
  }, []);

  const fetchAll = async (urls: string[], type: string) => {
    const data = await Promise.all(urls.map((url) => {
      const id = getIdOfUrl(url);
      if (type === indexedTypes.INDEX_PEOPLE) return getPeopleById(id);
      if (type === indexedTypes.INDEX_FILMS) return getFilmById(id);
      if (type === indexedTypes.INDEX_STARSHIPS) return getStarshipById(id);
      if (type === indexedTypes.INDEX_PLANETS) return getPlanetById(id);
      return [];
    }));
    return data;
  };

  const getInitialValues = async () => {
    try {
      const peopleStorage = getLocalStorage(indexedTypes.INDEX_PEOPLE);
      const filmsStorage = getLocalStorage(indexedTypes.INDEX_FILMS);
      const starshipsStorage = getLocalStorage(indexedTypes.INDEX_STARSHIPS);
      const planetsStorage = getLocalStorage(indexedTypes.INDEX_PLANETS);
      const [peopleData, filmsData, starshipsData, planetsData] = await Promise.all([
        fetchAll(peopleStorage, indexedTypes.INDEX_PEOPLE),
        fetchAll(filmsStorage, indexedTypes.INDEX_FILMS),
        fetchAll(starshipsStorage, indexedTypes.INDEX_STARSHIPS),
        fetchAll(planetsStorage, indexedTypes.INDEX_PLANETS),
      ]);
      setPeople({
        ...people, results: peopleData,
      });
      setFilms({
        ...films, results: filmsData,
      });
      setStarships({
        ...starships, results: starshipsData,
      });
      setPlanets({
        ...planets, results: planetsData,
      });
      setLoading(false);
      setLoadingPeople(false);
      setLoadingFilms(false);
      setLoadingStarships(false);
      setLoadingPlanets(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <ToastContainer />
      {
        loading
          ? <Loading spinner={ false } label="" />
          : (
            <NextUIProvider>
              <Header />
              <p
                className="w-full text-center p-10 text-5xl"
              >
                Your Favourites!
              </p>
              <p
                className="w-full text-center p-10"
              >
                Welcome to this test App!, here you have favourites from the four principal flows. If you want to modify, you need to use their dedicated sections!
              </p>
              <div className=" bg-slate-900 rounded-lg m-5 p-5">
                <Cards
                  data={ people }
                  indexedType={ indexedTypes.INDEX_PEOPLE }
                  loading={ loadingPeople }
                  setLoading={ setLoadingPeople }
                  updateData={ (state) => {
                    setPeople(state);
                    setLoadingPeople(false);
                  } }
                  isFavourites
                  isDetailed={ false }
                />
              </div>
              <div className=" bg-slate-900 rounded-lg m-5 p-5">
                <Cards
                  data={ films }
                  indexedType={ indexedTypes.INDEX_FILMS }
                  loading={ loadingFilms }
                  setLoading={ setLoadingFilms }
                  updateData={ (state) => {
                    setFilms(state);
                    setLoadingFilms(false);
                  } }
                  isFavourites
                  isDetailed={ false }
                />
              </div>
              <div className=" bg-slate-900 rounded-lg m-5 p-5">
                <Cards
                  data={ starships }
                  indexedType={ indexedTypes.INDEX_STARSHIPS }
                  loading={ loadingStarships }
                  setLoading={ setLoadingStarships }
                  updateData={ (state) => {
                    setStarships(state);
                    setLoadingStarships(false);
                  } }
                  isFavourites
                  isDetailed={ false }
                />
              </div>
              <div className=" bg-slate-900 rounded-lg m-5 p-5 mb-0">
                <Cards
                  data={ planets }
                  indexedType={ indexedTypes.INDEX_PLANETS }
                  loading={ loadingPlanets }
                  setLoading={ setLoadingPlanets }
                  updateData={ (state) => {
                    setPlanets(state);
                    setLoadingPlanets(false);
                  } }
                  isFavourites
                  isDetailed={ false }
                />
              </div>
            </NextUIProvider>
          )
      }
    </>
  );
}

export default Home;
