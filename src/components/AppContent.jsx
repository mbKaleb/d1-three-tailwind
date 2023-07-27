import ContentContainer from "./ContentContainer"

function AppContent() {
  return (
    <div 
        id="app-content" 
        className="w-[100vw] h-[100vh] absolute top-0 z-10 outline overflow-y-auto snap-y snap-mandatory"
    >
        <ContentContainer>
          <div className="text-white text-2xl font-bold relative space-y-4">
            <p> Software Developer </p>
            <p> Name: Kaleb Franken </p>
            <p> Education: BS In Cloud Computing @Purdue Global </p>
            <p> Favorite Color: #0FFFFA </p>
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
