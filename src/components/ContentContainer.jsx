import { useEffect } from "react";

function ContentContainer(props) {
  let parentElement = document.getElementById("01")
  
  
  let observer = new IntersectionObserver(function(entries) {
    if(entries[0].isIntersecting === true) {
      console.log('Item has just APPEARED!');
    } else {
      console.log('Item has just DISAPPEARED!');
    }
  }, { threshold: [1] });
  
  useEffect(() => {
    if (parentElement !== null){
      observer.observe(document.getElementById("01"));
    }
    // console.log(parentElement)
  }, [parentElement])


  // console.log(props)
  // console.log(parent)
  return (
    <div className="h-[100vh] w-[100vw] mt-[35.4vh] border-[64px] snap-start snap-always flex justify-center items-center">
        {props.children}
    </div>
  )
}
export default ContentContainer