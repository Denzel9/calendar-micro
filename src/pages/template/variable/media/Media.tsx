import { FunctionComponent } from 'react'
import { FiBook } from 'react-icons/fi'
import StatusButton from '../../../event/ui/StatusButton'
import { EStatus } from '../../../../types/event.types'
import { CiStar } from 'react-icons/ci'
import { TEMPLATES_TYPES } from '../../../../types/template.types'
import { Link } from 'react-router-dom'
import { useMediaService } from '../../../../hooks/services/useMediaService'

interface MediaProps {
  img: string
  title: string
  author: string
  status: EStatus
  rate: string
  docId: string
  type: TEMPLATES_TYPES
}

const filmDefault = 'https://telegra.ph/file/7dee6a2c2eabad3829eab.jpg'
const bookDefault = 'https://frankfurt.apollo.olxcdn.com/v1/files/tc7frk0swvo6-KZ/image;s=735x1102'

const Media: FunctionComponent<MediaProps> = ({
  img,
  title,
  author,
  status,
  rate,
  docId,
  type,
}) => {
  const { updateMediaStatus } = useMediaService()
  const getImg = (type: string) => {
    if (type === TEMPLATES_TYPES.FILMS) {
      return filmDefault
    } else if (type === TEMPLATES_TYPES.READING_LIST) {
      return bookDefault
    }
  }
  return (
    <Link
      to={'/calendar/event'}
      state={{ item: { img, title, author, status, rate, docId, type } }}
      className=" w-fit border border-white/50 rounded-xl p-5 flex gap-5"
    >
      <img src={img || getImg(type)} alt="boor" width={100} height={100} />
      <div className=" flex flex-col justify-between">
        <div>
          <div className=" flex gap-2 items-center">
            <FiBook />
            <h2>{title}</h2>
          </div>
          <p className=" opacity-50 text-sm">{author}</p>
        </div>
        <div>
          <StatusButton status={status} onClick={updateMediaStatus} id={docId} />
          <div className=" flex items-center gap-1 mt-3">
            {Array(+rate)
              .fill(rate)
              ?.map((el) => (
                <CiStar key={el} fill="yellow" />
              ))}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Media
