import React, { useContext } from 'react'
import { Context } from '../context/Context'

const Login = ({ setLoginOpen, preview, setPreview }) => {
    const { color, setUsername } = useContext(Context)
    const handleFileChange = (event) => {
        const file = event.target.files[0]
        setPreview(URL.createObjectURL(file))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setLoginOpen(false)
    }
    return (
        <div className='bg-black bg-opacity-80 w-full h-full absolute top-0 left-0 z-20 flex justify-center items-center'>
            <div className='max-w-[500px] bg-white px-5 py-3 rounded-md'>
                <div className={`text-2xl font-semibold flex justify-between items-center`}>
                    <span>Sign-Up</span>
                    <svg onClick={() => setLoginOpen(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="size-6 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
                <div className='grid grid-cols-3 gap-3 my-5'>
                    <div className={`order-1 col-span-2 p-1 bg-white border border-black rounded-md`}>
                        <label className='font-semibold'>Name : </label>
                        <input type="text" className='focus-visible:outline-none bg-transparent px-2 py-1' required onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className={`order-3 col-span-2 p-1 bg-white border border-black rounded-md`}>
                        <label className='font-semibold'>Email : </label>
                        <input type="email" className='focus-visible:outline-none bg-transparent px-2 py-1' required />
                    </div>
                    <label htmlFor="profile" className='h-24 w-24 order-2 row-span-2 place-self-center cursor-pointer'>
                        {preview ? (
                            <img src={preview} alt="profile" className='h-24 w-24 rounded-full object-cover' loading='lazy' />
                        ) : (
                            <div className={`h-24 w-24 flex justify-center items-center bg-${color} hover:bg-opacity-90 rounded-full`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-10">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                                </svg>
                            </div>
                        )}
                        <input id='profile' type="file" onChange={handleFileChange} className='hidden' />
                    </label>
                </div>
                <button onClick={handleSubmit} type="button" className={`px-2 py-1.5 text-xl font-semibold border bg-${color} hover:bg-opacity-90 text-white w-full rounded-md`}>Save</button>
            </div>
        </div>
    )
}

export default Login