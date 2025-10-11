import React from 'react'

const CompleteTask  = ({data}) =>{
    return(
        <>
        <div className='h-full w-[300px] bg-red-400 rounded-xl flex-shrink-0'>
                <div className='flex items-center justify-between p-4'>
                    <h3 className='text-white bg-red-600 text-sm rounded px-3 py-2'>{data.category}</h3>
                    <h4 className='text-white'>{data.taskDate}</h4>
                </div>
                  <h2 className='text-white text-2xl px-2 font-semibold'>{data.taskTitle}</h2>
                  <p className='text-white text-sm p-2 mt-2'>{data. taskDescription}</p>
                  <button className='text-white px-3 ml-25 mb-5 bg-blue-500 rounded' >Completed</button>
            </div> 
        </>
    )
}
export default CompleteTask