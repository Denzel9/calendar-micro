import { FunctionComponent } from 'react'
import { MdDelete } from 'react-icons/md'
import classNames from 'classnames'
import Button from './Button'
import { UnionType } from '../../types/types'

interface CommentProps {
  setData?: (value: UnionType) => void
  data: UnionType
  deleteFn?: (comment: string) => void

  withTitle?: boolean
  withScroll?: boolean
  style?: string
}

const Comment: FunctionComponent<CommentProps> = ({
  data,
  setData,
  style,
  deleteFn,
  withScroll = false,
  withTitle = false,
}) => {
  const deleteClick = (el: string) => {
    if (setData) {
      const newArr = data?.comments?.filter((data) => data.comment !== el)
      setData({ ...data, comments: newArr })
    }
    deleteFn && deleteFn(el)
  }
  return (
    <div className={style}>
      {withTitle && <h2 className=" block mb-2">Comments</h2>}
      <div
        className={classNames(
          ' mt-5 flex flex-col gap-5 ',
          withScroll && 'h-96 pb-14 overflow-scroll'
        )}
      >
        {data?.comments?.length ? (
          data?.comments?.map((el) => {
            return (
              <div key={el?.comment}>
                <div className="flex items-end justify-between">
                  <div className="flex items-center gap-3">
                    <div className=" w-8 h-8 rounded-full p-2 flex gap-2 items-center justify-center bg-dark ">
                      {el?.author?.slice(0, 1)}
                    </div>
                    <div>
                      <p>{el?.author}</p>
                      <p className=" text-xs">{el?.date}</p>
                    </div>
                  </div>
                  <Button
                    icon={<MdDelete size={25} />}
                    onClick={() => deleteClick(el.comment)}
                    primary
                  />
                </div>
                <p className=" mt-2">{el?.comment}</p>
              </div>
            )
          })
        ) : (
          <p className=" text-xl font-bold opacity-50">Not yet comments</p>
        )}
      </div>
    </div>
  )
}

export default Comment
