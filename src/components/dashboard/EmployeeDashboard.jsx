import React from 'react'
import Header from '../others/Header'
import Tasklistnum from '../others/Tasklistnum'
import Tasklist from '../Tasklist/Tasklist'

const EmployeeDashboard = (props) =>{
   
    return(
         <div className='h-full p-7'>
            <Header  changeUser={props.changeUser}data={props.data} />
            <Tasklistnum data={props.data}/>
            <Tasklist data={props.data}/>
        </div>

    )
}
export default EmployeeDashboard
// h-screen
// Means: take 100% of the viewport height.

// Example: If your screen is 800px tall, this element becomes 800px tall.

//  h-full
// Means: take 100% of the parent’s height.

// But it works only if the parent has a height set.

// If the parent doesn’t have a height, then h-full becomes height: auto, which collapses based on content.


