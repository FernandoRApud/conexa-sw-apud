import React from 'react';
import './style.css';
import { Spinner } from '@nextui-org/react';
import video from '../../../../assets/hssw.mp4';

function Loading({ spinner, label } : { spinner: boolean, label: string }) {
  if (!spinner) {
    return (
      <div className="w-full h-screen">
        <div className="absolute top-0 left-0 w-full h-full opacity-40 glowing-div">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
          >
            <source src={ video } type="video/mp4" />
          </video>
        </div>
        <div
          className="absolute w-full h-full top-0 flex flex-col justify-center items-center text-white text-xl"
        >
          <div className="text-container">
            <p className="typing-text">
              Preparando salto al Hiper Espacio...
            </p>
          </div>
        </div>
      </div>
    );
  } return <Spinner label={ label } color="default" labelColor="warning" />;
}

export default Loading;
