export default function AWScert({ children, credly, src }) {

    const onClickHandler = () => {
        window.open(credly, '_blank')
    }
    const mouseOverHandle = () => {
        console.log()
    }
    return (
        <div className="text-white " onMouseOver={mouseOverHandle} >
            <img src={src} alt="AWS asociate developer badge icon" height="150" width="150" onClick={onClickHandler} className=" py-1 hover:drop-shadow-[0_1px_7px_rgba(255_255_255_/_100%)] hover:[cursor:pointer]"  ></img>
        </div>
    )
}