import { primaryHeaderJSVG } from "../jsx-paths/primaryHeaderJSVG"


export default function PrimaryPlate({children}) {
  return (
    <div className="absolute top-1 w-[100vw] min-w-[900px] touch-none ">
      <div className="absolute top-0 left-0 w-full" >
        {primaryHeaderJSVG}
      </div>
      <div className="absolute left-0 w-full" >
        {children}
      </div>
    </div>
  )
}