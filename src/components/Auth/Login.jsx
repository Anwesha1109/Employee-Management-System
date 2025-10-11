import react, { useState } from 'react'

const Login = ({LoginHandler}) => {
    const [email, setemail]=useState('')
    const[password,setpassword]=useState('')
    const SubmitHandler = (e)=>{
    e.preventDefault()
    LoginHandler(email,password)//child k through parent ko data pass kiya
    console.log(email)
    console.log(password)
    setemail('')
    setpassword('')

    }
    return (
        <div className='flex items-center justify-center h-screen w-screen'>
            <div className='border-2 border-emerald-200 rounded-xl p-20'>
                <form onSubmit={(e)=>{
                    SubmitHandler(e)
                }}
                className='flex flex-col items-center justify-center'>
                    <input
                    value={email}
                    onChange={(e)=>{
                        setemail(e.target.value)
                    }}
                     className='bg-white text-black boer-2 border-emerald-200 p-4 m-3 rounded-full outline-none' type="email" placeholder='Enter your Email' />
                    <input
                    value={password}
                    onChange={(e)=>{
                        setpassword(e.target.value)
                    }}
                    className='bg-white text-black border-2 border-emerald-200 p-4 mb-8 rounded-full' type="password" placeholder='Enter your Password' />
                    <button className='bg-emerald-700 text-white p-4 rounded-full mb-3'> Log in </button>
                </form>
            </div>
        </div>

    )
}
export default Login
// h-screen = full height of the viewport.
// Without h-screen, the height of the container becomes the height of the login box only — so there's no vertical space left to center it
// .
// Visual Analogy:
// Imagine this:
// h-screen: like giving the parent box a full-page height (like a full sheet of paper).

// Removing h-screen: like shrinking the box to fit just the content (like a sticky note).

// If you try to center something vertically inside a sticky note... there's no space! So it "appears" at the top.

// and as div is an inline element it will take the full width automatically

