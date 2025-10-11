import React from 'react'

const Tasklistnum = ({data}) =>{
    return(
        <div className=' flex items-center justify-between p-3 gap-5 h-[40%]'>
            <div className='bg-red-400 h-40 w-[45%] rounded-xl '>
            <h2 className='text-white text-3xl font-bold m-5 '>{data.taskSummary.newTask}</h2>
            <h3 className='text-white text-2xl font-semibold m-5'>New Task</h3>
            </div>
             <div className='bg-green-400 h-40 w-[45%] rounded-xl '>
            <h2 className='text-white text-3xl font-bold m-5 '>{data.taskSummary.active}</h2>
            <h3 className='text-white text-2xl font-semibold m-5'>Accepted Task</h3>
            </div>
             <div className='bg-blue-400 h-40 w-[45%] rounded-xl '>
            <h2 className='text-white text-3xl font-bold m-5 '>{data.taskSummary.completed}</h2>
            <h3 className='text-white text-2xl font-semibold m-5'>Completed Task</h3>
            </div>
             <div className='bg-yellow-400 h-40 w-[45%] rounded-xl '>
            <h2 className='text-white text-3xl font-bold m-5 '>{data.taskSummary.failed}</h2>
            <h3 className='text-white text-2xl font-semibold m-5'>failed Task</h3>
            </div>
        </div>
    )
}
export default Tasklistnum