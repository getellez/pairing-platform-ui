import { Draggable, Droppable } from 'react-beautiful-dnd'
import addMemberAvatarUrl from '../../pages/Dashboard/img/add_avatar.jpg'
import './members.css'

export const Members = ({ members }) => {
  return (
      <section className='members'>
        <p className='dasboard__title'>Team members</p>
        <div className="members__wrapper">
          <div className="members__container">
            <img className='members__avatar members__new-avatar' src={addMemberAvatarUrl} alt="" width={100} />
          </div>
          <Droppable droppableId='members' direction='horizontal'>
            { (droppableProvided) => (
              <div 
              {...droppableProvided.droppableProps} 
              ref={droppableProvided.innerRef} 

              className="members__container">
                {
                  members.map((member, index) => (
                    <Draggable key={member.id} draggableId={member.id} index={index}>
                      { (draggableProvided) => <div
                        {...draggableProvided.draggableProps} 
                        ref={draggableProvided.innerRef} 
                        {...draggableProvided.dragHandleProps} 
                      >
                        <img 
                            className='members__avatar' 
                            src={member.img} 
                            alt="" 
                            width={100} />
                      </div>
                      }
                    </Draggable>
                  ))
                }
                {droppableProvided.placeholder}
              </div>
              )
            }
          </Droppable>
        </div>
      </section>
  )
}
