import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from "@mui/material"
import { FC, useState } from "react"
import { generatorID } from "../helpers/generator"
import { useGrouops } from "../hooks/useGroups"
import { IGroup } from "../types/productType"
import { useAppDispatch } from "../store/hooks"
import { createProductFetch } from "../store/actions/productsAction"
import { setContent, setIsOpen, setTitleAlert } from "../store/slices/pagesSlice"




const Create: FC = () => {
 const dispatch = useAppDispatch()
 const { groups, error } = useGrouops()

 const [title, setTitle] = useState<string>('')
 const [img, setImg] = useState<string>('')
 const [id, setID] = useState<number>(generatorID())
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

 const resetFrom = () => {
  setTitle('')
  setImg('')
  setID(0)
  setGroup({ id: "123", title: "" })
  setSyngony('')
  setFormula('')
  setHardness('')
  setDensity('')
  setCleavage('')
  setKink('')
  setColor('')
  setStrokeColor('')
  setShine('')
 }

 const createMineralHandle = () => {
  dispatch(createProductFetch({
   id,
   idMineral: `${id}`,
   title,
   img,
   group: group,
   properties: {
    syngony,
    formula,
    hardness,
    density,
    cleavage,
    kink,
    color,
    strokeColor,
    shine,
    luminescence
   }
  }))
  resetFrom()
 }


 return <div>
  <Box
   sx={{
    '& > :not(style)': { m: 2, width: '25ch' },
   }}>
   <Typography variant="h6" component="h2">
    Создать минерал:
   </Typography>
   <div style={{ display: 'flex' }}>
    <Box
     component="form"
     sx={{
      '& > :not(style)': { m: 2, width: '30ch' },
     }}
    >
     <TextField id="outlined-basic" value={id} label="ID минерала" variant="outlined" />
     <TextField id="outlined-basic" value={title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(e.currentTarget.value)
     }} label="Название минерала" variant="outlined" />
     <TextField id="outlined-basic" value={img} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
      setImg(e.currentTarget.value)
     }} label="IMG минерала" variant="outlined" />
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
    <Box
     sx={{
      '& > :not(style)': { m: 2, width: '30ch' },
     }}>
     <TextField id="outlined-basic" value={color} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
      setColor(e.currentTarget.value)
     }} label="Цвет минерала" variant="outlined" />
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
    </Box>
   </div>
   <Box component="form"
    sx={{
     '& > :not(style)': { m: 2, width: '25ch' },
    }}>
    <Button onClick={createMineralHandle} variant="contained">Создать минерал</Button>
   </Box>
  </Box>
 </div>
}


export default Create