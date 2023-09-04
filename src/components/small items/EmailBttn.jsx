import { AiOutlineMail } from 'react-icons/ai'

function EmailBttn() {
    return ( 
    <div className='fixed top-[max(calc(2.6vw-1px),23px)]  left-[max(calc(1vw),1px)] text-white  outline-white outline outline-[0.2vh] bg-black rounded p-1  text-3xl  z-[30] drop-shadow-[0_1px_4px_rgba(255_255_255_/_60%)]'>
        <a href="mailto:kaleb.franken@icloud.com">
            <AiOutlineMail className='w-[calc(3.6vw-11px)] h-[calc(3.6vw-11px)] min-w-[23px] min-h-[23px] '  />
        </a>
    </div>
    )
}
export default EmailBttn