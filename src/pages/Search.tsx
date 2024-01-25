import { Button, TextField } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"
import { FC, useState } from "react"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { searchProductFetch } from "../store/actions/productsAction"
import CatalogComponent from "../components/catalogComponent/catalogComponent"




const Search: FC = () => {
 const [search, setSearch] = useState<string>('')
 const dispatch = useAppDispatch()
 const searchProducts = useAppSelector(state => state.productsSlice.searchProducts)

 const searchMineralHandle =  () => {
   dispatch(searchProductFetch(search))
 }

 return <div>
  <div style={{
   display: "flex",
   width: "70%",
   margin: "30px auto"
  }}>
   <TextField id="filled-basic" label="Найти" variant="filled" value={search} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setSearch(e.currentTarget.value) }} fullWidth />
   <Button onClick={searchMineralHandle} variant="contained" size="large">Найти</Button>
  </div>
  <CatalogComponent productCards={searchProducts ?? []} title={`Результаты поиска ${search}:`}/>
 </div>
}


export default Search