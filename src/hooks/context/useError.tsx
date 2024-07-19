import { useContext } from 'react'
import { ErrorContext } from '../../providers/ErrorProvider'

export const useError = () => {
  const error = useContext(ErrorContext)
  return { ...error }
}
