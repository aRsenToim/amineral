import { FC } from 'react'
import s from './layout.module.scss'
import { NavLink, Outlet } from 'react-router-dom'
import { Alert, AppBar, Avatar, Box, Button, Container, FormControl, IconButton, InputLabel, Menu, MenuItem, Select, Toolbar, Tooltip, Typography } from '@mui/material'
import { IRoute, routes } from '../../routes'
import AlertComponent from '../UI/alert/alertComponent'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { setIsOpen } from '../../store/slices/pagesSlice'
import Navbar from '../navbar/navbar'



const Layout: FC = () => {
 const dispatch = useAppDispatch()
 const {title, isOpen, content} = useAppSelector(state => state.pagesSlice.alert)
 return <div className={s.Layout}>
  <AlertComponent isOpen={isOpen} title={title} content={content} close={() => {dispatch(setIsOpen())}}/>
  <Navbar/>
  <Container maxWidth="xl">
   <Outlet />
  </Container>
 </div>
}


export default Layout