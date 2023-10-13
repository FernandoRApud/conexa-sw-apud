'use client';

import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { IResponse } from 'interface/IResponse';
import { indexedTypes } from 'enum/indexedTypes';
import { NextUIProvider } from '@nextui-org/react';
import { getAllStarships } from 'services/starship.service';
import Loading from '../components/Loading';
import 'react-toastify/dist/ReactToastify.css';
import Cards from '../components/Cards';
import Header from '../components/Header';

function Starship() {
  const defaultValue = {
    count: 0,
    results: [],
    length: 0,
  };

  const [loading, setLoading] = useState(true);
  const [loadingStarships, setLoadingStarships] = useState(true);
  const [starships, setStarships] = useState<IResponse>(defaultValue);

  useEffect(() => {
    getInitialValues();
  }, []);

  const getInitialValues = async () => {
    try {
      const planetData = await getAllStarships();
      setStarships(planetData);
      setLoading(false);
      setLoadingStarships(false);
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
              <div className=" bg-slate-900 rounded-lg m-5 p-5 mb-0">
                <Cards
                  data={ starships }
                  indexedType={ indexedTypes.INDEX_STARSHIPS }
                  loading={ loadingStarships }
                  setLoading={ setLoadingStarships }
                  updateData={ (state) => {
                    setStarships(state);
                    setLoadingStarships(false);
                  } }
                  isFavourites={ false }
                  isDetailed={ false }
                />
              </div>
            </NextUIProvider>
          )
      }
    </>
  );
}

export default Starship;
