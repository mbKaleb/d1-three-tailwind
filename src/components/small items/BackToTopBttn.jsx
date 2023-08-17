import { useEffect, useState } from "react"

export default function BackToTopBttn(props) {
    const { context, bdc } = props
    const [styleClass, setStyleClass] = useState("fixed display:none")

    // const [boundingHeight, setboundingHeight] = useState(undefined)
    // let boundingHeight = undefined
    
    useEffect(() => {
        if (context){
            // console.log(context.children[0].getBoundingClientRect().top) // start at -7700

            context.addEventListener('scroll', ()=> {
                if ((context.children[0].getBoundingClientRect().top) < -7000 ) {
                    if (styleClass === "fixed display:none"){
                        setStyleClass("fixed bottom-5 outline outline-gray-100 m-2 p-1 bg-gray-900 rounded-sm drop-shadow hover:drop-shadow-[0_1px_15px_rgba(255_255_255_/_50%)]")
                    }
                } else {
                    if (styleClass === "fixed bottom-5 outline outline-gray-100 m-2 p-1 bg-gray-900 rounded-sm drop-shadow hover:drop-shadow-[0_1px_15px_rgba(255_255_255_/_50%)]"){
                        setStyleClass("fixed display:none")
                    }
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