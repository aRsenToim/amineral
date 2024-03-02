import { FC, useEffect, useState } from "react"
import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material"
import { changeProduct, getProductFetch } from "../store/actions/productsAction"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { useParams } from "react-router-dom"
import { IGroup } from "../types/productType"
import { useGrouops } from "../hooks/useGroups"





const Change: FC = () => {
 const { id } = useParams()

 const dispatch = useAppDispatch()
 const { product, error } = useAppSelector(state => state.productsSlice)
 const { groups } = useGrouops()

 const [img, setImg] = useState<string>('')
 const [group, setGroup] = useState<IGroup>({ id: "", title: "" })

 const [syngony, setSyngony] = useState<string>('')
 const [formula, setFormula] = useState<string>('')
 const [hardness, setHardness] = useState<string>('')
 const [density, setDensity] = useState<string>('')
 const [cleavage, setCleavage] = useState<string>('')
 const [kink, setKink] = useState<string>('')
 const [color, setColor] = useState<string>('')
 const [strokeColor, setStrokeColor] = useState<string>('')
 const [shine, setShine] = useState<string>('')
 const [luminescence, setLuminescence] = useState<boolean>(false)

 const changeMineralHandle = () => {
  if (product) {
   dispatch(changeProduct({
    id: product?.id,
    idMineral: product?.idMineral,
    title: product?.title,
    img: img,
    group: group,
    properties: {
     syngony: syngony,
     formula: formula,
     hardness: hardness,
     density: density,
     cleavage: cleavage,
     kink: kink,
     color: color,
     strokeColor: strokeColor,
     shine: shine,
     luminescence: luminescence,
    }
   }))
  }
 }


 useEffect(() => {
  if (!product || id !== String(product.id)) {
   dispatch(getProductFetch(id ?? ''))
  }
  if (product) {
   setImg(product.img)
   setGroup(product.group)
   setSyngony(product.properties.syngony)
   setFormula(product.properties.formula)
   setHardness(product.properties.hardness)
   setDensity(product.properties.density)
   setCleavage(product.properties.cleavage)
   setKink(product.properties.kink)
   setColor(product.properties.color)
   setStrokeColor(product.properties.strokeColor)
   setShine(product.properties.shine)
   setLuminescence(product.properties.luminescence)
  }
 }, [product])

 return <div style={{
 }}>
  {product ? <> <div>
   <Box
    sx={{
     '& > :not(style)': { m: 2, width: '25ch' },
    }}>
    <Typography variant="h6" component="h2">
     Изменить минерал:
    </Typography>
    <div style={{ display: 'flex' }}>
     <Box
      component="form"
      sx={{
       '& > :not(style)': { m: 2, width: '30ch' },
      }}
     >
      <TextField id="outlined-basic" value={img} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
       setImg(e.currentTarget.value)
      }} label="IMG минерала" variant="outlined" />
      <FormControl>
       <InputLabel id="demo-simple-select-label">Люминесценция</InputLabel>
       <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={!luminescence ? 'Нет' : 'Есть'}
        label="Name group"
        onChange={(event: SelectChangeEvent) => {

        }}
       >
        <MenuItem onClick={() => {
         setLuminescence(true)
        }} value={'Есть'}>Есть</MenuItem>
        <MenuItem onClick={() => {
         setLuminescence(false)
        }} value={'Нет'}>Нет</MenuItem>
       </Select>
      </FormControl>
      <TextField id="outlined-basic" value={color} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
       setColor(e.currentTarget.value)
      }} label="Цвет минерала" variant="outlined" />
     </Box>
     <Box
      sx={{
       '& > :not(style)': { m: 2, width: '30ch' },
      }}>
      <FormControl>
       <InputLabel id="demo-simple-select-label">Название группы</InputLabel>
       <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={group?.title ?? ''}
        label="Name group"
        onChange={(event: SelectChangeEvent) => {
        }}
       >
        {groups?.map((group: IGroup) => <MenuItem key={group.id} onClick={() => {
         setGroup(group)
        }} value={group.title}>{group.title}</MenuItem>)}
       </Select>
      </FormControl>
      <TextField id="outlined-basic" value={syngony} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
       setSyngony(e.currentTarget.value)
      }} label="Сингония минерала" variant="outlined" />
      <TextField id="outlined-basic" value={formula} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
       setFormula(e.currentTarget.value)
      }} label="Формула минерала" variant="outlined" />
     </Box>
     <Box
      sx={{
       '& > :not(style)': { m: 2, width: '30ch' },
      }}>
      <TextField id="outlined-basic" value={hardness} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
       setHardness(e.currentTarget.value)
      }} label="Твердость минерала" variant="outlined" />
      <TextField id="outlined-basic" value={density} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
       setDensity(e.currentTarget.value)
      }} label="Плотность минерала" variant="outlined" />
      <TextField id="outlined-basic" value={cleavage} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
       setCleavage(e.currentTarget.value)
      }} label="Расщепление минерала" variant="outlined" />
     </Box>
     <Box
      sx={{
       '& > :not(style)': { m: 2, width: '30ch' },
      }}>
      <TextField id="outlined-basic" value={kink} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
       setKink(e.currentTarget.value)
      }} label="Излом минерала" variant="outlined" />
      <TextField id="outlined-basic" value={strokeColor} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
       setStrokeColor(e.currentTarget.value)
      }} label="Цвет излома" variant="outlined" />
      <TextField id="outlined-basic" value={shine} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
       setShine(e.currentTarget.value)
      }} label="Блеск минерала" variant="outlined" />
     </Box>
    </div>
   </Box>
  </div>
   <Box component="form"
    sx={{
     '& > :not(style)': { m: 2, width: '25ch' },
    }}>
    <Button onClick={changeMineralHandle} variant="contained">Изменить минерал</Button>
   </Box>
  </> : undefined}
 </div>
}


export default Change