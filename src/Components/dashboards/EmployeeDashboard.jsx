import React, { useContext } from "react";
import Tasklist from "../Tasks/Tasklist";
import TaskBar from "../Tasks/taskBar";
import Header from './../../others/Header';
import { AuthContext } from '../../Context/AuthProvider';


function EmployeeDashboard({ email ,  changeUser }) {
  
  const [userData,setUserData] = useContext(AuthContext);
  const currentUser = userData.employeeData.find(emp => emp.email === email);
 
  return (
    <div className="h-screen w-full bg-[#1c1c1c] py-8 px-4">
      <Header data={currentUser} changeUser={changeUser} />
      <TaskBar data={currentUser} />
      <Tasklist data={currentUser} />
    </div>
  );
}

export default EmployeeDashboard;
