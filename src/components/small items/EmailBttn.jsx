import { AiOutlineMail } from 'react-icons/ai'
// import { FaBeer } from 'react-icons/fa';


function EmailBttn() {
    
    return ( 
    <div className='fixed  top-[max(calc(2.2vw),25px)]  left-[max(calc(10px+6vw),54px)] text-white  outline-white outline bg-black rounded-lg p-1  text-3xl  z-[30] drop-shadow-[0_1px_4px_rgba(255_255_255_/_80%)]'>
        <a href="mailto:kaleb.franken@icloud.com">
            <AiOutlineMail className='w-[calc(3vw-10px)] h-[calc(3vw-10px)] min-w-[20px] min-h-[20px] '/>
        </a>
    </div>
    )
}

export default EmailBttn