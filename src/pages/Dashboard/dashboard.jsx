
import './dashboard.css'

import addMemberAvatarUrl from './img/add_avatar.jpg'
import monkeyAvatarUrl from './img/monkey_avatar.jpeg';
import monkeyAdidasAvatarUrl from './img/monkey_adidas_avatar.jpeg';
import monkeyOldAvatarUrl from './img/monkey_old_avatar.jpeg';

export const Dashboard = () => {
  return (
    <section className='dashboard'>
      <section className='control'>
        <div className='control__action'>
          <p>Pair</p>
        </div>
        <div className='control__action'>
          <p>Save</p>
        </div>
        <div className='control__action'>
          <p>Cancel</p>
        </div>
      </section>
      <p className='dasboard__title'>Team members</p>
      <section className='members'>
        <div className="members__container">
          <img className='members__avatar members__avatar-new' src={addMemberAvatarUrl} alt="" width={100} />
          <img className='members__avatar' src={monkeyAvatarUrl} alt="" width={100} />
          <img className='members__avatar' src={monkeyAdidasAvatarUrl} alt="" width={100} />
          <img className='members__avatar' src={monkeyOldAvatarUrl} alt="" width={100} />
        </div>
      </section>
      
      <section className='tasks'>

        <div className='tasks__column'>
          <div className='tasks__header-container'>
            <p className='tasks__header-title'>View Invoice Summary Document</p>
          </div>
          <div className='tasks__member'>
            <div className='tasks__member-container'>
              <img className='tasks__members-avatar' src={monkeyAvatarUrl} alt="" width={70}/>
            </div>
            <div className='boardsList__item__members-member'>
              <img className='tasks__members-avatar' src={monkeyOldAvatarUrl} alt="" width={70}/>
            </div>
          </div>
        </div>

        

      </section>

    </section>
  )
}
