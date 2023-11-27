
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';

import Aside from './Aside.jsx'
import MainSection from '../pages/MainSection.jsx'

function MiMain() {

    return (
      <>
        <div className='mi-main'>

          <Aside />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/usuarios" element={<MainSection/>} />

          </Routes>
         
        </div>
      
      </>
    )
  }
  
  export default MiMain
  