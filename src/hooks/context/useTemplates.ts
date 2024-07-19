import { useContext } from 'react'
import { TemplatesContext } from '../../providers/TemplatesProvider'

export const useTemplates = () => {
  const events = useContext(TemplatesContext)
  return { ...events }
}
