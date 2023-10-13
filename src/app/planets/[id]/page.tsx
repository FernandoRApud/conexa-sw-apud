'use client';

import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { IResponse } from 'interface/IResponse';
import { indexedTypes } from 'enum/indexedTypes';
import { NextUIProvider } from '@nextui-org/react';
import { getPlanetByIdBatched } from 'services/planet.service';
import Loading from '../../components/Loading';
import 'react-toastify/dist/ReactToastify.css';
import Cards from '../../components/Cards';
import Header from '../../components/Header';

function PlanetById({ params }: { params: { id: string } }) {
  const defaultValue = {
    count: 0,
    results: [],
    length: 0,
  };

  const [loading, setLoading] = useState(true);
  const [loadingPlanets, setLoadingPlanets] = useState(true);
  const [planets, setPlanets] = useState<IResponse>(defaultValue);

  useEffect(() => {
    getInitialValues();
  }, []);

  const getInitialValues = async () => {
    try {
      const planetData = await getPlanetByIdBatched(params.id);
      if (planetData) {
        setPlanets({
          ...planets, results: [planetData],
        });
      }
      setLoading(false);
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
                  isFavourites={ false }
                  isDetailed
                />
              </div>
            </NextUIProvider>
          )
      }
    </>
  );
}

export default PlanetById;
