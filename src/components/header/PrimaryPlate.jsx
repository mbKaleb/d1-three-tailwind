import { primaryHeaderJSVG } from "../jsx-paths/primaryHeaderJSVG"


export default function PrimaryPlate({children}) {
  return (
    <div className="absolute top-0 relative flex justify-center">
      <div className="absolute top-0 w-[100vw] min-w-[1050px]" >
          {primaryHeaderJSVG}
      </div>
      <div className="absolute top-0 w-[40vw] min-w-[430px]">
        {children}
      </div>
    </div>
  )
}