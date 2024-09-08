import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { Fragment } from 'react/jsx-runtime'
import AddIcon from '@mui/icons-material/Add'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'

type Props = {}

export default function ReserveRoom({}: Props) {
  const [open, setOpen] = useState(false)
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm()

  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <Fragment>
      <Button
        variant='outlined'
        sx={{
          marginBottom: 1,
        }}
        size='small'
        startIcon={<AddIcon />}
        onClick={handleClickOpen}
      >
        จองห้อง
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
        component={'form'}
        onSubmit={handleSubmit((data) => console.log(data))}
        maxWidth='xs'
        fullWidth
      >
        <DialogTitle id='alert-dialog-title'>{'จองห้อง'}</DialogTitle>
        <DialogContent>
          <Controller
            name='room_name'
            control={control}
            defaultValue=''
            rules={{ required: 'Please select a room' }}
            render={({ field }) => (
              <Select
                id='room-name'
                placeholder='Rooms'
                fullWidth
                size='small'
                {...field}
              >
                <MenuItem value='std-1'>Standard Room 1</MenuItem>
                <MenuItem value='std-2'>Standard Room 2</MenuItem>
                <MenuItem value='conf-1'>Conference Room 1</MenuItem>
              </Select>
            )}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} type='button'>
            Disagree
          </Button>
          <Button type='submit'>Agree</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  )
}
