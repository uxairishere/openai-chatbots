interface MainInputProps { 
    body: string,
    onChange: (e:any) => void
    disabled: boolean
    onKeyDown: any
 }
export default function MainInput({body,onChange,disabled,onKeyDown,...props}: MainInputProps){
    return (
        <input
        type="text"
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-[#1b1b1b] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500'
        placeholder='Enter text here...'
        value={body}
        onChange={onChange}
        onKeyDown={onKeyDown}
        disabled={disabled}
    />
    )
}