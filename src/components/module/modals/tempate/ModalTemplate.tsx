import { FunctionComponent, useEffect, useState } from 'react'
import Modal from '../../../modal'
import { useModal } from '../../../../hooks/context/useModal'
import TemplateHeader from './Header'
import ModalFooter from '../../../modal/Footer'
import TemplateContent from './Content'
import { useTemplatesService } from '../../../../hooks/services/useTemplatesService'
import { useCalendar } from '../../../../hooks/context/useCalendar'
import { ITemplate, TEMPLATES_TYPES,  } from '../../../../types/template.types'
import { useUser } from '../../../../hooks/context/useUser'

const ModalTemplate: FunctionComponent = () => {
  const { isOpenTemplateModal, setIsOpenTemplateModal, setIsOpenModal } = useModal()
  const { date } = useCalendar()
  const { addTemplates } = useTemplatesService()
  const { user } = useUser()

  useEffect(() => setTemplate({ ...template, date: date, userId: user.docId, author: user?.name }), [date, user.docId])

  const [template, setTemplate] = useState<ITemplate>({
    date,
    author: '',
    comments: [],
    type: TEMPLATES_TYPES.DEFAULT,
    title: '',
    text: '',
    tags: [],
    link: '',
    imgLink: '',
    assign: [],
    trash: false,
    userId: user?.docId,
  })

  const saveTemplate = () => {
    addTemplates(template)
    setIsOpenTemplateModal(false)
    setIsOpenModal(false)
  }

  const cancel = () => {
    setIsOpenTemplateModal(false)
    setIsOpenModal(false)
  }

  return (
    <Modal isOpenModal={isOpenTemplateModal} setIsOpenModal={setIsOpenTemplateModal}>
      <TemplateHeader title={template.title} />
      <TemplateContent template={template} setTemplate={setTemplate} />
      <ModalFooter setData={saveTemplate} data={template} setClose={cancel} />
    </Modal>
  )
}

export default ModalTemplate
