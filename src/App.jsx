import React, { useState } from 'react'
import { ImageTransition } from './components/imageTransition/ImageTransition'
import aries from './assets/aries.svg'
import cancer from './assets/cancer.svg'
import capricorn from './assets/capricorn.svg'
import libra from './assets/libra.svg'

import mercury from './assets/mercury.jpg';
import pluto from './assets/pluto.jpg';
import uranus from './assets/uranus.jpg';
import venus from './assets/venus.jpg';

// const mercury = React.lazy(() => import('./assets/mercury.jpg'));
// const pluto = React.lazy(() => import('./assets/pluto.jpg'));
// const uranus = React.lazy(() => import('./assets/uranus.jpg'));
// const venus = React.lazy(() => import('./assets/venus.jpg'));

import './App.css'



function App() {
  const [imageUrl, setImageUrl] = useState(mercury);

  function handleOnChangeImage(image) {
    setImageUrl(image)
  }

  return (
    <div className="App">
      <div className='wrapper'>
        <div className='box'>
          <ImageTransition url={imageUrl} />

          <span onClick={() => handleOnChangeImage(mercury)} className='box-item box-item-top'>
            <img src={aries} alt="" className='img' />
          </span>
          <span onClick={() => handleOnChangeImage(pluto)} className='box-item box-item-right'>
            <img src={cancer} alt="" className='img' />
          </span>
          <span onClick={() => handleOnChangeImage(uranus)} className='box-item box-item-bottom'>
            <img src={capricorn} alt="" className='img' />
          </span>
          <span onClick={() => handleOnChangeImage(venus)} className='box-item box-item-left'>
            <img src={libra} alt="" className='img' />
          </span>
        </div>
      </div>
    </div>
  )
}

export default App
