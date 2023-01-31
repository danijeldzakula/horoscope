import { useState } from 'react'
import { ImageTransition } from './components/imageTransition/ImageTransition'
import aries from './assets/aries.svg'
import cancer from './assets/cancer.svg'
import capricorn from './assets/capricorn.svg'
import libra from './assets/libra.svg'
import './App.css'



function App() {
  const [imageUrl, setImageUrl] = useState('../mercury.jpg');

  function handleOnChangeImage(image) {
    setImageUrl(image)
  }

  return (
    <div className="App">
      <div className='wrapper'>
        <div className='box'>
          <ImageTransition url={imageUrl} />

          <span onClick={() => handleOnChangeImage('../mercury.jpg')} className='box-item box-item-top'>
            <img src={aries} alt="" className='img' />
          </span>
          <span onClick={() => handleOnChangeImage('../pluto.jpg')} className='box-item box-item-right'>
            <img src={cancer} alt="" className='img' />
          </span>
          <span onClick={() => handleOnChangeImage('../uranus.jpg')} className='box-item box-item-bottom'>
            <img src={capricorn} alt="" className='img' />
          </span>
          <span onClick={() => handleOnChangeImage('../venus.jpg')} className='box-item box-item-left'>
            <img src={libra} alt="" className='img' />
          </span>
        </div>
      </div>

    </div>
  )
}

export default App
