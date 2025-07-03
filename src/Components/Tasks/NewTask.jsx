import React, { useContext } from 'react'
import AcceptTask from './AcceptTask'
import { AuthContext } from '../../Context/AuthProvider';
function NewTask({ data , email}) {
  const [userData, setUserData] = useContext(AuthContext);
  const currentUser = userData.employeeData.find(emp => emp.email);
  const AcceptTaskHandler = (data) => {
    const updatedUserData = {
      ...userData,
      employeeData: userData.employeeData.map((emp) => {
        if (emp.email === email) {
          const updatedTasks = emp.tasks.map((task) => {
            if (task.taskTitle === data.taskTitle) {
              return {
                ...task,
                active: true,
                newTask: false,
                failed: false,
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
              newTask: emp.taskCounts.newTask - 1,
              active: emp.taskCounts.active + 1,
            },
          };
        }
        return emp;
      }),
    };
    setUserData(updatedUserData);
  };


  return (
    <div className="flex-shrink-0 h-full w-[310px] 	bg-[#1E3D9B] rounded-2xl ">
      <div className="flex justify-between items-center px-5 py-6">
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
        <div className='flex relative justify-center gap-10  '>
          <button
            onClick={() => AcceptTaskHandler(data)}
            className='flex justify-center items-center bg-blue-600 font-semibold px-3 py-1.5 rounded-md text-[11px] text-white shadow-md transition-all duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-103 hover:shadow-lg'
          >Accept Task</button>
        </div>
      </div>
    </div>
  )
}

export default NewTask