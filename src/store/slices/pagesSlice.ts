import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGroup } from "../../types/productType";

interface IInitialState {
 groups: IGroup[] | null
 error: string
 alert: {
  isOpen: boolean,
  content: string
  title: string
 }
}

const initialState: IInitialState = {
 groups: null,
 error: '',
 alert: {
  isOpen: false,
  content: '',
  title: ''
 }
}


const pagesSlice = createSlice({
 name: "pagesSlice",
 initialState,
 reducers: {
  setGroups(state, action: PayloadAction<IGroup[]>) {
   state.groups = action.payload
  },
  setError(state, action: PayloadAction<string>) {
   state.error = action.payload
  },
  createGroup(state, action: PayloadAction<IGroup>) {
   state.groups?.push(action.payload)
  },
  setIsOpen(state){
   state.alert.isOpen = state.alert.isOpen ? false : true 
  },
  setContent(state, action){
   state.alert.content = action.payload
  },
  setTitleAlert(state, action: PayloadAction<string>){
   state.alert.title = action.payload
  }
 }
})

export default pagesSlice.reducer
export const { setError, setGroups, createGroup, setTitleAlert, setContent, setIsOpen } = pagesSlice.actions