import { FunctionComponent, useState } from 'react'
import ListItem from '../../../../new/ListItem'
import Input from '../../../../new/Input'
import { EStatus, IEvent } from '../../../../../types/event.types'
import CustomSelect from '../../../../CustomSelect'
import { IMedia } from '../../../../../types/media.types'
import { IComments } from '../../../../../types/comments.types'
import { FaRegUser } from 'react-icons/fa'
import Button from '../../../../new/Button'
import TextArea from '../../../../new/TextArea'
import { useLocalModal } from '../../../../../hooks/context/useLocalModal'

interface IReadingList {
  comment: IComments
  setComment: (comment: IComments) => void

  data: IMedia
  setData: (data: Omit<IEvent, 'docId' | 'author' | 'isComplete' | 'userId'> | IMedia) => void
}

const ReadingList: FunctionComponent<IReadingList> = ({ comment, setComment, setData, data }) => {
  const [isOpenStatus, setIsOpenStatus] = useState(false)
  const { isFullScreen } = useLocalModal()

  const LIST = [
    {
      title: 'Author',
      value: data.author,
      onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setData({ ...data, author: e.target.value }),
    },
    {
      title: 'Title',
      value: data.title,
      onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setData({ ...data, title: e.target.value }),
    },
    {
      title: 'Image',
      value: data.img,
      onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setData({ ...data, img: e.target.value }),
    },
    {
      title: 'Link',
      value: data.link,
      onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setData({ ...data, link: e.target.value }),
    },
    {
      title: 'Rate',
      value: data.rate,
      onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setData({ ...data, rate: e.target.value }),
      placeholder: '1-5',
    },
  ]
  return (
    <>
      {LIST.map((el) => (
        <ListItem
          key={el.title}
          title={el.title}
          value={
            <Input
              value={el.value}
              onChange={el.onChange}
              placeholder={el?.placeholder || 'Empty'}
            />
          }
        />
      ))}
      <ListItem
        title={'Status'}
        value={
          <CustomSelect
            isOpen={isOpenStatus}
            setIsOpen={setIsOpenStatus}
            list={[...Object.values(EStatus)]}
            setData={(el: string) =>
              setData({ ...data, status: el as EStatus })
            }
            value={data?.status}
            data={data}
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
        value={data?.description}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setData({ ...data, description: e.target.value })
        }
        placeholder="Write somethings, or do it latter"
        isLarge={isFullScreen}
      />
    </>
  )
}

export default ReadingList
