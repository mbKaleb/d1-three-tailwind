import { useEffect, useState } from "react"
import ContentContainer from "./ContentContainer"

function Item({ children, isActive, className }) {
  // const activeClass = "text-4xl text-white drop-shadow-[0px_0px_6px_rgba(0,0,0,1)] " + className 
  const activeClass = "text-4xl font-light text-[#ccfcfc] [text-shadow:_0px_0px_30px_rgb(255_255_255_/_100%)] " + className
  const inactiveClass = "text-4xl font-light text-gray-700 rounded " + className

  return (
    <div className={isActive ? activeClass : inactiveClass}>
      {children}
    </div>
  )
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function AppContent(props) {
  const {appContext} = {...props}
  const [xtraContainers, setXtraContainers] = useState(1)

  useEffect(() => {
    if (appContext){
      let boundingInstance
      appContext.addEventListener('scroll', function(){
        boundingInstance = appContext.lastChild.getBoundingClientRect()
        if (boundingInstance.y < 5000) {
            setXtraContainers(prevState => {
              return prevState +1
            })
          }
        }, false);
      }
  }, [appContext])

  return (
    <div
      id="app-content"
      className="w-[100vw] h-[100vh] bg- absolute top-0 z-10 outline overflow-y-auto snap-y snap-mandatory"
    >
      <ContentContainer>{() => { }}</ContentContainer>
      <ContentContainer id="doc1" >{function (isActive) {
        return (
          <div
            className="relative space-y-4"
            id="doc1"
          >
            <Item isActive={isActive} className="pb-4"> Software Developer </Item>
            <Item isActive={isActive} className="pl-4" > Name: Kaleb Franken </Item>
            <Item isActive={isActive} className="pl-4" > Education: BS In Cloud Computing @Purdue Global </Item>
            {/* <Item isActive={isActive} className="pl-4" > Favorite Color: #0FFFFA </Item> */}
          </div>
        )
      }}
      </ContentContainer>
      <ContentContainer id="doc2" >{function (isActive) {
        return (
          <div id="doc2" className="relative space-y-4" >
            <Item isActive={isActive} className="mt-[13vh] pb-4">Top Skills </Item>
            <Item isActive={isActive} className="pl-4 py-5" > Cloud Native Software Development -  Written Technical Communication - Interest in market research </Item>
            <Item isActive={isActive} className="pl-4" > LANG: Javascript (TS), Rust, Ruby, C++  </Item>
            <Item isActive={isActive} className="pl-4" > SDLC: Agile Development  </Item>
            <Item isActive={isActive} className="pl-4" > FRAMEWORKS: React </Item>
            <Item isActive={isActive} className="pl-4" > TOOLS: Git, Docker  </Item>
          </div>
        )
      }}</ContentContainer>
      <ContentContainer id="doc3" >{(isActive) => {
        return (
          <div id="doc3" className="relative space-y-4" >
            <Item isActive={isActive} className="" > Projects </Item>
            <Item isActive={isActive} > Project 1 </Item>
            <Item isActive={isActive} > Project 2 </Item>
            <Item isActive={isActive} > Project 3 </Item>
          </div>
        )
      }}</ContentContainer>
      <ContentContainer id="doc4" >{(isActive) => {
        return (
          <div id="doc4" className="relative space-y-4" >
            <Item isActive={isActive} > Item </Item>
          </div>
        )
      }}</ContentContainer>

    {
      Array(xtraContainers).fill().map(()=> {return (<ContentContainer>{() => { }}</ContentContainer>)})
    }
    </div>
  )
}

export default AppContent