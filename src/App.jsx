import { useContext, useEffect, useState } from "react";
import AdminDashboard from "./Components/dashboards/AdminDashboard";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./Components/dashboards/EmployeeDashboard";
import { AuthContext } from "./Context/AuthProvider";

function App() {

  const [user, setUser] = useState(null);
  const [userLoggedInData, setuserLoggedInData] = useState(null);
  const [userData,setUserData] = useContext(AuthContext);

  useEffect(() => {
    const loggedInuser = localStorage.getItem("userLoggedInData");

   
    if (loggedInuser && loggedInuser !== " ") {
      const parsedData = JSON.parse(loggedInuser);
      setuserLoggedInData(parsedData.data);
      setUser(parsedData.role);
    }
  }, [])


  const loginHandel = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      setUser("admin");
      localStorage.setItem("userLoggedInData", JSON.stringify({ role: "admin" }));
    } 
    
    else if (userData) {
      const employee = userData.employeeData.find(
        (e) => email == e.email && password == e.password
      );
      if (employee) {
        setUser("employee");
        setuserLoggedInData(employee);
        localStorage.setItem(
          "userLoggedInData",
          JSON.stringify({ role: "employee" , data: employee })
        );
      }
    } else {
      alert("Invalid user , Enter valid email and password");
    }
  };
  

  return (
     <>
      {!user ? <Login loginHandel={loginHandel} /> : ''}
      {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard  email={userLoggedInData.email} changeUser={setUser} /> : null) }
    </>
  );
}

export default App;

