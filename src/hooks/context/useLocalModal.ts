import { useContext } from 'react'
import { LocalModalContext } from '../../components/modal'

export const useLocalModal = () => {
  const local = useContext(LocalModalContext)

  return { ...local }
}
