import ContentContainer from "./ContentContainer"

function AppContent() {
  return (
    <div 
        id="app-content" 
        className="snap-mandatory snap-y overflow-y-auto outline w-[90vw] h-[100vh] bg-gray-100 z-500"
    >
        <ContentContainer >
            Test
        </ContentContainer>
        <ContentContainer >
            Test2
        </ContentContainer>
    </div>
  )
}

export default AppContent