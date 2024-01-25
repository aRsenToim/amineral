import { FC } from 'react'
import s from './navbar.module.scss'
import { NavLink } from 'react-router-dom'



const Navbar: FC = () => {
 return <ul className={s.Navbar}>
  <li className={s.Navbar__logo}>
   <NavLink to={'/'}>
    <img src="/img/logo.png" alt="" />
   </NavLink>
  </li>
  <li className={s.Navbar__item}>
   <img src="/img/icons/catalog.png" alt="" />
   <NavLink to={'/catalog'} className={({ isActive }) => isActive ? s.Navbar__linkActive : s.Navbar__link}>
    Каталог
   </NavLink>
  </li>
  <li className={s.Navbar__item}>
   <img src="/img/icons/search.png" alt="" />
   <NavLink to={'/search'} className={({ isActive }) => isActive ? s.Navbar__linkActive : s.Navbar__link}>
    Поиск
   </NavLink>
  </li>
  <li className={s.Navbar__item}>
   <img src="/img/icons/add.png" alt="" />
   <NavLink to={'/create'} className={({ isActive }) => isActive ? s.Navbar__linkActive : s.Navbar__link}>
    Создать
   </NavLink>
  </li>
  <li className={s.Navbar__item}>
   <img src="/img/icons/add.png" alt="" />
   <NavLink to={'/createGroup'} className={({ isActive }) => isActive ? s.Navbar__linkActive : s.Navbar__link}>
    Создать группу
   </NavLink>
  </li>
  <li className={s.Navbar__item}>
   <img src="/img/icons/info.png" alt="" />
   <NavLink to={'/info'} className={({ isActive }) => isActive ? s.Navbar__linkActive : s.Navbar__link}>
    Информация о сайте
   </NavLink>
  </li>
 </ul>
}


export default Navbar