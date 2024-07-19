import { FunctionComponent, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ITemplate, TEMPLATES_TYPES } from '../../types/template.types'
import ImageContainer from './ui/ImageContainer'
import MediaList from './variable/media/MediaList'
import { MODE } from '../../components/new/section/Section'
import Default from './variable/Default'

const Template: FunctionComponent = () => {
  const { state } = useLocation()
  const template: ITemplate = state?.item
  const [mode, setMode] = useState<MODE>(MODE.CARD)

  const mediaType =
    template?.type === TEMPLATES_TYPES.READING_LIST || template?.type === TEMPLATES_TYPES.FILMS

  return (
    <>
      {template?.imgLink ? (
        <ImageContainer
          title={template?.title}
          link={template?.imgLink}
          mode={mode}
          setMode={setMode}
        />
      ) : (
        <ImageContainer title={template?.title} link={''} mode={mode} setMode={setMode} />
      )}

      {mediaType && <MediaList type={template?.type} />}
      {!mediaType && <Default mode={mode} type={template?.type} />}
    </>
  )
}

export default Template
