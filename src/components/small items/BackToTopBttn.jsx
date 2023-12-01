import { useEffect, useState } from "react"

export default function BackToTopBttn(props) {
    const { context, bdc } = props
    const [styleClass, setStyleClass] = useState("fixed display:none")
    const active = "fixed left-5 bottom-5 outline outline-gray-100 m-2 p-1 bg-gray-900 rounded-sm drop-shadow hover:drop-shadow-[0_1px_15px_rgba(255_255_255_/_50%)]";
    const inactive = "fixed display:none";

    
    useEffect(() => {
        if (context){
            context.addEventListener('scroll', ()=> {
                if ((context.children[0].getBoundingClientRect().top) < -4990 ) {
                        setStyleClass(prevState=>{
                            if (prevState === inactive){
                                return active
                            }
                            return prevState
                        })
                } else {
                    setStyleClass(prevState=>{
                        if (prevState === active){
                            return inactive
                        }
                        return prevState
                    })
                }
            })
        }
    }, [context])

    const onClickHandle = () => {
        if (context){
            context.scrollTo(0,0)
        }
    }


    return (
        <div
            onClick={onClickHandle}
            className={styleClass}
        >
            <div className="pointer-events-none text-white font-light" >Back To Top</div>
        </div>
    )
}