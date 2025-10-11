import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const Alltask = () =>{
 const [userData,setuserData]= useContext(AuthContext)



    return(
        <div  id = 'alltask'className='bg-[#1c1c1c] p-5 mt-5 rounded max-h-[40vh]  overflow-auto  hide-scrollbar'>
          <div  className='bg-red-400 flex items-center justify-between mb-4 rounded px-3 py-2'>
                 <h2 className='w-1/5 text-white'>Name</h2>
                <h3  className='w-1/5 text-white'> New Tasks</h3>
                <h5  className='w-1/5 text-white'>Active Task</h5>
                <h5  className='w-1/5 text-white'>Completed</h5>
                <h5  className='w-1/5 text-white'>Failed</h5>
              </div>
          {userData.map(function(elem,idx){
            return  <div key={idx}>
              <div className='border-2 border-emerald-200 flex items-center justify-between mb-4 rounded px-3 py-2'>
                <h2 className='w-1/5 text-white'>{elem. firstName} </h2>
                <h3  className='w-1/5 text-blue-600'>{elem.taskSummary.newTask} </h3>
                <h5  className='w-1/5 text-yellow-600'>{elem.taskSummary.active} </h5>
                <h5  className='w-1/5 text-green-600'>{elem.taskSummary.completed} </h5>
                <h5  className='w-1/5 text-red-600'>{elem.taskSummary.failed} </h5>
                </div>
            </div>
          })}
            {/* <div className='bg-red-400 flex items-center justify-between mb-4 rounded px-3 py-2'>
                <h2>sarthak</h2>
                <h3>Make a UI Design </h3>
                <h5>Status</h5>
            </div>
              <div className='bg-blue-400 flex items-center justify-between  mb-4 rounded px-3 py-2'>
                <h2>sarthak</h2>
                <h3>Make a UI Design </h3>
                <h5>Status</h5>
            </div>
              <div className='bg-green-400 flex items-center justify-between  mb-4 rounded px-3 py-2'>
                <h2>sarthak</h2>
                <h3>Make a UI Design </h3>
                <h5>Status</h5>
            </div>
              <div className='bg-purple-400 flex items-center justify-between  mb-4 rounded px-3 py-2'>
                <h2>sarthak</h2>
                <h3>Make a UI Design </h3>
                <h5>Status</h5>
            </div>
              <div className='bg-pink-400 flex items-center justify-between  mb-4 rounded px-3 py-2'>
                <h2>sarthak</h2>
                <h3>Make a UI Design </h3>
                <h5>Status</h5>
            </div>
             <div className='bg-yellow-400 flex items-center justify-between  mb-4 rounded px-3 py-2'>
                <h2>sarthak</h2>
                <h3>Make a UI Design </h3>
                <h5>Status</h5>
            </div>
             <div className='bg-orange-400 flex items-center justify-between  mb-4 rounded px-3 py-2'>
                <h2>sarthak</h2>
                <h3>Make a UI Design </h3>
                <h5>Status</h5>
            </div> */}

        </div>

    )
}
export default Alltask