import {combineReducers, configureStore} from '@reduxjs/toolkit'
import productsSlice from './slices/productsSlice'
import pagesSlice from './slices/pagesSlice'


const rootReducers = combineReducers({
 productsSlice: productsSlice,
 pagesSlice: pagesSlice
})


export const setupStore = () => {
 return configureStore({
  reducer: rootReducers
 })
}


export type RootState = ReturnType<typeof rootReducers>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']