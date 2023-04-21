import React, { useState } from 'react'
import axios from 'axios'
import dallelogo from '../../assets/logos/dallelogo.png'
import Alert from '../Alerts/Alert';
import Skeleton from '../Alerts/Skeleton';

import { createProxyMiddleware } from 'http-proxy-middleware';

export default function Dalle2() {
    const [response, setResponse] = useState<any[]>([]);
    const [body, setBody] = useState<string>('');
    const [loading, setLoadiing] = useState<boolean>(false);
    const [failed, setFailed] = useState<boolean>(false);

    const HandleOnKeyPress = async (e: any) => {
        if (e.key === 'Enter') {
            setLoadiing(true)
            setFailed(false)
            setResponse([])
            const options = {
                method: 'POST',
                url: `${process.env.NEXT_PUBLIC_RAPIDAPI_DALLE_URL}`,
                headers: {
                    'content-type': 'application/json',
                    'X-RapidAPI-Key': `${process.env.NEXT_PUBLIC_RAPIDAPI_KEY}`,
                    'X-RapidAPI-Host': `${process.env.NEXT_PUBLIC_RAPIDAPI_HOST}`
                },
                data: `{"prompt":"${body}","n":2,"size":"1024x1024"}`
            };
            await axios.request(options).then(function (response) {
                setLoadiing(false)
                console.log(response.data);
                setResponse(response.data.data)
            }).catch(function (error) {
                setLoadiing(false)
                setFailed(true)
                console.error(error);
            });

        }
    }
    return (
        <div>
            <div className='text-white py-10 text-center flex justify-center items-end space-x-3'>
                <img src={dallelogo.src} className='w-12 h-12 md:w-20 md:h-20' alt="" />
                <h1 className='text-2xl md:text-5xl font-bold'>Create with DALL-E</h1>
            </div>
            <div className='w-[90%] md:w-[50%] mx-auto md:flex md:justify-center md:items-center md:space-x-3 space-y-3 md:space-y-0'>
                {response && response.map((val, index) => (
                    <img className='w-full md:w-[50%]' key={index} src={val} alt="loading..." />
                ))
                }
                {loading &&
                    <>
                        <Skeleton />
                        <Skeleton />
                    </>
                }
                {failed &&
                    <Alert />
                }
            </div>
            <div className='absolute bottom-20 w-full'>
                <div className='w-[90%] md:w-[50%] mx-auto'>
                    <div className='relative'>
                        {loading &&
                            <div role="status" className='absolute right-3 top-1'>
                                <svg aria-hidden="true" className="inline w-5 h-5 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                                <span className="sr-only">Loading...</span>
                            </div>
                        }
                        {/* <Alert/> */}
                        <input
                            type="text"
                            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-[#1b1b1b] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500'
                            placeholder='Enter text here...'
                            value={body}
                            onChange={e => setBody(e.target.value)}
                            onKeyDown={HandleOnKeyPress}
                            disabled={loading}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
