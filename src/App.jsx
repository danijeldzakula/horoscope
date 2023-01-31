import React, { useEffect, useState } from 'react'
import { ImageTransition } from './components/imageTransition/ImageTransition'
import { ImageControls } from './components/imageTransition/ImageControls'
import aries from './assets/aries.svg'
import cancer from './assets/cancer.svg'
import capricorn from './assets/capricorn.svg'
import libra from './assets/libra.svg'
import mercury from './assets/mercury.jpg';
import pluto from './assets/pluto.jpg';
import uranus from './assets/uranus.jpg';
import venus from './assets/venus.jpg';
import './App.css'

const data = [
  { _id: 'fksdkfjsdjk', alt: 'Aries', icon: aries, tooltip: 'Aries', position: 'box-item-top', url: mercury },
  { _id: 'dffgsdfgdfd', alt: 'Cancer', icon: cancer, tooltip: 'Cancer', position: 'box-item-right', url: pluto },
  { _id: 'sdjlfdfffoo', alt: 'Capricorn', icon: capricorn, tooltip: 'Capricorn', position: 'box-item-bottom', url: uranus },
  { _id: 'dskfgjdgfvf', alt: 'Libra', icon: libra, tooltip: 'Libra', position: 'box-item-left', url: venus }
]

function App() {
  const [imageUrl, setImageUrl] = useState({ url: mercury });

  function handleOnChangeImage(image) {
    setImageUrl({ url: image })
  }


  return (
    <div className="App">
      <div className='wrapper'>
        <div className='box'>
          <ImageTransition image={imageUrl.url} />
          <ImageControls data={data} handleChange={handleOnChangeImage} />
        </div>
      </div>
    </div>
  )
}

export default App
