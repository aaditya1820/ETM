import React, { useContext } from 'react'
import { AuthContext } from "./../../Context/AuthProvider";


function AllTask() {
    const [userData, setUserData] = useContext(AuthContext);

    return (
        <div className='bg-[#1c1c1c] h-[80%] px-3 py-10  ' >
            <div className='h-[7vh] mt-20 flex justify-center w-full bg-[#1c1c1c] px-7   '>
                <div className='h-[7vh] w-[95%] rounded-md border-2 border-white flex bg-emerald-600 text-white justify-between items-center gap-2 px-15 py-3'>
                    <h4 className='font-bold'>Employee Name</h4>
                    <h4 className='font-bold '>New Task</h4>
                    <h4 className='font-bold '>Active Task</h4>
                    <h4 className='font-bold '>Completed</h4>
                    <h4 className='font-bold mr-5'> Failed</h4>
                </div>
            </div>
            <div className='bg-[#1c1c1c]  p-5 rounded-mg h-48 '>
                {userData.employeeData.map((elem, idx) => {
                        return (
                            <div key={idx} className='border-2 border-white text-white
                         mb-2 px-5 py-3 flex justify-around ml-10 items-center w-[94%] rounded-md'>
                                <h4 className='font-semibold flex items-center justify-center  w-1/9 mr-25 text-white' >{elem.firstName} </h4>
                                <h4 className='font-semibold  flex items-center justify-center w-1/9 mr-25 text-blue-700' >{elem.taskCounts.newTask}</h4>
                                <h4 className='font-semibold  flex items-center justify-center w-1/9 mr-19 text-amber-600' >{elem.taskCounts.active}</h4>
                                <h4 className='font-semibold  flex items-center justify-center w-1/9 mr-16 text-emerald-600' >{elem.taskCounts.completed}</h4>
                                <h4 className='font-semibold  flex items-center justify-center w-1/9 text-red-700' >{elem.taskCounts.failed}</h4>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default AllTask