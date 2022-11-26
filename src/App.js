import React,{useState,useEffect} from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './Components/Header/Header.jsx'
import Home from './Pages/Home/Home.jsx'
import Popular from './Pages/Popular/Popular.jsx'
import Comedies from './Pages/Comedies/Comedies'
import Melodrama from './Pages/Melodrama/Melodrama.jsx'
import Fantastig from './Pages/Fantastig/Fantastig.jsx'
import Fighters from './Pages/Fighters/Fighters.jsx'
const App = () => {
  const[mov, setMov]=useState([])
  useEffect(() =>{
    async function fetchData(){
      const resp =await fetch('http://localhost:3000/db.json')
      const data =await resp.json()
      setMov(data)
    }
    fetchData()
  },[])
  // console.log(mov)
  const[pop, setPop]=useState([])
  useEffect(() =>{
    async function fetchData(){
      const resp =await fetch('http://localhost:3000/popular.json')
      const data =await resp.json()
      setPop(data)
    }
    fetchData()
  },[])
  console.log(pop)
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home mov={mov}/>}/>
        <Route path='/Popular' element={<Popular pop={pop}/>}/>
        <Route path='/Comedies' element={<Comedies/>}/>
        <Route path='/Melodram' element={<Melodrama/>}/>
        <Route path='/Fantastig' element={<Fantastig/>}/>
        <Route path='/Fighters' element={<Fighters/>}/>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App

