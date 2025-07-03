import React, { act, useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider';

function AcceptTask({ data , email }) {
const [userData, setUserData] = useContext(AuthContext);
const completeTaskHandler = (data) => {
   const updatedUserData = {
    ...userData,
    employeeData: userData.employeeData.map((emp) => {
      if (emp.email === email)
       {
        const updatedTasks = emp.tasks.map((task) => {
          if (task.taskTitle === data.taskTitle) {
            return {
              ...task,
              active: false,
              newTask: false,
              failed: false,
              completed: true,
            };
          }
          return task;
        });
        return {
          ...emp,
          tasks: updatedTasks,
          taskCounts: {
            ...emp.taskCounts,
            active: emp.taskCounts.active - 1,
            completed: emp.taskCounts.completed + 1,
          },
        };
      }
      return emp;
    }),
  };
 
  setUserData(updatedUserData);
}
const failedTaskHandler = (data) => {
   const updatedUserData = {
    ...userData,
    employeeData: userData.employeeData.map((emp) => {
      if (emp.email === email)
       {
        const updatedTasks = emp.tasks.map((task) => {
          if (task.taskTitle === data.taskTitle) {
            return {
              ...task,
              active: false,
              newTask: false,
              failed: true,
              completed: false,
            };
          }
          return task;
        });
        return {
          ...emp,
          tasks: updatedTasks,
          taskCounts: {
            ...emp.taskCounts,
            active: emp.taskCounts.active - 1,
            failed: emp.taskCounts.failed + 1,
          },
        };
      }
      return emp;
    }),
  };
  setUserData(updatedUserData);

}
  return (
    <div className="flex-shrink-0 h-full w-[310px] 	bg-[#9C340F] rounded-2xl ">
      <div className="flex justify-between items-center px-5 py-6 relative">
        <h3 className="text-sm bg-red-600 px-3 py-1 rounded-md font-bold text-white">
          {data.category}
        </h3>
        <h4 className="text-sm text-white font-bold">{data.taskDate}</h4>
      </div>
      <div className=" px-6">
        <h2 className="text-2xl font-bold text-white">
          {data.taskTitle}
        </h2>
        <h4 className="h-[15vh] overflow-x-auto scrollbar-hide text-white font-semibold mt-5">
          {data.taskDescription}
        </h4>
        <div className='flex justify-center'>
          <div className='flex justify-center  bottom-12   gap-3 mb-3'>
            <button className=' flex justify-center items-center bg-emerald-700 font-semibold px-3 py-1.5 rounded-md text-[11px] text-white shadow-md transition-all duration-300 ease-in-out transform hover:bg-emerald-800 hover:scale-102 hover:shadow-lg' onClick={() => completeTaskHandler(data)}>Marked as
            Completed</button>
            <button className='flex justify-center items-center bg-red-700 font-semibold px-3 py-1.5 rounded-md text-[11px] text-white shadow-md transition-all duration-300 ease-in-out transform hover:bg-red-800 hover:scale-102 hover:shadow-lg' onClick={() => failedTaskHandler(data)}> Marked as Failed</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AcceptTask