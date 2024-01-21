import { FC } from 'react'
import s from './layout.module.scss'
import { NavLink, Outlet } from 'react-router-dom'
import { Alert, AppBar, Avatar, Box, Button, Container, FormControl, IconButton, InputLabel, Menu, MenuItem, Select, Toolbar, Tooltip, Typography } from '@mui/material'
import { IRoute, routes } from '../../routes'
import AlertComponent from '../UI/alert/alertComponent'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { setIsOpen } from '../../store/slices/pagesSlice'



const Layout: FC = () => {
 const dispatch = useAppDispatch()
 const {title, isOpen, content} = useAppSelector(state => state.pagesSlice.alert)
 return <div>
  <AlertComponent isOpen={isOpen} title={title} content={content} close={() => {dispatch(setIsOpen())}}/>
  <AppBar position="static">
   <Container maxWidth="xl" style={{
    display: "flex",
    alignItems: "center"
   }}>
    <Toolbar disableGutters>
     <Typography
      variant="h6"
      noWrap
      component="a"
      href="/"
      sx={{
       mr: 2,
       display: { xs: 'none', md: 'flex' },
       fontFamily: 'Arial',
       fontWeight: 500,
       fontSize: 23,
       color: 'inherit',
       textDecoration: 'none',
      }}
     >
      MINERAL PANEL
     </Typography>
    </Toolbar>
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
     {routes.map((el: IRoute) => <div key={el.path}><NavLink className={s.navlink} to={el.path}><Button
      sx={{ my: 2, color: 'white', display: 'block' }}
     >
      {el.title}
     </Button></NavLink></div>)}
    </Box>
   </Container>
  </AppBar>
  <Container maxWidth="xl">
   <Outlet />
  </Container>
 </div>
}


export default Layout