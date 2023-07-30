
import { Account } from './components/Pages/Account/Account'
import { CardComponent } from './components/UI/CardComponent/CardComponent'
import { SearchComponent } from './components/UI/SearchComponent/Search'
import { SpecialOffers } from './components/UI/SpecialOffers/SpecialOffers'

function App() {


  return (
    <>      
      <SearchComponent />
      <CardComponent />
      <SpecialOffers />
      <Account/>
    </>
  )
}

export default App
