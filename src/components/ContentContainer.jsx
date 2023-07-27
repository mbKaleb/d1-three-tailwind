
function ContentContainer(props) {
  return (
    <div className="h-[100vh] w-[100vw] mt-[35.4vh] border-[64px] snap-start flex justify-center items-center">
        {props.children}
    </div>
  )
}
export default ContentContainer