import classNames from 'classnames'
import { FunctionComponent, useState } from 'react'
import Button from '../../../new/Button'
import { useUser } from '../../../../hooks/context/useUser'
import { FaPlus } from 'react-icons/fa'
import Input from '../../../new/Input'
import { useUserService } from '../../../../hooks/services/useUserService'
import { useError } from '../../../../hooks/context/useError'
import { UnionType } from '../../../../types/types'

interface TagsSelectProps {
  onClick: (value: UnionType) => void
  value: UnionType
}

const TagsSelect: FunctionComponent<TagsSelectProps> = ({ value, onClick }) => {
  const { user } = useUser()
  const { updateUserTags } = useUserService()
  const [isOpen, setIsOpen] = useState(false)
  const [tags, setTags] = useState('')
  const { setError } = useError()

  const handleSelectTags = (tag: string) => {
    const selectedTags = value.tags.includes(tag)
    if (selectedTags) {
      const filterArr = value.tags.filter((el) => el !== tag)
      onClick({ ...value, tags: filterArr })
    } else {
      onClick({ ...value, tags: [...value.tags, tag] })
    }
  }
  const closeEditTag = () => {
    setIsOpen(true)
    setTags('')
  }
  const updateTag = (tag: string) => {
    const findedTag = user?.tags?.includes(tag)
    if (findedTag) {
      setError('the tag has already been saved')
    } else {
      setIsOpen(false)
      setTags('')
      updateUserTags(tag)
    }
  }
  return (
    <div>
      <h2 className=" bloc mt-10 mb-5">Tags</h2>
      <div className={classNames(isOpen ? '' : ' flex flex-wrap gap-3')}>
        {!isOpen &&
          user?.tags?.length &&
          user?.tags?.map((el) => {
            const selectedTags = value.tags.includes(el)
            return (
              <Button
                key={el + Math.random()}
                onClick={() => handleSelectTags(el)}
                title={el}
                style="bg-red-400"
                selected={selectedTags}
                secondary
              />
            )
          })}
        {!isOpen && (
          <Button
            title="Add teg"
            style=" col-span-2"
            icon={<FaPlus />}
            onClick={closeEditTag}
            primary
          />
        )}

        {isOpen && (
          <div>
            <Input
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder={'Maybe job..?'}
              isError={user?.tags?.includes(tags)}
            />
            <div className=" flex items-center gap-3">
              <Button title="Cancel" onClick={() => setIsOpen(false)} primary />
              <Button title="Save" onClick={() => updateTag(tags)} primary />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default TagsSelect
