import { FC } from "react"
import { Route, Routes } from "react-router-dom"
import { IRoute, addRoutes, routes } from "."
import Layout from "../components/layout/layout"



const RoutesApp: FC = () => {
 return <Routes>
  <Route path="/" element={<Layout />}>
   {routes.map((route: IRoute) => <Route path={route.path} element={<route.element />} />)}
   {addRoutes.map((route: IRoute) => <Route path={route.path} element={<route.element />} />)}
  </Route>
 </Routes>
}

export default RoutesApp