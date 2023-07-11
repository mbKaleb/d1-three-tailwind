import ContentContainer from "./ContentContainer"

function AppContent() {
  return (
    <div 
        id="app-content" 
        className="w-[100vw] h-[100vh] absolute top-0 z-10 outline overflow-y-auto snap-y snap-mandatory"
    >
        <ContentContainer />
        <ContentContainer >
            Test
        </ContentContainer>
        <ContentContainer />
        <ContentContainer />
    </div>
  )
}

export default AppContent
