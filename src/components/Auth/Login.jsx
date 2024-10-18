import React, { useState } from 'react'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Submitted");

        setEmail("");
        setPassword("")
    }

    return (
        <div className='flex justify-center items-center w-screen h-screen bg-zinc-800'>
            <div className="border-2 border-emerald-600 p-20 rounded-xl">
                <form onSubmit={(e) => submitHandler(e)}
                    className='flex flex-col items-center justify-center'>
                    <input required className="border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-grey-400 bg-transparent outline-none text-white font-semibold" type="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input required className="border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-grey-400 bg-transparent outline-none text-white mt-3 font-semibold" type="password" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className=' bg-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-white bg-transparent outline-none text-white mt-5 w-full'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login