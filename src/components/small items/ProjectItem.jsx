function ProjectItem({src, link }) {

    const onClickHandler = () => {
        window.open(link, '_blank')
    }
    

    return (
        <div className="rounded w-fit h-fit text-white hover:[cursor:pointer] " onClick={onClickHandler} >
            <img src={src} alt="non"  className="h-[20vh] rounded p-4 hover:drop-shadow-[0_1px_10px_rgba(255_255_255_/_80%)] "  ></img>
        </div>
    )
}

export default ProjectItem