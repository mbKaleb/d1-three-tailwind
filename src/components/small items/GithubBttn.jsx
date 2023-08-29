import { AiOutlineGithub } from 'react-icons/ai'

export default function GithubBttn() {
    
    return (
    <div className='fixed  top-[max(calc(2.2vw),25px)]  right-[max(calc(1vw),1px)] text-white  outline-white outline outline-[0.2vh] bg-black rounded p-1  text-3xl  z-[30] drop-shadow-[0_1px_4px_rgba(255_255_255_/_60%)]'>
        <a href="https://github.com/mbKaleb" target='_blank'>
            <AiOutlineGithub className='w-[calc(3vw-10px)] h-[calc(3vw-12px)] min-w-[22px] min-h-[22px] '/>
        </a>
    </div>
    )
}