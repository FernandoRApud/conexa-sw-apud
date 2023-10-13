'use client';

import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { IFilms } from 'interface/IFilms';
import { IPeople } from 'interface/IPeople';
import { IPlanets } from 'interface/IPlanets';
import { ISpecies } from 'interface/ISpecies';
import { IStarships } from 'interface/IStarships';
import { IVehicles } from 'interface/IVehicles';
import getIdOfUrl from '@/utils/getIdOfUrl';
import { useRouter } from 'next/navigation';
import { indexedTypes } from 'enum/indexedTypes';
import { getLocalStorage, setLocalStorage } from '@/app/customeHooks/localStorageHook';

function ButtomButtons({ data, indexedType, isFavourites, isDetailed } : {
  data: IFilms | IPeople | IPlanets | ISpecies | IStarships | IVehicles,
  indexedType: indexedTypes.INDEX_FILMS | indexedTypes.INDEX_PEOPLE | indexedTypes.INDEX_PLANETS | indexedTypes.INDEX_STARSHIPS,
  isFavourites: boolean,
  isDetailed: boolean
}) {
  const router = useRouter();
  const [clickedFav, setClickedFav] = useState(false);
  const [clickedInfo, setClickedInfo] = useState(false);

  useEffect(() => {
    checkFavs();
  }, []);

  const checkFavs = () => {
    const localStorage = getLocalStorage(indexedType);
    if (localStorage.find((element: string) => element === data.url)) setClickedFav(true);
  };

  const saveFav = (url: string) => {
    const localStorage = getLocalStorage(indexedType);
    const index = localStorage.indexOf(data.url);
    if (index !== -1) {
      localStorage.splice(index, 1);
    } else {
      localStorage.push(url);
    }
    setLocalStorage(indexedType, localStorage);
    setClickedFav(!clickedFav);
  };

  const getMoreInfo = (url: string) => {
    router.push(`/${indexedType}/${getIdOfUrl(url)}`);
    setClickedInfo(true);
  };

  return (
    <div className="down flex justify-around bg-slate-700 rounded-lg h-10">
      {
        !isFavourites && (
          <button type="button" aria-label="Save" onClick={ () => saveFav(data.url) }>
            <FontAwesomeIcon icon={ faStar } color={ clickedFav ? 'white' : '#555555' } />
          </button>
        )
      }
      {
        !isDetailed && (
          <button type="button" onClick={ () => getMoreInfo(data.url) }>
            <p className={ `${clickedInfo ? 'text-slate-400 hover:text-slate-400' : 'hover:text-slate-200'}` }>
              Info
            </p>
          </button>
        )
      }
    </div>
  );
}

export default ButtomButtons;
