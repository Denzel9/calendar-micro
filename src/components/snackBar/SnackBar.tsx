import * as React from 'react'
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import IconButton from '@mui/material/IconButton'
import { IoMdClose } from 'react-icons/io'
import { useError } from '../../hooks/context/useError'

export default function SnackbarModal() {
  const { isOpenSnackBar, setIsOpenSnackBar, setErrorText, errorText } = useError()

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }

    setIsOpenSnackBar(false)
    setErrorText('')
  }

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
        <IoMdClose />
      </IconButton>
    </React.Fragment>
  )

  return (
    <Snackbar
      open={isOpenSnackBar}
      anchorOrigin={{ vertical: 'top',horizontal: 'right' }}
      autoHideDuration={6000}
      onClose={handleClose}
      message={errorText}
      action={action}
    />
  )
}
