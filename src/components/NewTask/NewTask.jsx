import './NewTask.css'

export const NewTask = ({ handleNewTask }) => {
  return (
    <div className='NewTask' onClick={handleNewTask}>
      <div className='NewTask__header-container'>
      <img src="https://img.icons8.com/ios-filled/50/FFFFFF/add--v1.png"/>
      <p className='NewTask__header-title'>Add a new task</p>
      </div>
    </div>
  )
}
