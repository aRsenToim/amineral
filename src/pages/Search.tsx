import { Button, TextField } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"
import { FC, useState } from "react"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { searchProductFetch } from "../store/actions/productsAction"




const Search: FC = () => {
 const [search, setSearch] = useState<string>('')
 const dispatch = useAppDispatch()
 const products = useAppSelector(state => state.productsSlice.products)

 const searchMineralHandle =  () => {
   dispatch(searchProductFetch(search))
 }

 return <div>
  <div style={{
   display: "flex",
   width: "70%",
   margin: "20px auto"
  }}>
   <TextField id="filled-basic" label="Найти" variant="filled" value={search} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setSearch(e.currentTarget.value) }} fullWidth />
   <Button onClick={searchMineralHandle} variant="contained" size="large">Найти</Button>
  </div>
  {JSON.stringify(products)}
 </div>
}


export default Search