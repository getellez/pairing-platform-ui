import { DroppableMember } from '../DroppableMember/DroppableMember';
import addMemberAvatarUrl from '../../pages/Dashboard/img/add_avatar.jpg';
import './members.css'

export const Members = ({ dashboard, addNewMember }) => {
  return (
      <section className='members'>
        <p className='dasboard__title'>Team members</p>
        <div className="members__wrapper">
          <div className="members__container">
            <img className='members__avatar members__new-avatar' onClick={addNewMember} src={addMemberAvatarUrl} alt="add new member" width={100} />
          </div>
          <DroppableMember dashboard={dashboard} />
        </div>
      </section>
  )
}
