import { Route, Routes } from 'react-router-dom'
// import { FooterComponent } from './components/UI/FooterComponent/FooterComponent'
import { HeaderComponent } from './components/UI/HeaderComponent/HeaderComponent'
import { AuthComponent } from './components/UI/auth/AuthComponent'
import { RegistrationComponent } from './components/UI/auth/components/RegistrationComponent';
import { LoginComponent } from './components/UI/auth/components/LoginComponent';
import { Account } from './pages/Account/Account';
import { authLineTextLogin, authLineTextRegister, authTextRegister, authTitleLogin, authTitleRegister } from '../constants/Values';
import { MainPage } from './pages/MainPage';

function App() {
  return (
    <>
      <HeaderComponent />
      <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/registration" element={<AuthComponent authTitle={authTitleRegister}
      authLineText={authLineTextRegister} authText={authTextRegister} childComponent={<RegistrationComponent />}/>} />
      <Route path="/login" element={<AuthComponent authTitle={authTitleLogin}
      authLineText={authLineTextLogin} authText={authTextRegister} childComponent={<LoginComponent />}/>} />
      <Route path="/profile" element={<Account />} />
      </Routes>
      {/* <FooterComponent /> */}
    </>
  )
}

export default App;
