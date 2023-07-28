import ContentContainer from "./ContentContainer"

function Item(props) {
  return (
    <div className="text-3xl text-white rounded drop-shadow-[2px_2px_5px_rgba(255,255,255,0.5)]  hover:drop-shadow-[-1px_1px_4px_rgba(99,253,254,1)] ">
      {props.children}
    </div>
  )
}

function AppContent() {
  return (
    <div 
        id="app-content" 
        className="w-[100vw] h-[100vh] bg- absolute top-0 z-10 outline overflow-y-auto snap-y snap-mandatory"
    >
        <ContentContainer>
          <div className="text-black text-2xl font-bold relative space-y-4 ">
            <Item> Software Developer </Item> 
            <Item> Name: Kaleb Franken </Item>
            {/* <p> Education: BS In Cloud Computing @Purdue Global </p>
            <p> Favorite Color: #0FFFFA </p> */}
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
