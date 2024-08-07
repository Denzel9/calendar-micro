import { FunctionComponent, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { IEvent } from '../../types/event.types'
import { MdEventAvailable } from 'react-icons/md'
import { capitalizeWord } from '../../helpers/capitalizeWord'
import PropirtiesList from './ui/PropirtiesList'
import { FaRegUser } from 'react-icons/fa'
import Input from '../../components/new/Input'
import Button from '../../components/new/Button'
import { useEventsService } from '../../hooks/services/useEventsService'
import Comment from '../../components/new/Comment'
import { useNoteContext } from '../../hooks/context/useNoteContext'
import { UnionType } from '../../types/types'
import React from 'react'
import { IMedia } from '../../types/media.types'

const Event: FunctionComponent = () => {
  const { state } = useLocation()
  const { updateEventComments, deleteEventComments } = useEventsService()
  const [event, setEvent] = useState<UnionType>(state && state?.item)
  const { comment, setComment } = useNoteContext()
  const mediaEvent = event as unknown as IMedia
  const addComment = () => {
    setEvent({ ...event, comments: [...event?.comments, comment] })
    updateEventComments(event?.docId!, comment?.comment)
    setComment({ ...comment, comment: '' })
  }

  return (
    <div>
      <div className=" flex items-end gap-3">
        <MdEventAvailable size={30} />
        <h1 className=" block mt-5 text-3xl font-bold">{capitalizeWord(event?.title)}</h1>
      </div>

      <div className=" flex flex-col gap-3 mt-5 w-2/3 pb-32">
        <div className=" flex items-start gap-5">
          <img src={mediaEvent?.img} alt="img" width={200} height={300} />
          <PropirtiesList event={event as IEvent} setEvent={setEvent} />
        </div>

        <Input
          icon={<FaRegUser />}
          value={comment.comment}
          placeholder={'Add a comment...'}
          onChange={(e) => setComment({ ...comment, comment: e.target.value })}
          element={<Button title="Add" onClick={addComment} primary />}
          style=" py-5 border-y border-white/50 mt-5 "
        />

        <Comment
          data={event}
          setData={setEvent}
          deleteFn={(comment: string) => deleteEventComments(event?.docId!, comment)}
        />
      </div>
    </div>
  )
}

export default Event
