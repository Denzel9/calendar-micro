import { FunctionComponent } from 'react'
import { menuList } from './menu-list'
import { FaPlus, FaTrash } from 'react-icons/fa'
import ListItem from './ListItem'
import { useModal } from '../../hooks/context/useModal'
import { useTemplates } from '../../hooks/context/useTemplates'
import { Link, NavLink } from 'react-router-dom'
import Button from '../new/Button'

const Content: FunctionComponent = () => {
  const { templates } = useTemplates()
  const { setIsOpenTemplateModal, setIsOpenSidebarSheet, setModalFlow, setIsOpenTrash } = useModal()
  const uniqueTemplate = new Set(templates)
  const handleClick = () => {
    setIsOpenSidebarSheet(false)
    setModalFlow({state: ''})
    setIsOpenTemplateModal(true)
  }
  const openTrash = () => {
    setIsOpenSidebarSheet(false)
    setIsOpenTrash(true)
  }
  return (
    <div className=" relative h-full">
      <div className=" my-5 flex flex-col gap-1">
        {menuList.map((el) => (
          <NavLink key={el.title} to={el.link} onClick={() => setIsOpenSidebarSheet(false)}>
            <ListItem title={el.title} icon={el.icon} />
          </NavLink>
        ))}
      </div>
      <h3 className=" text-xl opacity-50">Templates</h3>
      <div className=" mt-5 flex flex-col gap-1">
        {templates?.length ? (
          <>
            {templates?.map((el) => {
              const currentTemplate = templates.find((elem) => elem?.docId === el?.docId)
              return (
                <Link
                  key={el.title}
                  to={'template'}
                  onClick={() => setIsOpenSidebarSheet(false)}
                  state={{ item: currentTemplate }}
                >
                  <ListItem title={el.title} icon={<FaPlus />} />
                </Link>
              )
            })}
            <Button
              onClick={() => {
                setIsOpenSidebarSheet(false)
                setIsOpenTemplateModal(true)
              }}
              title={'New template'}
              icon={<FaPlus />}
              primary
            />
          </>
        ) : (
          <ListItem title="New template" icon={<FaPlus />} onClick={handleClick} />
        )}
      </div>

      <Button
        title="Trash"
        icon={<FaTrash />}
        onClick={openTrash}
        style="absolute bottom-10 left-0"
      />
    </div>
  )
}

export default Content
