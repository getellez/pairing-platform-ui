import './taskColumn.css'

export const TasksColumn = ({ title, imgMembers }) => {
  
  return (
    <>
      <div className='tasks__column'>
          <div className='tasks__header-container'>
            <p className='tasks__header-title'>Retro authorization table</p>
          </div>
          <div className='tasks__member'>
            {
              imgMembers.map(imgUrl => (
                <div className='tasks__member-container'>
                  <img className='tasks__members-avatar' src={imgUrl} alt="" width={70}/>
                </div>
              ))
            }
          </div>
        </div>
    </>
  )
}
