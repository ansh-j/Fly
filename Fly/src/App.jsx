import React from 'react'
import Footer from './components/Footer'
import Home from './components/Home'
import Info from './components/Info'
import Lounge from './components/Lounge'
import Navbar from './components/Navbar'
import Search from './components/Search'
import Subscribers from './components/Subscribers'
import Support from './components/Support'
import Travelers from './components/Travelers'



const App = () => {
  return (
    <div>   
      <Navbar />
      <Home />
      <Search />
      <Support />
      <Info />
      <Lounge />
      <Travelers />
      <Subscribers />
      <Footer />
    </div>  
  )
}

export default App