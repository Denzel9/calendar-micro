import { FunctionComponent } from 'react'
import TabBar from '../../../../components/new/TabBar'
import { IoMdBook } from 'react-icons/io'
import { RiBookFill } from 'react-icons/ri'
import { PiBooksLight } from 'react-icons/pi'
import { BiCategory } from 'react-icons/bi'
import { useMedia } from '../../../../hooks/context/useMedia'
import { TEMPLATES_TYPES } from '../../../../types/template.types'

export enum TABS {
  ALL = 'All books',
  CURRENT = 'Currently reading',
  COMPLETED = 'Completed',
  CATEGORY = 'Per category',
}

const titles = [
  { text: TABS.ALL, icon: <PiBooksLight /> },
  { text: TABS.CURRENT, icon: <IoMdBook /> },
  { text: TABS.COMPLETED, icon: <RiBookFill /> },
  { text: TABS.CATEGORY, icon: <BiCategory /> },
]

const MediaList: FunctionComponent<{ type: TEMPLATES_TYPES }> = ({ type }) => {
  const { dataList } = useMedia()

  const templateMedia = dataList?.filter((media) => media?.type === type)
  return <TabBar titles={titles} media={templateMedia} />
}

export default MediaList
