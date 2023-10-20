import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Menu from './components/Menu'
import Home from './Pages/HomePage'

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Navbar OpenSidebar={OpenSidebar}/>
      <Menu openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Home />
    </div>
  )
}

export default App