
function ContentContainer(props) {
  return (
    <div className="h-[100vh] w-[100vw] mt-[35.4vh] border-[64px] snap-start">
        {props.children}
    </div>
  )
}
export default ContentContainer