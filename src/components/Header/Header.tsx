import logo from '../../assets/logos/dallelogo.png'
import profile from '../../assets/images/profile2.jpg'
import { BsInstagram, BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

export default function Header() {
    return (
        <div className="md:flex md:justify-between items-center px-10 py-5 space-y-5 md:space-y-0">
            <div className='hidden md:flex  justify-center space-x-3 items-end'>
                <img src={logo.src} className='w-10 h-10  mx-auto md:mx-0' alt="" />
                <h1 className='font-bold text-white text-lg'>@uxairishere</h1>
            </div>
            <a href='https://uxairishere.github.io/profile' target='_blank' className='flex justify-center w-fit md:w-auto mx-auto space-x-3 py-2 px-3 bg-cyan-500/10 text-cyan-500 hover:text-green-200 items-center rounded-lg'>
                <img src={profile.src} className='w-10 h-10  mx-auto md:mx-0 rounded-full' alt="" />
                <div className='border-r-2 h-8 border-cyan-500'></div>
                <h1>Developer profile</h1>
            </a>
            <div className='flex justify-center space-x-5 items-end text-2xl text-cyan-500'>
                <a href="https://www.linkedin.com/in/uzairabbas1999/" className='hover:text-sky-500'>
                    <BsLinkedin />
                </a>
                <a href="https://www.instagram.com/uxair_abbass" className='hover:text-pink-500'>
                    <BsInstagram />
                </a>
                <a href="https://www.instagram.com/uxair_abbass" className='hover:text-white'>
                    <FaGithub />
                </a>
            </div>
        </div>
    )
}