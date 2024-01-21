import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getProductsFetch } from "../store/actions/productsAction";




export function useMinerals(){
 const dispatch = useAppDispatch()
 const {error, products} = useAppSelector(state => state.productsSlice)

 useEffect(() => {
  if (!products) {
   dispatch(getProductsFetch())
  }
 })


 return {products, error}
}