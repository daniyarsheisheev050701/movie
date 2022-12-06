import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Header.module.scss'
import logo from '../../img/loss.png'
function Header() {
  return (
        <div className={s.navbar}>
      <div>
      <img src={logo} alt="" />
      </div>
      
      <div className={s.gaps}>
      <NavLink to='/'>
        Главная
      </NavLink>
      <NavLink to='/Popular'>
        популярные
      </NavLink>
      <NavLink to='/Comedies'>
        Комедии
      </NavLink>
      <NavLink to='/Melodramy'>
        Мелодрамы
      </NavLink>
      <NavLink to='/Fantastig'>
        Фантастика
      </NavLink>
      <NavLink to='/Fighters'>
        Боевики
      </NavLink>
      </div>
     <div>
     <input type="Поиск" />
     </div>
      
    </div>
  )
}

export default Header

