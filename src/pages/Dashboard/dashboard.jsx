
import './dashboard.css'

import monkeyAvatarUrl from './img/monkey_avatar.jpeg';
import monkeyAdidasAvatarUrl from './img/monkey_adidas_avatar.jpeg';
import monkeyOldAvatarUrl from './img/monkey_old_avatar.jpeg';

export const Dashboard = () => {
  return (
    <section className='dashboard'>
      <p>Team members</p>
      <section className='membersList'>
        <img className='avatar' src={monkeyAvatarUrl} alt="" width={100} />
        <img className='avatar' src={monkeyAdidasAvatarUrl} alt="" width={100} />
        <img className='avatar' src={monkeyOldAvatarUrl} alt="" width={100} />
      </section>
      
      <section className='boardsList'>

        <div className='boardsList__item'>
          <div className='boardsList__item-task'>
            <p className='boardsList__item-title'>View Invoice Summary Document</p>
          </div>
          <div className='boardsList__item__members-container'>
            <div className='boardsList__item__members-member'>
              <img className='avatar' src={monkeyAvatarUrl} alt="" width={70}/>
            </div>
            <div className='boardsList__item__members-member'>
              <img className='avatar' src={monkeyOldAvatarUrl} alt="" width={70}/>
            </div>
          </div>
          
        </div>

        <div className='boardsList__item'>
          <div className='boardsList__item-task'>
            <p className='boardsList__item-title'>Retro authorization table</p>
          </div>
          <div className='boardsList__item__members-container'>
            <div className='boardsList__item__members-member'>
              <img className='avatar' src={monkeyAvatarUrl} alt="" width={70}/>
            </div>
            <div className='boardsList__item__members-member'>
              <img className='avatar' src={monkeyAdidasAvatarUrl} alt="" width={70}/>
            </div>
          </div>
          
        </div>

        <div className='boardsList__item'>
          <div className='boardsList__item-task'>
            <p className='boardsList__item-title'>Prod Support</p>
          </div>
          <div className='boardsList__item__members-container'>
            <div className='boardsList__item__members-member'>
              <img className='avatar' src={monkeyAvatarUrl} alt="" width={70}/>
            </div>
            <div className='boardsList__item__members-member'>
              <img className='avatar' src={monkeyAdidasAvatarUrl} alt="" width={70}/>
            </div>
          </div>
          
        </div>
        
        <div className='boardsList__item'>
          <div className='boardsList__item-task'>
            <p className='boardsList__item-title'>E2E Testing</p>
          </div>
          <div className='boardsList__item__members-container'>
            <div className='boardsList__item__members-member'>
              <img className='avatar' src={monkeyAvatarUrl} alt="" width={70}/>
            </div>
            <div className='boardsList__item__members-member'>
              <img className='avatar' src={monkeyOldAvatarUrl} alt="" width={70}/>
            </div>
          </div>
          
          
        </div>

      </section>

    </section>
  )
}
