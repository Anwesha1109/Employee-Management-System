import React from 'react'

const AcceptTask = ({data}) => {
    return (
        <>
            <div className='h-full w-[300px] bg-blue-400 rounded-xl flex-shrink-0'>
            <div className='flex items-center justify-between p-4'>
                <h3 className='text-white bg-red-600 text-sm rounded px-3 py-2'>{data.category}</h3>
                <h4 className='text-white'>{data.taskDate}</h4>
            </div>
            <h2 className='text-white text-2xl px-2 font-semibold'>{data.taskTitle}</h2>
                <p className='text-white text-sm p-2 mt-2'>{data. taskDescription}</p>
            <div className='flex justify-between'>
                <button className='bg-green-400 hover:bg-green-500 text-white rounded p-1 text-sm px-2 ml-2'>Mark as Completed</button>
                <button className='bg-red-400  hover:bg-red-500 text-white rounded p-1 px-2 mr-2'>Mark as Failed</button>
            </div>
        </div >
        </>
    )
}
export default AcceptTask