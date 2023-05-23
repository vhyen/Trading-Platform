import './App.css'
import { Route, Routes } from 'react-router-dom'
import { DashBoard, Wallet, News } from './pages'

function App() {
  return (
    <Routes>
        <Route path='/' element={<DashBoard/>}/>
        <Route path='/about' element={<DashBoard/>}/>
        <Route path='/wallet' element={<Wallet/>}/> 
        <Route path='/news' element={<News />}/>
    </Routes>
  )
}

export default App
