import { FunctionComponent, useEffect, useState } from 'react'
import { useLocalModal } from '../../../../hooks/context/useLocalModal'
import { useModal } from '../../../../hooks/context/useModal'
import { TEMPLATES } from './constants'
import Button from '../../../new/Button'
import classNames from 'classnames'
import { TEMPLATES_TYPES } from '../../../../types/template.types'
import ReadingList from './variable/ReadingList'
import { useNoteContext } from '../../../../hooks/context/useNoteContext'
import Default from './variable/Default'
import TitleOrInput from './TitleOrInput'
import { useMain } from '../../../../hooks/context/useMain'
import { EMPTY_EVENT, IEvent } from '../../../../types/event.types'
import TagsSelect from '../ui/TagsSelect'
import { EMPTY_MEDIA, IMedia } from '../../../../types/media.types'
import Comment from '../../../new/Comment'
import CustomSelect from '../../../CustomSelect'

export const names = ['Denis Nikitin', 'Arina Nikitina']

const ModalContent: FunctionComponent = () => {
  const { isFullScreen, setIsFullScreen } = useLocalModal()
  const { setIsOpenTemplateModal, setModalFlow, isOpenModal } = useModal()
  const { templateType, setTemplateType, comment, setComment, media } = useNoteContext()
  const { data, setData } = useMain()
  const [isOpenAssign, setIsOpenAssign] = useState(false)

  useEffect(() => {
    if (!isOpenModal) {
      setTemplateType(TEMPLATES_TYPES.DEFAULT)
      media ? setData(EMPTY_MEDIA as any) : setData(EMPTY_EVENT as any)
      setIsFullScreen(false)
    }
  }, [isOpenModal])

  const handleClick = () => {
    setModalFlow({ state: 'event' })
    setIsOpenTemplateModal(true)
  }

  return (
    <div className={isFullScreen ? ' flex gap-10' : ''}>
      <div className={isFullScreen ? 'w-1/2' : ''}>
        <TitleOrInput data={data} setData={setData} />
        <div className={classNames(' my-5')}>
          {!media && (
            <Default
              comment={comment}
              setComment={setComment}
              data={data as IEvent}
              setData={setData}
            />
          )}
          {media && (
            <ReadingList
              comment={comment}
              setComment={setComment}
              data={data as IMedia}
              setData={setData}
            />
          )}
        </div>
      </div>

      {isFullScreen && (
        <div className="mt-28 w-1/2">
          <div className="flex items-start">
            <div className=" w-2/5">
              <h2 className=" block  mb-5">Templates</h2>
              {TEMPLATES.map((el, i) => (
                <Button
                  key={el.title + Math.random()}
                  onClick={
                    i === TEMPLATES.length - 1
                      ? handleClick
                      : () => {
                          setTemplateType(el?.title as TEMPLATES_TYPES)
                          setData({ ...data as any, type: el?.title })
                        }
                  }
                  title={el.title}
                  icon={el.icon}
                  selected={templateType === el?.title}
                />
              ))}
            </div>
            <div className="w-3/5">
              <CustomSelect
                isOpen={isOpenAssign}
                setIsOpen={setIsOpenAssign}
                setData={(el: string) => setData({ ...(data as any), assign: el })}
                placeholder="people"
                list={names}
                data={data}
                title="Assign"
                isMultiply
                isLarge
                value={data.assign}
              />
              <TagsSelect onClick={setData} value={data} />
            </div>
          </div>
          <Comment data={data} setData={setData} style="mt-10" withScroll withTitle />
        </div>
      )}
    </div>
  )
}

export default ModalContent
