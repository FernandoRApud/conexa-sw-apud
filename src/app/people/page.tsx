'use client';

import React, { useEffect, useState } from 'react';
import { getAllPeople } from 'services/people.service';
import { ToastContainer } from 'react-toastify';
import { IResponse } from 'interface/IResponse';
import { indexedTypes } from 'enum/indexedTypes';
import { NextUIProvider } from '@nextui-org/react';
import Loading from '../components/Loading';
import 'react-toastify/dist/ReactToastify.css';
import Cards from '../components/Cards';
import Header from '../components/Header';

function People() {
  const defaultValue = {
    count: 0,
    results: [],
    length: 0,
  };

  const [loading, setLoading] = useState(true);
  const [loadingPeople, setLoadingPeople] = useState(true);
  const [people, setPeople] = useState<IResponse>(defaultValue);

  useEffect(() => {
    getInitialValues();
  }, []);

  const getInitialValues = async () => {
    try {
      const peopleData = await getAllPeople();
      setPeople(peopleData);
      setLoading(false);
      setLoadingPeople(false);
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
                  data={ people }
                  indexedType={ indexedTypes.INDEX_PEOPLE }
                  loading={ loadingPeople }
                  setLoading={ setLoadingPeople }
                  updateData={ (state) => {
                    setPeople(state);
                    setLoadingPeople(false);
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

export default People;
