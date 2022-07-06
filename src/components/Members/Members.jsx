
import addMemberAvatarUrl from '../../pages/Dashboard/img/add_avatar.jpg'
import './members.css'

export const Members = ({ imgMembers }) => {
  return (
    <section className='members'>
        <div className="members__container">
          <img className='members__avatar members__avatar-new' src={addMemberAvatarUrl} alt="" width={100} />
          {
            imgMembers.map(imgUrl => (
              <img className='members__avatar' src={imgUrl} alt="" width={100} />
            ))
          }
        </div>
    </section>
  )
}
