import { FunctionComponent, useEffect, useState } from 'react'
import { useLocalModal } from '../../../../hooks/context/useLocalModal'
import { TEMPLATES } from './constants'
import { useUser } from '../../../../hooks/context/useUser'
import { ITemplate, TEMPLATES_TYPES } from '../../../../types/template.types'
import CustomSelect from '../../../CustomSelect'
import Button from '../../../new/Button'
import { useCalendar } from '../../../../hooks/context/useCalendar'
import TagsSelect from '../ui/TagsSelect'
import { useTemplates } from '../../../../hooks/context/useTemplates'
import Input from '../../../new/Input'
import TextArea from '../../../new/TextArea'
import { FaRegUser } from 'react-icons/fa'
import ListItem from '../../../new/ListItem'
import { useModal } from '../../../../hooks/context/useModal'
import classNames from 'classnames'
import Comment from '../../../new/Comment'
import { names } from '../note/Content'
import { useNoteContext } from '../../../../hooks/context/useNoteContext'

interface IModal {
  template: ITemplate
  setTemplate: (template: ITemplate) => void
}

const TemplateContent: FunctionComponent<IModal> = ({ template, setTemplate }) => {
  const { isFullScreen } = useLocalModal()
  const { isOpenModal, isOpenTemplateModal } = useModal()
  const { user } = useUser()
  const { date } = useCalendar()
  const { templates } = useTemplates()
  const [isOpen, setIsOpen] = useState(false)
  const { comment, setComment } = useNoteContext()

  useEffect(() => {
    setTemplate({
      ...template,
      title: '',
      imgLink: '',
      link: '',
      comments: [],
      type: TEMPLATES_TYPES.DEFAULT,
      tags: [],
      text: '',
      assign: [],
    })
  }, [isOpenModal, isOpenTemplateModal])

  const LIST = [
    {
      title: 'Created',
      value: date,
      placeholder: date,
      onChange: () => {},
    },
    {
      title: 'Author',
      value: template.author,
      onChange: () => {},
      placeholder: `${user?.name || ''} ${user?.lastName || ''}`,
    },
    {
      title: 'Link',
      value: template.link,
      onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setTemplate({ ...template, link: e.target.value }),
    },
    {
      title: 'Image',
      value: template.imgLink,
      onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setTemplate({ ...template, imgLink: e.target.value }),
    },
  ]

  const addComment = () => {
    setTemplate({ ...template, comments: [...template?.comments, comment] })
    setComment({ ...comment, comment: '' })
  }

  return (
    <div className={isFullScreen ? ' flex gap-10' : ''}>
      <div className={isFullScreen ? 'w-1/2' : ''}>
        <Input
          value={template?.title}
          placeholder={'Untitled'}
          onChange={(e) =>
            setTemplate({
              ...template,
              title: e.target.value,
            })
          }
          isError={!!templates?.find((el) => el?.title === template?.title)}
          style="border-none bg-transparent text-2xl mt-10 outline-none"
        />
        <div className={classNames(' my-5', isFullScreen ? 'w-1/2' : 'w-1/3')}>
          {LIST.map((el) => (
            <ListItem
              key={el.title}
              title={el.title}
              value={<Input value={el.value} onChange={el.onChange} placeholder={'Empty'} />}
            />
          ))}
        </div>

        <Input
          icon={<FaRegUser />}
          value={comment.comment}
          placeholder={'Add a comment...'}
          onChange={(e) => setComment({ ...comment, comment: e.target.value })}
          element={<Button title="Add" onClick={addComment} primary />}
          style=" py-5 border-y border-white/50 "
        />

        <TextArea
          value={template?.text}
          placeholder={'Write somethings, or do it latter'}
          onChange={(e) => setTemplate({ ...template, text: e.target.value })}
          style=" border-none block bg-transparent mt-5 outline-none w-full"
          isLarge={isFullScreen}
        />
      </div>
      {isFullScreen && (
        <div className="mt-28  w-1/2">
          <div className="flex items-start">
            <div className=" w-2/5">
              <h2 className=" block  mb-5">Templates</h2>
              {TEMPLATES.map((el) => (
                <Button
                  key={el.title + Math.random()}
                  onClick={() =>
                    setTemplate({
                      ...template,
                      type: el.title as TEMPLATES_TYPES,
                      title: template?.title || el.title,
                    })
                  }
                  title={el.title}
                  icon={el.icon}
                  primary
                />
              ))}
            </div>
            <div className=" w-3/5">
              <CustomSelect
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                setData={(el: string) => setTemplate({ ...(template as any), assign: el })}
                list={names}
                data={template}
                value={template?.assign}
                title="Assign"
                placeholder="people"
                style="mt-10"
                isMultiply
                isLarge
              />

              <TagsSelect onClick={setTemplate} value={template} />
            </div>
          </div>
          <Comment data={template} setData={setTemplate} style="mt-10 " withScroll withTitle />
        </div>
      )}
    </div>
  )
}

export default TemplateContent
