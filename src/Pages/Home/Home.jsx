import React from 'react'
import s from './Home.module.scss'
import Slider from '../../Components/Slider/Slider.jsx'
const Home = ({mov}) => {
  return (
    <div>
      <Slider/>
      <div className={s.block}>
     {mov.map(item =>(
        <div className={s.back}>
          <img src={item.image} alt="" />
          <h1>
          {item.price} {item.name}
          </h1>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Home
