import { useContext } from 'react'
import { MediaContext } from '../../providers/MediaProvider'

export const useMedia = () => {
  const media = useContext(MediaContext)
  return { ...media }
}
