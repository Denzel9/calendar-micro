import { TimePicker } from '@mui/x-date-pickers'
import { Dayjs } from 'dayjs'
import { FunctionComponent } from 'react'

interface MUITimePickerProps {
    value: Dayjs
    setEvent: (value: Dayjs) => void
}

const MUITimePicker: FunctionComponent<MUITimePickerProps> = ({value, setEvent}) => {
  return (
    <TimePicker
      value={value}
      onChange={setEvent}
      views={['hours', 'minutes']}
      sx={{
        backgroundColor: 'transparent',
        font: 'white',
        color: '#FFFF',
        underline: {
          '&:hover:not(.Mui-disabled):before': {
            borderBottom: 'none',
          },
          '&:after': {
            borderBottom: 'none',
          },
        },
        input: {
          color: '#FFFF',
        },
        '.css-i4bv87-MuiSvgIcon-root': {
          color: 'white',
        },
        '.css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
          border: 'none',
        },
      }}
      slotProps={{
        popper: {
          sx: {
            '& .MuiList-root': {
              backgroundColor: '#333335',
            },
            '& .MuiMenuItem-root': {
              '&.Mui-selected': {
                backgroundColor: '#04395E',
                color: 'white',
              },
              color: 'white',
            },
            '& .MuiDialogActions-root': {
              backgroundColor: '#333335',
            },
            '& .MuiSvgIcon-root': {
              '&.MuiSvgIcon-fontSizeMedium': {
                backgroundColor: '#04395E',
                color: 'white',
              },
              color: 'white',
            },
            '.css-gi59xn-MuiMultiSectionDigitalClock-root': {
              borderBottom: 0,
            },
          },
        },
      }}
      timeSteps={{ hours: 1, minutes: 30 }}
    />
  )
}

export default MUITimePicker
