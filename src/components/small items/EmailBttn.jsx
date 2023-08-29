import { AiOutlineMail } from 'react-icons/ai'
// import { FaBeer } from 'react-icons/fa';


function EmailBttn() {
    
    return ( 
    <div className='fixed  top-[max(calc(2.2vw),25px)]  left-[max(calc(1vw),1px)] text-white  outline-white outline outline-[0.2vh] bg-black rounded p-1  text-3xl  z-[30] drop-shadow-[0_1px_4px_rgba(255_255_255_/_60%)]'>
        <a href="mailto:kaleb.franken@icloud.com">
            <AiOutlineMail className='w-[calc(3vw-10px)] h-[calc(2.5vw-4px)] min-w-[22px] min-h-[22px]'  />
        </a>
    </div>
    )
}

export default EmailBttn