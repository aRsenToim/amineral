import { FC } from 'react'
import s from './alert.module.scss'
import { AlertTitle, Alert, Button, Modal, Stack, Typography, Box } from '@mui/material'


interface IProps {
  title: string
  content: string
  close: () => void
  isOpen: boolean
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
 };

const AlertComponent: FC<IProps> = ({title, close, content, isOpen}) => {
  return <Modal
    open={isOpen}
    onClose={close}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        {title}
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        {content}
      </Typography>
      <Button onClick={close} variant="contained">Закрыть</Button>
    </Box>
  </Modal>
}


export default AlertComponent