import './App.css'
import { Route, Routes } from 'react-router-dom'
import { DashBoard, ItemDetail } from './pages/index'

function App() {
  return (
    <Routes>
        <Route path='/' element={<DashBoard/>}/>
        <Route path='/about' element={<DashBoard/>}/>
        <Route path='/wallet' element={<DashBoard/>}/>
        <Route path='/item' element={<ItemDetail/>}/>
        <Route path='/news' element={<DashBoard/>}/>
    </Routes>
  )
}

export default App
