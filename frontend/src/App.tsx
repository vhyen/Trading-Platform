import './App.css'
import { Route, Routes } from 'react-router-dom'
import { DashBoard, ItemDetail, News, Wallet } from './pages/index'
import Register from './pages/Register'
import Login from './pages/Login'

function App() {
  return (
    <Routes>
        <Route path='/' element={<DashBoard/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<DashBoard/>}/>
        <Route path='/wallet' element={<DashBoard/>}/>
        <Route path='/item' element={<ItemDetail/>}/>
        <Route path='/wallet' element={<Wallet/>}/> 
        <Route path='/news' element={<News/>}/>
    </Routes>
  )
}

export default App