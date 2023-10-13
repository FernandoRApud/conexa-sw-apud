import React from 'react';
import SWLogo from 'assets/SWLogo.png';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { indexedTypes } from 'enum/indexedTypes';
import './style.css';

function Header() {
  const router = useRouter();
  return (
    <div className="flex p-3 w-full bg-slate-800">
      <Image
        src={ SWLogo }
        alt="logo"
        className="w-20 mr-0 cursor-pointer"
        onClick={ () => router.push('/') }
      />
      <div className="flex justify-around w-full paths">
        <button type="button" onClick={ () => router.push(`/${indexedTypes.INDEX_PEOPLE}`) }>
          <span
            className="flex h-auto items-center"
          >
            People
          </span>
        </button>
        <button type="button" onClick={ () => router.push(`/${indexedTypes.INDEX_FILMS}`) }>
          <span
            className="flex h-auto items-center"
          >
            Films
          </span>
        </button>
        <button type="button" onClick={ () => router.push(`/${indexedTypes.INDEX_STARSHIPS}`) }>
          <span
            className="flex h-auto items-center"
          >
            Starship
          </span>
        </button>
        <button type="button" onClick={ () => router.push(`/${indexedTypes.INDEX_PLANETS}`) }>
          <span
            className="flex h-auto items-center"
          >
            Planet
          </span>
        </button>
      </div>
    </div>
  );
}

export default Header;
