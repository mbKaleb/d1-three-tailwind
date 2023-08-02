import { useState, useEffect } from "react";

function wait2seconds(){
  return new Promise((resolve)=>{
    setTimeout(()=> {
      resolve('resolved');
    }, 1000)
  })
}

function ContentContainer({children}) {
  const [isPageActive, setIsPageActive] = useState(false)
  let parentElement = document.getElementById("cont01")

  async function setPage(){
    const res = await wait2seconds()
    setIsPageActive(true)
  }

  let observer = new IntersectionObserver(function(entries) {
    if(entries[0].isIntersecting === true) {
      console.log("Activated")
      setPage()
    } else {
      null
    }
  }, { threshold: [1] });


  useEffect(() => {
    if (parentElement !== null){
      observer.observe(parentElement);
    }
  }, [parentElement])

  return (
    <div className="h-[100vh] w-[100vw] mt-[35.4vh] border-[64px] snap-start snap-always flex justify-center items-center">
        {children(isPageActive)}
    </div>
  )
}
export default ContentContainer