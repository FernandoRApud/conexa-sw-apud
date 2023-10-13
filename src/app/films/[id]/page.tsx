'use client';

import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { IResponse } from 'interface/IResponse';
import { indexedTypes } from 'enum/indexedTypes';
import { NextUIProvider } from '@nextui-org/react';
import { getFilmByIdBatched } from 'services/film.service';
import Loading from '../../components/Loading';
import 'react-toastify/dist/ReactToastify.css';
import Cards from '../../components/Cards';
import Header from '../../components/Header';

function FilmsById({ params }: { params: { id: string } }) {
  const defaultValue = {
    count: 0,
    results: [],
    length: 0,
  };

  const [loading, setLoading] = useState(true);
  const [loadingFilms, setLoadingFilms] = useState(true);
  const [films, setFilms] = useState<IResponse>(defaultValue);

  useEffect(() => {
    getInitialValues();
  }, []);

  const getInitialValues = async () => {
    try {
      const filmData = await getFilmByIdBatched(params.id);
      if (filmData) {
        setFilms({
          ...films, results: [filmData],
        });
      }
      setLoading(false);
      setLoadingFilms(false);
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
                  data={ films }
                  indexedType={ indexedTypes.INDEX_FILMS }
                  loading={ loadingFilms }
                  setLoading={ setLoadingFilms }
                  updateData={ (state) => {
                    setFilms(state);
                    setLoadingFilms(false);
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

export default FilmsById;
