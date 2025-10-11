import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import Header from './components/others/Header'
import EmployeeDashboard from './components/dashboard/EmployeeDashboard'
import Admindashboard from './components/dashboard/Admindashboard'
import { setLocalStorage } from './utils/localstorage'
import  {AuthContext} from './context/AuthProvider'

const App= () =>{
  
  useEffect( () =>{
    const LoggedInUser=localStorage.getItem('LoggedInUser')
    
    localStorage.removeItem('LoggedInUser')
    setLocalStorage()
     setUser('') 
     setloggedinuserData(null)
    if(LoggedInUser){
      const userData=JSON.parse(LoggedInUser)
      setUser(userData.role)
      setloggedinuserData(userData.data)  
    }
    
  },[])
  // const updatedEmployee = updatedData.find(u => u.firstName === taskassign);


  const LoginHandler = (email,password) =>{
    if(email==='admin@me.com' && password==='123'){
      console.log("this is admin")
      setUser('admin')
      localStorage.setItem('LoggedInUser',JSON.stringify({role:'admin'}))
    }else if(userData){
      const employees=userData.find((e)=>email==e.email && password==e.password)
      if(employees){
        setUser('employee')
        setloggedinuserData(employees)//employee ka data logged in user k pass mil jayega
        localStorage.setItem('LoggedInUser',JSON.stringify({role:'employee',data:employees}))

      }
      console.log('this is employee')
      setUser('employee')
    }
    else{
      alert('invalid credentials')
    }
  }
  const [userData,setuserData]=useContext(AuthContext)
  const [user,setUser]=useState('')
  const[loggedinUserData,setloggedinuserData]=useState(null)


  return(
   <>
   <div className='h-screen'>
    {!user? <Login LoginHandler={LoginHandler}/> : ''}
    {user === 'admin' && <Admindashboard  changeUser={setUser}  setLoggedInUserData={setloggedinuserData}
/>}
  {user === 'employee' && <EmployeeDashboard data={loggedinUserData}   changeUser={setUser}/>}
  {/* <Createtask setLoggedInUserData={setloggedinuserData} /> */}
    {/* <EmployeeDashboard/> */}
   {/* <Admindashboard/> */}
   </div>
   
   </>

  )
}
export default App
