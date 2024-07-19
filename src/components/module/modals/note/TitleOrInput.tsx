import { FunctionComponent } from 'react'
import Input from '../../../new/Input'
import { useNoteContext } from '../../../../hooks/context/useNoteContext'
import { TEMPLATES_TYPES } from '../../../../types/template.types'
import { UnionType } from '../../../../types/types'

interface TitleOrInputProps {
  setData: (value: UnionType) => void
  data: UnionType
}

const TitleOrInput: FunctionComponent<TitleOrInputProps> = ({ data, setData }) => {
  const { templateType } = useNoteContext()
  return (
    <div>
      {(templateType === TEMPLATES_TYPES.DEFAULT ||
        templateType === TEMPLATES_TYPES.TASK ||
        templateType === TEMPLATES_TYPES.NOTES) && (
        <Input
          value={data.title}
          placeholder={'Untitled'}
          onChange={(e) => setData({ ...data, title: e.target.value })}
          style="border-none bg-transparent text-2xl mt-10 outline-none"
        />
      )}
      {templateType === TEMPLATES_TYPES.READING_LIST && (
        <h1 className=" text-3xl opacity-50 mt-12">New book</h1>
      )}
      {templateType === TEMPLATES_TYPES.FILMS && (
        <h1 className=" text-3xl opacity-50 mt-12">New film</h1>
      )}
    </div>
  )
}

export default TitleOrInput
