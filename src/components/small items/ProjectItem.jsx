function ProjectItem({src, link }) {
    

    return (
        <div className="text-white " >
            <img src={src} alt="non" rounded width="260" height="200"  className="p-1  drop-shadow-[0_1px_7px_rgba(255_255_255_/_100%)] "  ></img>
        </div>
    )
}

export default ProjectItem