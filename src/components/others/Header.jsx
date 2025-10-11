import React from 'react'

const Header = (props) =>{

    const logOutUser= ()=>{
        localStorage.setItem('LoggedInUser','')
        props.changeUser('')
        // window.location.reload()
    }
    
    return(
            <div className='text-white flex items-end justify-between mb-10 h-[10%]'>
                <h1 className='text-2xl font-medium'>HELLO <br/> <span className='text-3xl font-semibold' >user👋 </span></h1>
                <button 
                onClick={logOutUser}
                className='bg-red-400 rounded-lg p-4 font-lg font-medium text-xl'>Log out</button>
            </div>

    )
}
export default Header