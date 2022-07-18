import { Droppable } from "react-beautiful-dnd"
import { useContext } from 'react';
import { DraggableMember } from "../DraggableMember/DraggableMember"
import { DashboardContext } from '../../context/DashboardContext';

export const DroppableMember = () => {
  
  const { dashboardData } = useContext(DashboardContext)
  const { dashboard } = dashboardData;

  return (
    <Droppable droppableId='members' direction='horizontal'>
      {
        (droppableProvided) => (
          <div
            {...droppableProvided.droppableProps}
            ref={droppableProvided.innerRef}
            className="members__container members__container-bench">
            { dashboard?.members &&
              dashboard.members.map((member, index) => (
                <DraggableMember key={member.id} member={member} index={index} />
              ))
            }
            {droppableProvided.placeholder}
          </div>
        )
      }
    </Droppable>
  )
}
