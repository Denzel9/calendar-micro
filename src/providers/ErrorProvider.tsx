import { createContext, FunctionComponent, ReactNode, useEffect, useState } from 'react'

export const ErrorContext = createContext<IErrorProvider>(null)

interface IErrorProvider {
  errorText: string
  setErrorText: (error: string) => void
  isOpenSnackBar: boolean
  setIsOpenSnackBar: (isOpenSnackBar: boolean) => void
  setError: (error: string) => void
}

const ErrorProvider: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  const [errorText, setErrorText] = useState('')
  const [isOpenSnackBar, setIsOpenSnackBar] = useState(false)
  const setError = (error: string) => {
    setErrorText(error)
    setIsOpenSnackBar(true)
  }
  return (
    <ErrorContext.Provider
      value={{ errorText, setErrorText, isOpenSnackBar, setIsOpenSnackBar, setError }}
    >
      {children}
    </ErrorContext.Provider>
  )
}

export default ErrorProvider
