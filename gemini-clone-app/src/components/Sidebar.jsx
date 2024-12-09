import React, { useContext, useState } from 'react'
import { Context } from '../context/Context'

const Sidebar = () => {
    const { expand, setExpand, color, setColor, onSent, previousPrompt, setRecentPrompt, newChat } = useContext(Context)
    const [menu, setMenu] = useState(false)

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
    }

    return (
        <div className={`bg-${color} z-10 min-h-full p-2 md:flex md:flex-col md:justify-between ${expand ? 'flex flex-col justify-between w-64' : 'hidden md:w-16'} fixed transition-width duration-300`}>
            <div className='flex flex-col gap-4'>
                <svg onClick={() => setExpand(prev => !prev)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-8 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                </svg>
                <div onClick={() => newChat()} className={`bg-gray-300 flex items-center gap-2 p-1 rounded-md hover:bg-gray-200 cursor-pointer ${expand ? 'justify-start w-32' : 'justify-center'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    {expand && <p>New Chat</p>}
                </div>
                {expand ? (
                    <div className='min-h-20 flex flex-col items-start'>
                        <p className='text-[20px] ps-4 my-2 text-white'>Recent</p>
                        {previousPrompt.map((item, index) => {
                            return (
                                <div onClick={() => loadPrompt(item)} key={index} className='flex justify-start items-center gap-2 p-1 rounded-md text-white hover:text-black cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                                    </svg>
                                    <p>{item.slice(0, 21)}...</p>
                                </div>
                            )
                        })}
                    </div>
                ) : null}
            </div>
            <div className='flex flex-col gap-2 mb-5'>
                <a href='https://gemini.google.com/app' target='_blank' className={`flex items-center gap-2 p-1 rounded-md text-white hover:bg-gray-300 hover:text-black cursor-pointer ${expand ? 'justify-start' : 'justify-center'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                    </svg>
                    {expand && <p className='font-semibold'>Help</p>}
                </a>
                <div onClick={() => alert('Under Developement')} className={`flex items-center gap-2 p-1 rounded-md text-white hover:bg-gray-300 hover:text-black cursor-pointer ${expand ? 'justify-start' : 'justify-center'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    {expand && <p className='font-semibold'>Activity</p>}
                </div>
                <div onClick={() => setMenu(prev => !prev)} className={`relative flex items-center gap-2 p-1 rounded-md text-white hover:bg-gray-300 hover:text-black cursor-pointer ${expand ? 'justify-start' : 'justify-center'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                    </svg>
                    {expand && <p className='font-semibold'>Setting</p>}
                    {menu && (
                        <div className='w-40 min-h-24 px-1 pb-2 bg-white border shadow-lg rounded-md absolute -top-32 left-10 z-10 grid grid-cols-3 gap-2 place-items-center'>
                            <p className='col-span-3 text-xl text-black'>Custom Themes</p>
                            <div onClick={() => setColor('gray-500')} className='w-8 h-8 bg-gray-500 rounded-full'></div>
                            <div onClick={() => setColor('red-500')} className='w-8 h-8 bg-red-500 rounded-full'></div>
                            <div onClick={() => setColor('blue-500')} className='w-8 h-8 bg-blue-500 rounded-full'></div>
                            <div onClick={() => setColor('emerald-500')} className='w-8 h-8 bg-emerald-500 rounded-full'></div>
                            <div onClick={() => setColor('orange-500')} className='w-8 h-8 bg-orange-500 rounded-full'></div>
                            <div className='w-8 h-8 rounded-full border border-black flex justify-center items-center'>
                                <svg onClick={() => alert('Under Developement')} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div >
    )
}

export default Sidebar
