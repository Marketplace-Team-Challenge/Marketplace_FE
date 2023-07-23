// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { CardComponent } from './components/UI/CardComponent/CardComponent'
import { SearchComponent } from './components/UI/SearchComponent/Search'
import { SpecialOffers } from './components/UI/SpecialOffers/SpecialOffers'

function App() {


  return (
    <>      
      <SearchComponent />
      <CardComponent />
      <SpecialOffers/>
    </>
  )
}

export default App
