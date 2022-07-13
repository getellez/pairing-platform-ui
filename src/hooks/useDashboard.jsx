import { useState, useEffect } from 'react';
import { sortMembers } from '../utils/sortMembers';
import { initialData } from '../utils/data';


export const useDashboard = () => {
  const [dashboard, setDashboard] = useState(initialData)
  
  const handleSortMembers = ({ source, destination }) => {
    if (!destination) {
      return;
    }
    if (source.index === destination.index && source.droppableId === destination.droppableId) {
      return;
    }
    const sortedDashboard = sortMembers(source, destination, dashboard);
    setDashboard(sortedDashboard)
    
  }

  /* useEffect(() => {
    const getDashboard = async () => {
      const result = await fetch('http://localhost:3001/api/v1/dashboards/1')
      const data = await result.json()
      console.log('data', data);
      // setDashboard(data)
    }
    // getDashboard()
  }, []) */

  return {
    dashboard,
    setDashboard,
    handleSortMembers
  }
}
