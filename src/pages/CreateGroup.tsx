import { Box, Button, TextField, Typography } from "@mui/material"
import { FC, useState } from "react"
import { generatorID } from "../helpers/generator"
import { useAppDispatch } from "../store/hooks"
import { createGroupFetch } from "../store/actions/pagesActions"





const CreateGroup: FC = () => {
 const dispatch = useAppDispatch()
 const [id, setID] = useState<string>(`${generatorID()}`)
 const [title, setTitle] = useState<string>('')


 const createGroupHandle = () => {
  
  dispatch(createGroupFetch({
   id,
   title
  }))
  setID(`${generatorID()}`)
  setTitle('')
 }

 return <Box
  sx={{
   '& > :not(style)': { m: 2, width: '25ch' },
  }}>
  <Typography variant="h6" component="h2">
   Создать группу:
  </Typography>
  <Box
   component="form"
   sx={{
    '& > :not(style)': { m: 2, width: '30ch' },
   }}
  >
   <TextField id="outlined-basic" value={id} label="ID группы" variant="outlined" />
   <TextField id="outlined-basic" value={title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value)
   }} label="Название группы" variant="outlined" />
  </Box>
  <Box component="form"
    sx={{
     '& > :not(style)': { m: 2, width: '25ch' },
    }}>
    <Button onClick={createGroupHandle} variant="contained">Создать группу</Button>
   </Box>
 </Box>
}


export default CreateGroup