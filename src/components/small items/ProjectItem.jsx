function ProjectItem({ link }) {
    const favicon = `https://www.google.com/s2/favicons?domain=${link}&sz=128`

    return (
        <div className="rounded w-fit h-fit text-white hover:[cursor:pointer]" onClick={() => window.open(link, '_blank')}>
            <img src={favicon} alt="favicon" className="h-[8vh] rounded p-2 hover:drop-shadow-[0_1px_10px_rgba(255_255_255_/_80%)]" />
        </div>
    )
}

export default ProjectItem