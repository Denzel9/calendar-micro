import { FunctionComponent, ReactNode, useState } from 'react'
import { IoIosSearch } from 'react-icons/io'
import { CiFilter } from 'react-icons/ci'
import { EStatus } from '../../types/event.types'
import { IMedia } from '../../types/media.types'
import { TABS } from '../../pages/template/variable/media/MediaList'
import Button from './Button'
import classNames from 'classnames'
import Media from '../../pages/template/variable/media/Media'
import { PiPlus } from 'react-icons/pi'

interface TabBarProps {
  titles: { text: string; icon: ReactNode }[]
  media: IMedia[]
}

const TabBar: FunctionComponent<TabBarProps> = ({ titles, media }) => {
  const [isActive, setIsActive] = useState<TABS>(titles[0].text as TABS)
  const currentReading = media?.filter((media) => media?.status === EStatus.Progress)
  const completedReading = media?.filter((media) => media?.status === EStatus.Completed)

  const helpersButton = [
    { icon: <IoIosSearch size={20}/>, onClick: () => {}, title: 'search' },
    { icon: <CiFilter size={20}/>, onClick: () => {}, title: 'filter' },
    { icon: <PiPlus size={20}/>, onClick: () => {}, title: 'add' },
  ]
  return (
    <div>
      <div className=" flex items-center justify-between">
        <div className=" flex items-center">
          {titles?.map((el) => (
            <Button
              key={el.text}
              icon={el?.icon}
              title={el.text}
              onClick={() => setIsActive(el.text as TABS)}
              selected={isActive === el.text}
              style={classNames(
                'py-1 px-4',
                isActive === el?.text ? 'border-b-2 border-white/50' : 'border-b border-white/30'
              )}
            />
          ))}
        </div>
        <div className=" flex items-center gap-3">
          {helpersButton?.map((el) => (
            <Button key={el.title} icon={el?.icon} onClick={el.onClick} />
          ))}
        </div>
      </div>
      <div className=" mt-5 flex gap-5">
        {(isActive === TABS.ALL_FILMS || isActive === TABS.ALL_BOOKS) &&
          media?.map((media) => {
            return (
              <Media
                key={media?.title}
                img={media?.img}
                title={media?.title}
                author={media?.author}
                status={media?.status}
                rate={media?.rate}
                docId={media?.docId}
                type={media?.type}
              />
            )
          })}
        {(isActive === TABS.CURRENT_READING || isActive === TABS.CURRENT_WATCHING) &&
          currentReading?.map((media) => {
            return (
              <Media
                key={media?.title}
                img={media?.img}
                title={media?.title}
                author={media?.author}
                status={media?.status}
                rate={media?.rate}
                docId={media?.docId}
                type={media?.type}
              />
            )
          })}
        {isActive === TABS.COMPLETED &&
          completedReading?.map((media) => {
            return (
              <Media
                key={media?.title}
                img={media?.img}
                title={media?.title}
                author={media?.author}
                status={media?.status}
                rate={media?.rate}
                docId={media?.docId}
                type={media?.type}
              />
            )
          })}
      </div>
    </div>
  )
}

export default TabBar
