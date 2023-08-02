import ContentContainer from "./ContentContainer"

function Item({children, isActive, className}) {
  const activeClass = "text-4xl text-[#a4fcfb] drop-shadow-[0px_0px_8px_rgba(255,255,255,1)] " + className
  const inactiveClass = "text-4xl text-gray-700 rounded " + className

  return (
    <div className={isActive? activeClass: inactiveClass}>
      {children}
    </div>
  )
}

function AppContent() {
  return (
    <div 
        id="app-content" 
        className="w-[100vw] h-[100vh] bg- absolute top-0 z-10 outline overflow-y-auto snap-y snap-mandatory"
    >
        <ContentContainer>{()=>{}}</ContentContainer>
        <ContentContainer>{function(isActive) { 
          return (
            <div 
              className="relative space-y-4"
              id="cont01"
            >
              <Item isActive={isActive} className="pb-4"> Software Developer </Item>
              <Item isActive={isActive} className="pl-4" > Name: Kaleb Franken </Item>
              <Item isActive={isActive} className="pl-4" > Education: BS In Cloud Computing @Purdue Global </Item>
              <Item isActive={isActive} className="pl-4" > Favorite Color: #0FFFFA </Item>
            </div>
            )
          }}
        </ContentContainer>
    </div>
  )
}

export default AppContent