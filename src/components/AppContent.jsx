import ContentContainer from "./ContentContainer"

function Item({children, isActive}) {
  const activeClass = "text-3xl text-white rounded drop-shadow-[0px_0px_15px_rgba(99,253,254,0.9)]"
  const inactiveClass = "text-3xl text-gray-400 rounded"

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
              className="text-black text-2xl font-bold relative space-y-4 "
              id="cont01"
            >
              <Item isActive={isActive} > Software Developer </Item>
              <Item isActive={isActive} > Name: Kaleb Franken </Item>
              <Item isActive={isActive} > Education: BS In Cloud Computing @Purdue Global </Item>
              <Item isActive={isActive} > Favorite Color: #0FFFFA </Item>
            </div>
            )
          }}
        </ContentContainer>
    </div>
  )
}

export default AppContent