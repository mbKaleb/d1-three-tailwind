import ContentContainer from "./ContentContainer"

function Item(props) {
  return (
    <div className="text-3xl text-gray-400 rounded hover:text-white  hover:drop-shadow-[0px_0px_15px_rgba(99,253,254,0.9)]   ">
      {props.children}
    </div>
  )
}

function AppContent() {
  let windowTest = window.visualViewport
  let docTest = null;



  console.log(windowTest)
  return (
    <div 
        id="app-content" 
        className="w-[100vw] h-[100vh] bg- absolute top-0 z-10 outline overflow-y-auto snap-y snap-mandatory"
    >
        <ContentContainer>
          <div 
            className="text-black text-2xl font-bold relative space-y-4 "
            id="01"
          >
            
            <Item> Software Developer </Item> 
            <Item> Name: Kaleb Franken </Item>
            <Item> Education: BS In Cloud Computing @Purdue Global </Item>
            <Item> Favorite Color: #0FFFFA </Item>
          </div>
        </ContentContainer>
        <ContentContainer >
        </ContentContainer>
        <ContentContainer />
        <ContentContainer />
        <ContentContainer />
        <ContentContainer />
        <ContentContainer />
    </div>
  )
}

export default AppContent
