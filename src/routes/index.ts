import React from "react"
import Home from "../pages/home"
import Create from "../pages/Create"
import Catalog from "../pages/catalog"
import Search from "../pages/Search"
import CreateGroup from "../pages/CreateGroup"
import Mineral from "../pages/Mineral"
import Info from "../pages/info"
import Change from "../pages/change"



export interface IRoute {
 path: string
 element: React.ComponentType
 title: string
}

enum RoutesNames {
 Home = '/',
 Create = '/create',
 CreateGroup = '/creategroup',
 Catalog = '/catalog',
 Search = '/search',
 Mineral = '/mineral/:id',
 Info = '/info',
 Сhange = '/change/:id'
}

export const routes: IRoute[] = [
 {
  path: RoutesNames.Catalog,
  element: Catalog,
  title: "Каталог"
 },
 {
  path: RoutesNames.Create,
  element: Create,
  title: "Создать минерал"
 },
 {
  path: RoutesNames.CreateGroup,
  element: CreateGroup,
  title: "Создать группу"
 },
 {
  path: RoutesNames.Search,
  element: Search,
  title: "Поиск"
 },
 {
  path: RoutesNames.Info,
  element: Info,
  title: "Информация о сайте"
 },
 {
  path: RoutesNames.Home,
  element: Home,
  title: ""
 },
 {
  path: RoutesNames.Mineral,
  element: Mineral,
  title: "Mineral"
 },
 {
  path: RoutesNames.Сhange,
  element: Change,
  title: ""
 }
]
