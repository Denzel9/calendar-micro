import { useContext } from 'react'
import { NoteContext } from '../../providers/NoteProvider'

export const useNoteContext = () => {
  const context = useContext(NoteContext)
  return { ...context }
}
