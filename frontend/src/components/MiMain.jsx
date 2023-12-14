
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';

import Aside from './Aside.jsx'
import Login from './Login.jsx'
import Registro from './Registro.jsx'
import Reset from './Reset.jsx'
import MainSection from '../pages/MainSection.jsx'
import Info from '../pages//Info.jsx';
import Perfil from '../pages//Perfil.jsx';
import InfoAdmin from './InfoAdmin.jsx';

function MiMain() {

    return (
      <>
        <div className='mi-main'>

          <Aside />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/registro" element={<Registro/>} />
            <Route path="/reset/:registrationCode" element={<Reset/>} />
            <Route path="/usuarios" element={<MainSection/>} />
            <Route path="/infoAdmin" element={<InfoAdmin/>} />
            <Route path="/info" element={<Info />} />
            <Route path="/perfil" element={<Perfil />} />

          </Routes>
         
        </div>
      
      </>
    )
  }
  
  export default MiMain
  