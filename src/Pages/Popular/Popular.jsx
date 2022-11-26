import React from 'react'
import s from './Popular.module.scss'
const Popular = ({pop}) => {
  return (
    <div className={s.block}>
      {pop.map(item =>(
        <div className={s.back}>
        <img src={item.image} alt="" />
        <h1>
        {item.price} {item.name}
        </h1>
        <a href="https://premier.one/show/onlajf/season/1/episode/1?fullscreen=true">{item.button}</a>
      </div>
      ))}
    </div>
  )
}

export default Popular
