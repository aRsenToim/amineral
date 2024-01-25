import { FC, useEffect, useState } from "react"
import { DataGrid, GridColDef, GridEventListener } from "@mui/x-data-grid";
import { useMinerals } from "../hooks/useMinerals";
import { IProduct } from "../types/productType";
import { Button } from "@mui/material";
import { NavLink, Navigate } from "react-router-dom";
import { useAppDispatch } from "../store/hooks";
import { deleteProductFetch } from "../store/actions/productsAction";

const columns: GridColDef[] = [
 { field: 'idMineral', headerName: 'ID минерала', width: 250 },
 { field: 'title', headerName: 'Название минерала', width: 250 },
 { field: 'group', headerName: 'Группа минерала', width: 200 },
 { field: 'idGroup', headerName: 'ID Группы', width: 250 },
 { field: 'id', headerName: 'ID', width: 250 },
];


export interface IProductCard {
 idMineral: string
 title: string
 idGroup: string
 group: string
 id: number
}


const Catalog: FC = () => {
 const { products } = useMinerals()
 const [isRow, setIsRow] = useState<number[]>([])
 const [rows, setRows] = useState<IProductCard[] | null>(null)
 const [isRedirect, setIsRedirect] = useState<boolean>(false)
 const dispatch = useAppDispatch()


 const handleEvent: GridEventListener<'cellClick'> = (params) => {
  if (!params.value) {
   setIsRow([...isRow, params.row.idMineral])
  } else {
   setIsRow([])
  }
 };

 

 useEffect(() => {
  if (products) {
   let arr: IProductCard[] = []
   products.map((product: IProduct) => {
    arr.push({
     idMineral: product.idMineral,
     id: product.id,
     title: product.title,
     idGroup: product.group.id,
     group: product.group.title,
    })
   })
   setRows(arr)
  }
 }, [products])


 if (isRedirect) {

  
  return <Navigate to={`/mineral/${isRow?.at(-1)}`} />
 }


 return <div style={{
  margin: '30px auto',
  width: "90%"
 }}>
  <DataGrid
   rows={rows || []}
   columns={columns}
   onCellClick={handleEvent}
   initialState={{
    pagination: {
     paginationModel: { page: 0, pageSize: 5 },
    },
   }}
   pageSizeOptions={[5, 10]}
   checkboxSelection
  />
  {JSON.stringify(isRow) == '[]' ? <Button variant="contained" disabled>
   Открыть
  </Button> : <Button onClick={() => { setIsRedirect(true) }} variant="contained">Открыть</Button>}
  {JSON.stringify(isRow) == '[]' ? <Button variant="contained" disabled>
   Удалить
  </Button> : <Button onClick={() => {dispatch(deleteProductFetch(rows?.at(-1)?.id ?? 0))}} variant="contained">Удалить</Button>}
 </div>
}


export default Catalog