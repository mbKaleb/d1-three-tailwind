import { useEffect, useState } from "react"
import dictionary from "../dictionary.json"
import ContentContainer from "./ContentContainer"

import AWSCLFC01 from "/badgeIcons/AWS/AWSCLFC01.png"
import AWSDVA from "/badgeIcons/AWS/AWSDVA.png"

import pathfinderThumbnail from "/projectScreenshots/pathfinderThumbnail.png"
import secondOrderPhysicsTN from "/projectScreenshots/secondOrderPhysicsTN.png"

import BackToTopBttn from "./small items/BackToTopBttn"
import GithubBttn from "./small items/GithubBttn"
import EmailBttn from "./small items/EmailBttn"
import AWScert from "./small items/AWScert"
import ProjectItem from "./small items/ProjectItem"

const smallText = "text-[1.6vh]"
const medText = " text-[2.3vh] "
const lgText = " text-[3.4vh] mb-0"


function Item({ children, isActive, className }) {
  const activeClass = `${smallText} font-light text-[#ccfcfc]  select-none` +" "+ className //[text-shadow:_0px_0px_30px_rgb(255_255_255_/_100%)];
  const inactiveClass = `${smallText}  font-light text-gray-700 rounded select-none` + " "+ className

  return (
    <div className={isActive ? activeClass : inactiveClass}>
      {children}
    </div>
  )
}

function AppContent(props) {
  const {appContext} = {...props}
  const [xtraContainers, setXtraContainers] = useState(1)
  const [boundingInstanceState, setBoundingInstance] = useState(appContext)
  
  useEffect(() => {
    //Mount Event Listeners
    if (appContext){
      const width = screen.width;
      let boundingInstance
      appContext.addEventListener('scroll', function(){
        boundingInstance = appContext.lastChild.getBoundingClientRect()
        setBoundingInstance(boundingInstance)
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
      className="w-[100vw] h-[100vh] absolute top-[0vh] z-[20]  overflow-y-auto snap-y snap-mandatory select-none"
      >
      <ContentContainer>{() => { }}</ContentContainer>
      <BackToTopBttn context={appContext} />
      <GithubBttn />
      <EmailBttn />
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
          <div id="doc2" className="-mt-[calc(17vh-5vw)] relative space-y-4 p-4 bg-black bg-opacity-50 text-white h-fit rounded [box-shadow:_10px_10px_10px_rgba(0_0_0_/_0.5)]" >
              <Item isActive={isActive} className={` ${lgText} `}>Top Skills </Item>
              <Item isActive={isActive} className={`pl-2 py-[0px] ${medText} pb-[1vh]`} > Cloud Native Software Development </Item>
              <Item isActive={isActive} className="pl-4" > <text className="font-bold">CLOUD PROVIDERS:</text> AWS, Azure, Google Cloud, Vercel </Item>
              <Item isActive={isActive} className="pl-4" ><text className="font-bold">SDLC:</text> Agile Development, Branch Based Development  </Item>
              <Item isActive={isActive} className="pl-4" > <text className="font-bold">LANGUAGES:</text> Javascript (TS+), Rust, Ruby, C++  </Item>
              <Item isActive={isActive} className="pl-4" > <text className="font-bold">FRAMEWORKS:</text> React </Item>
              <Item isActive={isActive} className="pl-4" > <text className="font-bold">TOOLS:</text> Git, Docker  </Item>
          </div>
        )
      }}</ContentContainer>
      <ContentContainer id="doc3" >{(isActive) => {
        return (
        <div className="ml-[48vw] m-6">
            <Item isActive={isActive} className={`${lgText} -mt-[calc(30vh-6vw)] flex items-center`} > Projects </Item>
            <div id="doc3" className="relative ml-[1vw] w-[50vw]" >
                <Item isActive={isActive} className={'pt-2'} > Pathfinder Visualizer </Item>
                <ProjectItem src={pathfinderThumbnail} link={dictionary.projectDeploymentLinks.pathfinder}  />
                <Item isActive={isActive} className={'pt-2'} > Second Order Physics Demo </Item>
                <ProjectItem src={secondOrderPhysicsTN} link={dictionary.projectDeploymentLinks.secondOrderPhysicsDemo}  />
          </div>
        </div>
        )
      }}</ContentContainer>
      <ContentContainer id="doc4"  >{(isActive) => {
        return (
          <div id="doc4" className="relative space-y-4 -mt-[calc(17vh-5vw)]">
            <Item isActive={isActive} className={'w-[100vw] text-center' + lgText} > Certifications </Item>
            <div className="flex justify-center">
              <AWScert credly={dictionary.awsLinks.cloudPractitioner} src={AWSCLFC01} />
              <AWScert credly={dictionary.awsLinks.asocDeveloper} src={AWSDVA} />
            </div>
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