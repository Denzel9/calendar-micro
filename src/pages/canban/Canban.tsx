import { FunctionComponent } from 'react'
import Block from './block/Block'
import { EStatus } from '../../types/event.types'

const Canban: FunctionComponent = () => {
  return (
      <div className=" grid grid-cols-3 gap-10">
        <Block title={EStatus.ToDo} type={EStatus.ToDo} />
        <Block title={EStatus.Progress} type={EStatus.Progress} />
        <Block title={EStatus.Completed} type={EStatus.Completed} />
      </div>
  )
}
export default Canban
