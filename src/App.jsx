import React, { useState } from 'react'
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

const horoscope = [
  { _id: 'fksdkfjsdjk', alt: 'Aries', icon: aries, tooltip: 'Aries', position: 'box-item-top', url: mercury },
  { _id: 'dffgsdfgdfd', alt: 'Cancer', icon: cancer, tooltip: 'Cancer', position: 'box-item-right', url: pluto },
  { _id: 'sdjlfdfffoo', alt: 'Capricorn', icon: capricorn, tooltip: 'Capricorn', position: 'box-item-bottom', url: uranus },
  { _id: 'dskfgjdgfvf', alt: 'Libra', icon: libra, tooltip: 'Libra', position: 'box-item-left', url: venus }
]

const results = [
  { _id: 'dfhdjkfhdslkshdsijdfklglrhor', name: 'Unit' },
  { _id: 'cehdjkfhdsfkfsadijdfklglrfff', name: 'Set' },
  { _id: 'semdjkfhdsfkfsadijdfslglrfya', name: 'Seh' },
  { _id: 'fehdjkfhdsfksaddijdfklglrddd', name: 'Size' },
  { _id: 'idhdjkfhdsjkdaddijdfklglrigo', name: 'Color' },
  { _id: 'aihdjkfhdsakaaddijdfklglrpoo', name: 'Liquid' },
  { _id: 'lshdjkfhdsjkfssdijdfklglrfgq', name: 'Square' },
  { _id: 'qdhdjkfhdsfkfsadijdfklglrjht', name: 'Position' },
  { _id: 'pphdjkfhdsskfhddijdfklglrfow', name: 'Clean' },
  { _id: 'ophdjkfhdsfkasadijdfklglrfpz', name: 'Message' },
]

function App() {

  const [search, setSearch] = useState('');
  function handleOnSearch(value) {
    setSearch(value);
  }

  const [data, setData] = useState(results); // ORIGINAL DATA 
  const [updateData, setUpdateData] = useState([]); // DEEP COPY DATA 

  function handleOnChange({ actions, payload }) {
    switch(actions) {
      case 'add':
        // update old data 
        const newData = data.filter(item => item._id !== payload)
        setData(newData)
        // update new data 
        const addUpdateData = results.filter(item => item._id === payload)
        setUpdateData([...updateData, ...addUpdateData])
        // reset search 
        setSearch('')
        break;
      case 'remove':
        // update old data 
        const removeNewResult = results.filter(item => item._id === payload)
        setData([...data, ...removeNewResult])
        // update new data 
        const removeUpdateData = updateData.filter(item => item._id !== payload)
        setUpdateData(removeUpdateData)    
        break;
      default:
        console.warn('Dafault of: handleOnChange function!')
    }
  }

  // filter data by search 
  const filterData = data && data.filter(({ name }) => name.toLowerCase().includes(search))

  // image selected
  const [imageUrl, setImageUrl] = useState({ url: mercury });
  function handleOnChangeImage(image) {
    setImageUrl({ url: image })
  }
  return (
    <div className="App">
      <header className='header'>
        <div className='search-wrapper'>
          <input type='search' placeholder='Search...' className='input input-full' value={search || ''} onChange={(event) => handleOnSearch(event.target.value.toLowerCase())} />
        </div>
      </header>

      <section className='section'>
        <div className='container'>
          <div className='grid grid-cols-2 gap-x-2'>
            <div className='col'>
              <div className='card'>
                <h2>
                  <span>OLD</span>
                  <span className='badge'>{data && data.length}</span>
                </h2>

                {/* RENDER DATA ATTRIBUTES */}
                <div className='results grid grid-cols-2 gap-x-2 gap-y-2'>
                  {filterData && filterData.length > 0 && filterData.map(item => (
                      <span onClick={() => handleOnChange({ actions: 'add', payload: item._id })} className='badge' key={item._id}>{item.name}</span>
                    )
                  )}
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='card'>
                <h2>
                  <span>NEW</span>
                  <span className='badge'>{updateData && updateData.length}</span>
                </h2>

                {/* RENDER SAVE ATTRIBUTES */}
                <div className='results grid grid-cols-2 gap-y-2 gap-x-2'>
                  {updateData && updateData.length > 0 && updateData.map(item => (
                      <span onClick={() => handleOnChange(({ actions: 'remove', payload: item._id }))} className='badge' key={item._id}>{item.name}</span>
                    )  
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* <div className='wrapper'>
        <div className='box'>
          <ImageTransition image={imageUrl.url} />
          <ImageControls data={horoscope} handleChange={handleOnChangeImage} />
        </div>
      </div> */}
    </div>
  )
}

export default App
