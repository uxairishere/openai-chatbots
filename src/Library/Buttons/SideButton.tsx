import { BsDownload } from "react-icons/bs"
import { MdOutlineFileCopy } from "react-icons/md"

interface SideButtonProps {
    tag: string,
    value: any,
    icon: any,
    download?: boolean,
    onClick?: () => void

}
export default function SideButton({ tag, value, icon, download, onClick, ...props }: SideButtonProps) {
    return (
        <>
            {tag === "button" ?
                <button
                    className=' text-green-500 p-2 bg-green-500/10 rounded-md'
                    onClick={onClick}>
                    {icon}
                </button> :
                <a
                    href={value}
                    download>
                    <div className=' text-green-500 p-2 bg-green-500/10 rounded-md'>
                        {icon}
                    </div>
                </a>
            }
        </>
    )
}