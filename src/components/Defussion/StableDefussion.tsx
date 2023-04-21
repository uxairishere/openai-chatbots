import React, { useState } from 'react'
import axios from 'axios'
import dallelogo from '../../assets/logos/dallelogo.png'
import Alert from '../Alerts/Alert';
import Skeleton from '../Alerts/Skeleton';
import { BsDownload } from 'react-icons/bs'
import { MdOutlineFileCopy } from 'react-icons/md'
import SideButton from '@/Library/Buttons/SideButton';
import CircleSpinner from '@/Library/Spinners/CircleSpinner';
import MainInput from '@/Library/FormComponents/MainInput';
import Header from '../Header/Header';

export default function StableDiffusion() {
    const [response, setResponse] = useState<any[]>([]);
    const [body, setBody] = useState<string>('');
    const [loading, setLoadiing] = useState<boolean>(false);
    const [failed, setFailed] = useState<boolean>(false);

    const HandleOnKeyPress = async (e: any) => {
        if (e.key === 'Enter') {
            setLoadiing(true)
            setFailed(false)
            setResponse([])

            const data = {
                "key": process.env.NEXT_PUBLIC_DIFFUSION_KEY,
                "prompt": body,
                "negative_prompt": null,
                "init_image": "https://raw.githubusercontent.com/CompVis/stable-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo.png",
                "width": "512",
                "height": "512",
                "samples": "3",
                "num_inference_steps": "30",
                "safety_checker": "no",
                "enhance_prompt": "yes",
                "guidance_scale": 7.5,
                "strength": 0.7,
                "seed": null,
                "webhook": null,
                "track_id": null
            }

            const options = {
                method: 'POST',
                url: `${process.env.NEXT_PUBLIC_DIFFUSION_URL}`,
                headers: {
                    'content-type': 'application/json',
                },
                data: JSON.stringify(data)
            };

            await axios.request(options).then(function (response) {
                setLoadiing(false)
                console.log(response.data.output);
                setResponse(response.data.output)
            }).catch(function (error) {
                setLoadiing(false)
                setFailed(true)
                console.error(error);
            });

        }
    }
    return (
        <div>
            <Header/>
            <div className='text-white text-center w-[90%] md:w-[70%] mx-auto mb-5'>
                <h1 className='text-cyan-500 text-2xl'>Stable Diffusion</h1>
                <h1 className='text-sm font-thin'>Stable Diffusion is a latent text-to-image diffusion model capable of generating photo-realistic images given any text input, cultivates autonomous freedom to produce incredible imagery, empowers billions of people to create stunning art within seconds.</h1>
            </div>
            <div className='w-[90%] md:w-[85%] mx-auto md:flex md:justify-center md:items-center md:space-x-3 space-y-3 md:space-y-0'>
                {response && response.map((val, index) => (
                    <div key={index} className='relative'>
                        <div className='absolute right-2 top-0 space-y-3'>
                            <SideButton
                                tag="anchor"
                                icon={<BsDownload />}
                                value={val}
                                download
                            />
                            <SideButton
                                tag="button"
                                icon={<MdOutlineFileCopy />}
                                value={val}
                                onClick={() => { navigator.clipboard.writeText(val) }}
                            />
                        </div>
                        <img className='w-[85%] rounded-lg' key={index} src={val} alt="loading..." />
                    </div>
                ))
                }
                {loading &&
                    <>
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                    </>
                }
                {failed &&
                    <Alert />
                }
            </div>
            <div className='fixed bottom-10 md:bottom-15 w-full'>
                <div className='w-[90%] md:w-[50%] mx-auto'>
                    <div className='relative'>
                        {loading &&
                            <div className='absolute right-3 top-1'>
                                <CircleSpinner />
                            </div>
                        }
                        <MainInput
                            body={body}
                            onChange={(e) => setBody(e.target.value)}
                            disabled={loading}
                            onKeyDown={HandleOnKeyPress}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
