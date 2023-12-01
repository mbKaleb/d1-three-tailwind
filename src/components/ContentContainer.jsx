import { useState, useEffect } from "react";

function wait2seconds(){
  return new Promise((resolve)=>{
    setTimeout(()=> {
      resolve('resolved');
    }, 700)
  })
}

function ContentContainer({children=()=>{}, id}) {
  const [isPageActive, setIsPageActive] = useState(false)
  let parentElement = document.getElementById(id)
  let h = window.innerHeight
  
  async function setPage(){
    const res = await wait2seconds()
    setIsPageActive(true)
  }
  
  let observer = new IntersectionObserver(function(entries) {
    if(entries[0].isIntersecting === true) {
      setPage();

    } else {
      null
    }
  }, { threshold: [0.7] });
  
  useEffect(() => {
    if (parentElement !== null){
      observer.observe(parentElement);
    }
  }, [parentElement])


  return ( 
    <div className={`h-[100vh] w-screen mt-[35.4vh] px-[64px] snap-start snap-always flex justify-center pt-[${h/2.5}px]  `}>
        {children(isPageActive)}
    </div>
  )
} //"h-[100vh] w-[100vw] mt-[35.4vh]  snap-start snap-always flex justify-center items-center"
export default ContentContainer