import React, { useContext, useState } from 'react'
import Login from './Login'
import { Context } from '../context/Context'

const Main = () => {
    const { color, username, expand, setExpand, onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)
    const [preview, setPreview] = useState(null)
    const [isLoginOpen, setLoginOpen] = useState(false)

    return (
        <div className={`bg-white p-4 w-full h-full ${expand ? 'md:ml-64' : 'md:ml-16'} transform-all duration-300`}>
            <div className='flex justify-between items-start mb-10'>
                <p className='text-2xl font-semibold flex items-center gap-2'>
                    <svg onClick={() => setExpand(true)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className={`size-8 cursor-pointer md:hidden`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                    </svg>
                    Gemini</p>
                <div className='flex justify-center items-center gap-5'>
                    {preview && username ? '' : (
                        <p onClick={() => setLoginOpen(true)} className={`bg-${color} px-4 py-1 rounded-md text-white font-semibold cursor-pointer`}>Login</p>
                    )}
                    <div className={`w-10 h-10 flex justify-center items-center rounded-full ${!preview ? 'border border-black' : ''} overflow-hidden`}>
                        {preview ? (
                            <img src={preview} alt="User image" className="w-full h-full object-cover" loading='lazy' />
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>)}
                    </div>
                </div>
            </div>
            <div className='md:px-20'>
                {showResult ? (
                    <div className={`h-[380px] w-full mb-10 overflow-y-scroll p-5 rounded-md border shadow-md`}>
                        <div className='flex justify-start items-center gap-2 mb-4'>
                            <div className={`w-8 h-8 flex justify-center items-center rounded-full ${!preview ? 'border border-black' : ''} overflow-hidden`}>
                                {preview ? (
                                    <img src={preview} alt="User image" className="w-full h-full object-cover" loading='lazy' />
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                    </svg>)}
                            </div>
                            <p className='text-xl font-semibold'>{recentPrompt}</p>
                        </div>
                        <div className='flex justify-start items-start gap-2'>
                            <div className={`p-1`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="" className="fill-blue-500 size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                                </svg>
                            </div>
                            {loading ? (
                                <div className='w-full flex flex-col gap-2 p-1 h-40'>
                                    <div className={`w-full bg-${color} h-5 animate-pulse rounded-md`} />
                                    <div className={`w-full bg-${color} h-5 animate-pulse rounded-md`} />
                                    <div className={`w-full bg-${color} h-5 animate-pulse rounded-md`} />
                                    <div className={`w-full bg-${color} h-5 animate-pulse rounded-md`} />
                                </div>) : (
                                <p dangerouslySetInnerHTML={{ __html: resultData }} className='text-justify'></p>
                            )}
                        </div>
                    </div>
                ) : (<>
                    <div className='flex flex-col gap-2 justify-center mb-12'>
                        <h1 className={`text-5xl text-yellow-700 font-semibold`}>Hello, {username}</h1>
                        <h2 className='text-5xl font-semibold'>How can I help you today?</h2>
                    </div>
                    <div className='flex justify-center h-[230px] overflow-y-scroll items-center gap-10 flex-wrap mb-10'>
                        <div className={`max-w-60 bg-${color} flex flex-col justify-between text-white h-56 p-4 rounded-md`}>
                            <p>Suggest beautiful places to see on an upcoming road trip</p>
                            <div className='w-8 h-8 flex justify-center items-center self-end rounded-full bg-white'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                                </svg>

                            </div>
                        </div>
                        <div className={`max-w-60 bg-${color} flex flex-col justify-between text-white h-56 p-4 rounded-md`}>
                            <p>Briefly summarize this concept: urban planning</p>
                            <div className='w-8 h-8 flex justify-center items-center self-end rounded-full bg-white'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                                </svg>
                            </div>
                        </div>
                        <div className={`max-w-60 bg-${color} flex flex-col justify-between text-white h-56 p-4 rounded-md`}>
                            <p>Brainstrom team bonding activities for our work retreat</p>
                            <div className='w-8 h-8 flex justify-center items-center self-end rounded-full bg-white'>
                                <div className='w-8 h-8 flex justify-center items-center self-end rounded-full bg-white'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className={`max-w-60 bg-${color} flex flex-col justify-between text-white h-56 p-4 rounded-md`}>
                            <p>Improve the readability of the following code</p>
                            <div className='w-8 h-8 flex justify-center items-center self-end rounded-full bg-white'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </>)}
                <div className='flex justify-between items-center gap-5 w-full border border-black rounded-md px-2'>
                    <input type="text" className='flex-1 bg-transparent px-2 py-1 focus-visible:outline-none'
                        onChange={(e) => setInput(e.target.value)} value={input} />
                    <div className='flex justify-center items-center gap-2'>
                        <svg onClick={() => alert('Under Developement')} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="size-6 hover:fill-blue-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                        <svg onClick={() => alert('Under Developement')} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="size-6 hover:fill-blue-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                        </svg>
                        <svg onClick={() => onSent()} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="size-6 hover:fill-blue-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                        </svg>
                    </div>
                </div>
                <p className='mt-5 text-center'>Gemini may display inaccurate info, including about people, so double-check its response. Your privacy and Gemini App</p>
            </div>
            {isLoginOpen && (
                <Login setLoginOpen={setLoginOpen} preview={preview} setPreview={setPreview} />
            )}
        </div>

    )
}

export default Main