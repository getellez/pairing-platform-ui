import { Draggable, Droppable } from 'react-beautiful-dnd'
import './Task.css'

export const Task = ({ id, title, members }) => {
  return (
    <Droppable droppableId={id} direction='horizontal'>
      {
        (droppableProvided) => (
        <div 
        {...droppableProvided.droppableProps} 
        ref={droppableProvided.innerRef} 
        className='tasks__column'
        >
          <div className='tasks__header-container'>
            <p className='tasks__header-title'>{title}</p>
          </div>
          <div className='tasks__members'>
            {
              members.map((member, index) => (
                <Draggable key={member.id} draggableId={member.id} index={index}>
                  {
                    (draggableProvided) => (
                      <div 
                      className='tasks__members-container'
                      {...draggableProvided.draggableProps} 
                      ref={draggableProvided.innerRef} 
                      {...draggableProvided.dragHandleProps}>
                        <img className='tasks__members-avatar' src={member.image} alt={member.name} width={70}/>
                      </div>
                    )
                  }
                </Draggable>
                )
              )
            }
          </div>
          {droppableProvided.placeholder}
        </div>
        )
      }
      
    </Droppable>
  )
}
