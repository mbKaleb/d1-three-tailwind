import { useEffect, useState } from "react"
import dictionary from "../dictionary.json"
import ContentContainer from "./ContentContainer"
import AWSCLFC01 from "/badgeIcons/AWS/AWSCLFC01.png"
import AWSDVA from "/badgeIcons/AWS/AWSDVA.png"

const medText = " text-[2vh] "
const lgText = " text-[2.5vh] "


function Item({ children, isActive, className }) {
  const activeClass = `${medText} font-light text-[#ccfcfc] [text-shadow:_0px_0px_30px_rgb(255_255_255_/_100%)] select-none` +" "+ className
  const inactiveClass = `${medText}  font-light text-gray-700 rounded select-none` + " "+ className

  return (
    <div className={isActive ? activeClass : inactiveClass}>
      {children}
    </div>
  )
}

function AWScert({children, credly, src}) {
  const onClickHandler = () => {
    window.open(credly, '_blank')
  }
  const mouseOverHandle =() => {
    console.log()
  }

  return(
    <div className="text-white " onMouseOver={mouseOverHandle} >
        <img src={src} alt="AWS asociate developer badge icon" width="100" height="100" onClick={onClickHandler} className=" p-1 hover:drop-shadow-[0_1px_7px_rgba(255_255_255_/_100%)] "  ></img>
    </div>
  )
}

// function sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

function AppContent(props) {
  const {appContext} = {...props}
  const [xtraContainers, setXtraContainers] = useState(1)

  useEffect(() => {
    //Mount Event Listeners
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
      className="w-[100vw] h-[100vh] absolute top-[1vh] z-[20]  overflow-y-auto snap-y snap-mandatory select-none"
    >
      <ContentContainer>{() => { }}</ContentContainer>
      <ContentContainer id="doc1" >{function (isActive) {
        return (
          <div
            className="relative space-y-4"
            id="doc1"
          >
            <Item isActive={isActive} className={`pb-2 ${lgText}`}> Software Developer </Item>
            <Item isActive={isActive} className="pl-4" > Kaleb Franken </Item>
            <Item isActive={isActive} className="pl-4" > BS in Computer Science </Item>
            <Item isActive={isActive} className="pl-4" > Favorite Color: #0FFFFA </Item>
          </div>
        )
      }}
      </ContentContainer>
      <ContentContainer id="doc2" >{function (isActive) {
        return (
          <div id="doc2" className="relative space-y-4" >
            <Item isActive={isActive} className={`mt-[13vh] pb-4 ${lgText} `}>Top Skills </Item>
            <Item isActive={isActive} className="pl-4 py-[2px]" > Cloud Native Software Development -  Written Technical Communication - Interest in market research </Item>
            <Item isActive={isActive} className="pl-4" > SDLC: Agile Development, Branch Based Development  </Item>
            <Item isActive={isActive} className="pl-4" > CLOUD PROVIDERS: AWS, Azure, Google Cloud, Vercel </Item>
            <Item isActive={isActive} className="pl-4" > LANG: Javascript (TS), Rust, Ruby, C++  </Item>
            <Item isActive={isActive} className="pl-4" > FRAMEWORKS: React </Item>
            <Item isActive={isActive} className="pl-4" > TOOLS: Git, Docker  </Item>
          </div>
        )
      }}</ContentContainer>
      <ContentContainer id="doc3" >{(isActive) => {
        return (
          <div id="doc3" className="relative space-y-4" >
            <Item isActive={isActive} className="text-2xl" > Projects </Item>
            <Item isActive={isActive} > Project 1 </Item>
            <Item isActive={isActive} > Project 2 </Item>
            <Item isActive={isActive} > Project 3 </Item>
          </div>
        )
      }}</ContentContainer>
      <ContentContainer id="doc4" >{(isActive) => {
        return (
          <div id="doc4" className="relative space-y-4 " >
            <div className="flex justify-center">
              <AWScert credly={dictionary.awsLinks.asocDeveloper} src={AWSDVA} />
              <AWScert credly={dictionary.awsLinks.cloudPractitioner} src={AWSCLFC01} />
            </div>
            <Item isActive={isActive} className={'w-[100vw] text-center'} > CERTIFICATIONS </Item>
          </div>
        )
      }}</ContentContainer>

    {
      Array(xtraContainers).fill().map(()=> {return (<ContentContainer />)})
    }
    </div>
  )
}

export default AppContent