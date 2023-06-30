
function ContentContainer(props) {
  return (
    <div className="h-[100vh] border-[64] snap-start">
        {props.children}
    </div>
  )
}
export default ContentContainer