import './Task.css'

export const Task = ({ title, members }) => {
  
  return (
    <>
      <div className='tasks__column'>
          <div className='tasks__header-container'>
            <p className='tasks__header-title'>{title}</p>
          </div>
          <div className='tasks__members'>
            {
              members.map((member, index) => (
                <div key={index} className='tasks__members-container'>
                  <img className='tasks__members-avatar' src={member.image} alt="" width={70}/>
                </div>
              ))
            }
          </div>
        </div>
    </>
  )
}
