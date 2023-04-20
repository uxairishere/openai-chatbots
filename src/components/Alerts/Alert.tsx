import { useState } from 'react'
import { FiAlertTriangle } from 'react-icons/fi'
import { IoCloseSharp } from 'react-icons/io5'
interface AlertProps {
    message?: string
}
export default function Alert({ message, ...props }: AlertProps) {
    const [open, setOpen] = useState<boolean>(true)
    function handleClose() {
        setOpen(false)
        console.log('deleted')
    }
    return (
        <>
            {open === true ?
                <div className="w-full bg-red-500/5 text-red-500 rounded-lg p-5 text-center relative">
                    <IoCloseSharp className='text-2xl text-red-500/30 hover:text-red-500 float-right' />
                    <FiAlertTriangle onClick={() => handleClose} className='text-2xl mx-auto' />
                    <h1 className="font-bold">We are extremely sorry. Your request was against our rules and policy.</h1>
                    <h1 className='font-thin'>Try searching something else. If you thinl there has been an issue of want to file report than please click report button below</h1>
                    <button className="border-[1px] border-red-500 px-7 py-1 mt-3 rounded-md hover:bg-red-500 hover:text-white">Report</button>
                </div> : <div></div>
            }
        </>
    )
}