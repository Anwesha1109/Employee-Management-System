import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const Createtask = ( {setLoggedInUserData }) => {

   const[userData,setuserData] =useContext(AuthContext)



    const [taskTitle,settaskTitle]=useState('')
    const[taskDate,settaskDate]=useState('')
    const[taskassign,settaskasign]=useState('')
    const[category,setcategory]=useState('')
    const[taskDescription,settaskDescription]=useState('')

    // const[newTask,setnewTask]=useState([])
    const SubmitHandler= (e)=>{
        e.preventDefault()
        // console.log(tasktitle,taskdate,taskassign,taskcategory,taskdescription)
        // setnewTask({tasktitle,taskdate,taskassign,taskcategory,taskdescription,active:false,newTask:true,completed:false,failed:false})
        // console.log(task)
        const task = {
        taskTitle,
        taskDescription,
        taskDate,
        category,
        active: false,
        newTask: true,
        completed: false,
        failed: false
};



        // const data=userData
        

        // data.forEach(function(elem){
        //     if(taskassign===elem.firstName){
        //         elem.tasks.push(newTask)
        //         elem.taskSummary.newTask=  elem.taskSummary.newTask + 1
        //     }
        // })
        // setuserData(data)
        // console.log(data)

        const updatedData = userData.map((elem) => {
  if (taskassign === elem.firstName) {
    return {
      ...elem,
      tasks: [...elem.tasks, task],
      taskSummary: {
        ...elem.taskSummary,
        newTask: elem.taskSummary.newTask + 1
      }
    };
  }
  return elem;
});

setuserData(updatedData);
console.log(updatedData)

 // 🔥 Add this right after updating userData
  const updatedEmployee = updatedData.find((u) => u.firstName === taskassign);
  setLoggedInUserData({ ...updatedEmployee });




        settaskTitle('')
        settaskDate('')
        settaskasign('')
        setcategory('')
        settaskDescription('')


    }
    return (
        <div className='bg-[#1c1c1c]  rounded '>
            <form
            onSubmit={(e)=>{
                SubmitHandler(e)
                console.log("form submiteed")
            }}
             className='text-white p-5 '>
                <div className='flex items-start justify-between '>
                    <div className='flex  flex-col gap-5'>
                        <div>
                            <h3>Task title</h3>
                            <input 
                            value={taskTitle}
                            onChange={(e)=>{
                                settaskTitle(e.target.value)
                            }}
                             placeholder='make a UI design' className='border-2 border-white rounded w-120  outline-none bg-transparent border-[1px] border-gray-400' />
                        </div>
                        <div>
                            <h3>Date</h3>
                            <input
                            value={taskDate}
                            onChange={(e)=>{
                                settaskDate(e.target.value)
                            }}
                            type='date' className='border-2 border-white rounded  w-120  outline-none bg-transparent border-[1px] border-gray-400' />
                        </div>
                        <div>
                            <h3>Asign to</h3>
                            <input
                            value={taskassign}
                            onChange={(e)=>{
                                settaskasign(e.target.value)
                            }}
                             placeholder='employee name' className='border-2 border-white rounded  w-120  outline-none bg-transparent border-[1px] border-gray-400' />
                        </div>
                        <div>
                            <h3>Category</h3>
                            <input 
                            value={category}
                            onChange={(e)=>{
                                setcategory(e.target.value)
                            }}
                            placeholder='design,dev etc' className='border-2 border-white rounded w-120  outline-none bg-transparent border-[1px] border-gray-400' />
                        </div>
                    </div>

                    <div className='flex flex-col  '>
                        <h3>Description</h3>
                        <textarea
                        value={taskDescription}
                            onChange={(e)=>{
                                settaskDescription(e.target.value)
                            }}
                         className=' w-120 h-45 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-3' ></textarea>
                        <button className='bg-emerald-300 text-white rounded font-bold p-2 hover:bg-emerald-400'>Create Task</button>
                    </div>
                </div>
            </form>

        </div>
    )
}
export default Createtask