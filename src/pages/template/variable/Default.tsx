import { FunctionComponent } from 'react'
import Section, { MODE } from '../../../components/new/section/Section'
import { MdEventAvailable } from 'react-icons/md'
import { TYPE_ACTION_BUTTON } from '../../../components/calendar-item/Action-button'
import { useEvents } from '../../../hooks/context/useEvents'
import { TEMPLATES_TYPES } from '../../../types/template.types'

interface DefaultProps {
  mode: MODE
  type: TEMPLATES_TYPES
}

const Default: FunctionComponent<DefaultProps> = ({ mode, type }) => {
  const { dataList } = useEvents()
  const templateMedia = dataList?.filter((media) => media?.templates === type)
  return (
    <Section
      items={templateMedia}
      title={'Current events'}
      icon={<MdEventAvailable />}
      link={'/calendar/event'}
      mode={mode}
      type={TYPE_ACTION_BUTTON.ELEMENT}
    />
  )
}

export default Default
