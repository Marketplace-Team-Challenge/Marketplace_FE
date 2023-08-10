import { Route, Routes } from 'react-router-dom'
// import { FooterComponent } from './components/UI/FooterComponent/FooterComponent'
import { HeaderComponent } from './components/UI/HeaderComponent/HeaderComponent'
import { AuthComponent } from './components/UI/auth/AuthComponent'
import { RegistrationComponent } from './components/UI/auth/components/RegistrationComponent';
import { LoginComponent } from './components/UI/auth/components/LoginComponent';
import { Account } from './pages/Account/Account';
import { authLineTextLogin, authLineTextRegister, authTextLogin, authTextRegister, authTitleLogin, authTitleRegister } from './constants/Values';
import { MainPage } from './pages/MainPage';
import { useSelector } from 'react-redux';
import { getUserInfo } from './store/auth/selectors';

function App() {
  const userInfo = useSelector(getUserInfo);
  return (
    <>
      <HeaderComponent />
      <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/registration" element={<AuthComponent authTitle={authTitleRegister}
      authLineText={authLineTextRegister} authText={authTextRegister} childComponent={<RegistrationComponent />}/>} />
      <Route path="/login" element={<AuthComponent authTitle={authTitleLogin}
      authLineText={authLineTextLogin} authText={authTextLogin} childComponent={<LoginComponent />}/>} />
      {userInfo.isAuth && (
      <Route path="/profile" element={<Account />} />
      )}
      </Routes>
      {/* <FooterComponent /> */}
    </>
  )
}

export default App;
