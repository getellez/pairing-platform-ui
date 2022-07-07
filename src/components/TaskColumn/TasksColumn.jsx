import './taskColumn.css'

export const TasksColumn = ({ title, imgMembers }) => {
  
  return (
    <>
      <div className='tasks__column'>
          <div className='tasks__header-container'>
            <p className='tasks__header-title'>{title}</p>
          </div>
          <div className='tasks__members'>
            {
              imgMembers.map((imgUrl, index) => (
                <div key={index} className='tasks__members-container'>
                  <img className='tasks__members-avatar' src={imgUrl} alt="" width={70}/>
                </div>
              ))
            }
          </div>
        </div>
    </>
  )
}
