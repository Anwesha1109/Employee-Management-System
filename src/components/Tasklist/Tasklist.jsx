import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import NewTask from './NewTask'

const Tasklist = ({data}) =>{
    return(
        <div id='taskbar' className=' h-[37%] w-full mt-5 p-5 flex items-center justify-start flex-nowrap gap-5 overflow-auto'>
        {data.tasks.map((elem,idx)=>{
            if(elem.active){
                return <AcceptTask key={idx} data={elem}/>
            }
            if(elem.newTask){
                return <NewTask key={idx} data={elem}/>
            }
            if(elem.completed){
                return <CompleteTask key={idx} data={elem}/>
            }
            if(elem.failed){
                return <FailedTask key={idx} data={elem}/>
            }   
        })}
        </div>

    )
}
export default Tasklist
// flex-nowrap forces everything into one row.

// flex-shrink-0 prevents them from shrinking.

