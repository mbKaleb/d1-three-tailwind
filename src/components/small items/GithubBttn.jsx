import { AiOutlineGithub } from 'react-icons/ai'

export default function GithubBttn() {
    
    return (
    <div className='fixed  top-[max(calc(2.2vw),25px)]  left-[max(calc(2.2vw),10px)] text-white  outline-white outline bg-black rounded-lg p-1  text-3xl  z-[30] drop-shadow-[0_1px_4px_rgba(255_255_255_/_80%)]'>
        <a href="https://github.com/mbKaleb" target='_blank'>
            <AiOutlineGithub className='w-[calc(3vw-10px)] h-[calc(3vw-10px)] min-w-[20px] min-h-[20px] '/>
        </a>
    </div>
    )
}