import { Draggable, Droppable } from 'react-beautiful-dnd'
import addMemberAvatarUrl from '../../pages/Dashboard/img/add_avatar.jpg'
import './members.css'
import { DroppableMember } from '../DroppableMember/DroppableMember';

export const Members = ({ dashboard }) => {
  return (
      <section className='members'>
        <p className='dasboard__title'>Team members</p>
        <div className="members__wrapper">
          <div className="members__container">
            <img className='members__avatar members__new-avatar' src={addMemberAvatarUrl} alt="" width={100} />
          </div>
          <DroppableMember dashboard={dashboard} />
        </div>
      </section>
  )
}
