import { AiOutlineGithub } from 'react-icons/ai'

export default function GithubBttn() {
    
    return (
    <div className='fixed  top-[max(calc(2.6vw-1px),23px)]  right-[max(calc(1vw),1px)] text-white  outline-white outline outline-[0.2vh] bg-black rounded p-1  text-3xl  z-[30] drop-shadow-[0_1px_4px_rgba(255_255_255_/_60%)]'>
        <a href="https://github.com/mbKaleb" target='_blank'>
            <AiOutlineGithub className='w-[calc(3.6vw-11px)] h-[calc(3.6vw-11px)] min-w-[23px] min-h-[23px] '/>
        </a>
    </div>
    )
}