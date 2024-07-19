import { FunctionComponent } from 'react'
import { FaListUl } from 'react-icons/fa'
import Button from '../../../components/new/Button'
import { PiCardsFill } from 'react-icons/pi'
import { MODE } from '../../../components/new/section/Section'
import { MdDelete } from 'react-icons/md'

interface ImageContainerProps {
  title: string
  link: string
  mode: MODE
  setMode: (mode: MODE) => void
}

const ImageContainer: FunctionComponent<ImageContainerProps> = ({ title, link, mode, setMode }) => {
  return (
    <div
      style={{ backgroundImage: link ? `url(${link})` : '' }}
      className={
        ' bg-default w-full h-40 bg-cover bg-center bg-fixed rounded-xl p-5 flex items-end mb-5'
      }
    >
      <div className=" flex items-end justify-between w-full">
        <h1 className=" bloc  text-3xl">{title}</h1>
        <div className=' flex items-center gap-3'>
          <Button icon={<MdDelete size={20} />} onClick={() => {}} primary />
          <Button
            icon={mode === MODE.CARD ? <FaListUl size={20} /> : <PiCardsFill size={20} />}
            onClick={() => (mode === MODE.CARD ? setMode(MODE.LIST) : setMode(MODE.CARD))}
            primary
          />
        </div>
      </div>
    </div>
  )
}

export default ImageContainer
