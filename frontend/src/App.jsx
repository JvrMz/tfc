import Header from './components/Header.jsx'
import Nav from './components/Nav.jsx'
import MiMain from './components/MiMain.jsx'
import Footer from './components/Footer.jsx'

import UserProvider from './context/UserProvider.jsx'
import './App.css'

function App() {

  return (
    <div className='body'>
      <UserProvider>
        <Header />
        <Nav />
        <MiMain />
        <Footer />
      </UserProvider>
    </div>
  )
}

export default App
