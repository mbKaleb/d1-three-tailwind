function ProjectItem({src, link }) {

    const onClickHandler = () => {
        window.open(link, '_blank')
    }
    

    return (
        <div className="rounded text-white hover:[cursor:pointer] " onClick={onClickHandler} >
            <img src={src} alt="non" width="260" height="200"  className=" rounded p-4 hover:drop-shadow-[0_1px_7px_rgba(255_255_255_/_60%)] "  ></img>
        </div>
    )
}

export default ProjectItem