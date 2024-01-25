import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../types/productType";

interface IInitialState {
 products: IProduct[] | null,
 searchProducts: IProduct[] | null,
 error: string
 product: IProduct | null
}

const initialState: IInitialState = {
 products: null,
 searchProducts: null,
 error: '',
 product: null
}


const productsSlice = createSlice({
 name: "productsSlice",
 initialState,
 reducers: {
  setProducts(state, action: PayloadAction<IProduct[]>){
   state.products = action.payload
  },
  setError(state, action: PayloadAction<string>){
   state.error = action.payload
  },
  setProduct(state, action: PayloadAction<IProduct>){
   state.product = action.payload
  },
  setSearchProducts(state, action: PayloadAction<IProduct[]>){
   state.searchProducts = action.payload
  }
 }
})

export default productsSlice.reducer
export const {setError, setProducts, setSearchProducts, setProduct} = productsSlice.actions