import { FC, useEffect, useState } from "react"
import { DataGrid, GridColDef, GridEventListener } from "@mui/x-data-grid";
import { useMinerals } from "../hooks/useMinerals";
import { IProduct } from "../types/productType";
import { Button } from "@mui/material";
import { NavLink, Navigate } from "react-router-dom";

const columns: GridColDef[] = [
 { field: 'id', headerName: 'ID минерала', width: 250 },
 { field: 'title', headerName: 'Название минерала', width: 250 },
 { field: 'group', headerName: 'Группа минерала', width: 200 },
 { field: 'idGroup', headerName: 'ID Группы', width: 250 },
];


export interface IProductCard {
 id: string
 title: string
 idGroup: string
 group: string
}


const Catalog: FC = () => {
 const { products } = useMinerals()
 const [isRow, setIsRow] = useState<number[]>([])
 const [rows, setRows] = useState<IProductCard[] | null>(null)
 const [isRedirect, setIsRedirect] = useState<boolean>(false)


 const handleEvent: GridEventListener<'cellClick'> = (params) => {
  if (!params.value) {
   setIsRow([...isRow, params.row.id])
  } else {
   setIsRow([])
  }
 };

 useEffect(() => {
  if (products && !rows) {
   let arr: IProductCard[] = []
   products.map((product: IProduct) => {
    arr.push({
     id: product.idMineral,
     title: product.title,
     idGroup: product.group.id,
     group: product.group.title,
    })
   })
   setRows(arr)
  }
 })

 if (isRedirect) {
  return <Navigate to={`/mineral/${isRow?.at(-1)}`} />
 }


 return <div style={{
  margin: '0px auto',
  width: "80%"
 }}>
  <DataGrid
   onColumnHeaderClick={(value) => { console.log(value);
    }}
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
 </div>
}


export default Catalog