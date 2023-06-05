import './App.css'
import { Route, Routes } from 'react-router-dom'
import { DashBoard, ItemDetail, LogInPage, News, SignUpPage, Wallet } from './pages/index'
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './redux/store';
import LOCAL_STORAGE_KEYS from './constants/local_storage';
import client from './client/axios';
import { Account } from './constants/types';
import APIS from './constants/api';
import { removeToken, setAccount, setToken } from './redux/user/slice';
import LoginInPage from './pages/LogInPage';

function UnAuthenticatedApp() {
  return (
    <Routes>
        <Route path='/' element={<DashBoard/>}/>
        <Route path='/signup' element={<SignUpPage/>}/>
        <Route path='/login' element={<LogInPage/>}/>
        <Route path='/about' element={<DashBoard/>}/>
        <Route path='/item' element={<ItemDetail/>}/>
        <Route path='/wallet' element={<LoginInPage/>}/> 
        <Route path='/news' element={<News/>}/>
    </Routes>
  )
}

function AuthenticatedApp() {
  return (
    <Routes>
        <Route path='/' element={<DashBoard/>}/>
        <Route path='/about' element={<DashBoard/>}/>
        <Route path='/item' element={<ItemDetail/>}/>
        <Route path='/wallet' element={<Wallet/>}/> 
        <Route path='/news' element={<News/>}/>
    </Routes>
  )
}

function App() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const token = localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN_KEY);

  useEffect(() => {
    if (user.account || !token) return;
    client
      .get<Account>(APIS.GET_ACCOUNT, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((response) => {
        dispatch(setToken(token));
        dispatch(setAccount(response.data));
        client.defaults.headers.common.Authorization = `Token ${token}`;
      })
      .catch(() => {
        dispatch(removeToken());
      })
      .finally(() => {
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.token]);

  return user.account ? <AuthenticatedApp /> : <UnAuthenticatedApp />;
}

export default App
