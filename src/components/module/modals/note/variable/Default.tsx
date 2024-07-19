import { FunctionComponent, useState } from 'react'
import ListItem from '../../../../new/ListItem'
import CustomSelect from '../../../../CustomSelect'
import { EStatus, IEvent } from '../../../../../types/event.types'
import dayjs from 'dayjs'
import MUITimePicker from '../../../../TimePicker'
import Calendar from '../../../../layout/sidebar/calendar'
import EditingItem from '../../../../../pages/event/ui/PropirtyItem'
import { getPadStartFormatDate } from '../../../../../helpers/formatDate'
import { useCalendar } from '../../../../../hooks/context/useCalendar'
import Input from '../../../../new/Input'
import { IComments } from '../../../../../types/comments.types'
import { FaRegUser } from 'react-icons/fa'
import Button from '../../../../new/Button'
import { IMedia } from '../../../../../types/media.types'
import TextArea from '../../../../new/TextArea'
import { useLocalModal } from '../../../../../hooks/context/useLocalModal'

interface IDefault {
  comment: IComments
  setComment: (comment: IComments) => void

  data: Omit<IEvent, 'docId' | 'author' | 'isComplete' | 'userId'>
  setData: (data: Omit<IEvent, 'docId' | 'author' | 'isComplete' | 'userId'> | IMedia) => void
}

const Default: FunctionComponent<IDefault> = ({ comment, setComment, data, setData }) => {
  const [isOpenStatus, setIsOpenStatus] = useState(false)
  const { isFullScreen } = useLocalModal()
  const { date } = useCalendar()

  return (
    <>
      <EditingItem
        title="Time"
        value={data?.time && `${data?.time?.hour()}:${getPadStartFormatDate(data?.time?.minute())}`}
        withWidget
        onChange={() => setData({ ...data, time: null })}
        editElement={
          <div className=" absolute top-10 z-10 bg-dark border border-white rounded-xl">
            <MUITimePicker
              value={dayjs(data?.time) || null}
              setEvent={(e) => setData({ ...data, time: e })}
            />
          </div>
        }
      />
      <EditingItem
        title="Date"
        value={date || data?.date}
        onClick={() => {
          setData({ ...data, date: date })
        }}
        withWidget
        editElement={<Calendar style="absolute top-8" />}
      />
      <ListItem
        title={'Status'}
        value={
          <CustomSelect
            isOpen={isOpenStatus}
            setIsOpen={setIsOpenStatus}
            setData={(el: string) => setData({ ...data, status: el as EStatus })}
            list={[...Object.values(EStatus)]}
            data={data}
            value={data.status}
          />
        }
      />

      <Input
        icon={<FaRegUser />}
        value={comment.comment}
        placeholder={'Add a comment...'}
        onChange={(e) => setComment({ ...comment, comment: e.target.value })}
        element={
          <Button
            title="Add"
            onClick={() => {
              setData({ ...data, comments: [...data?.comments, comment] })
              setComment({ ...comment, comment: '' })
            }}
            primary
          />
        }
        style=" mt-5 py-5 border-y border-white/50 "
      />

      <TextArea
        value={data?.text}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setData({ ...data, text: e.target.value })
        }
        placeholder="Write somethings, or do it latter"
        isLarge={isFullScreen}
      />
    </>
  )
}

export default Default
