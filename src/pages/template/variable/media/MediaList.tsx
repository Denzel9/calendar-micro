import { FunctionComponent } from 'react'
import TabBar from '../../../../components/new/TabBar'
import { IoMdBook } from 'react-icons/io'
import { RiBookFill } from 'react-icons/ri'
import { PiBooksLight, PiFilmSlateLight } from 'react-icons/pi'
import { BiCategory } from 'react-icons/bi'
import { useMedia } from '../../../../hooks/context/useMedia'
import { TEMPLATES_TYPES } from '../../../../types/template.types'
import { GiFilmStrip } from 'react-icons/gi'

export enum TABS {
  ALL_BOOKS = 'All books',
  CURRENT_READING = 'Currently reading',
  ALL_FILMS = 'All films',
  CURRENT_WATCHING = 'Currently watching',
  COMPLETED = 'Completed',
  CATEGORY = 'Per category',
}

const MediaList: FunctionComponent<{ type: TEMPLATES_TYPES }> = ({ type }) => {
  const { dataList } = useMedia()
  const templateMedia = dataList?.filter((media) => media?.type === type)

  const titles = [
    {
      text: type === TEMPLATES_TYPES.FILMS ? TABS.ALL_FILMS : TABS.ALL_BOOKS,
      icon: type === TEMPLATES_TYPES.FILMS ? <GiFilmStrip /> : <PiBooksLight />,
    },
    {
      text: type === TEMPLATES_TYPES.FILMS ? TABS.CURRENT_WATCHING : TABS.CURRENT_READING,
      icon: type === TEMPLATES_TYPES.FILMS ? <PiFilmSlateLight /> : <IoMdBook />,
    },
    { text: TABS.COMPLETED, icon: <RiBookFill /> },
    { text: TABS.CATEGORY, icon: <BiCategory /> },
  ]

  return <TabBar titles={titles} media={templateMedia} />
}

export default MediaList
