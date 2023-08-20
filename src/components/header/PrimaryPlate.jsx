import { primaryHeaderJSVG } from "../jsx-paths/primaryHeaderJSVG"


export default function PrimaryPlate({children}) {
  return (
    <div className="fixed flex justify-center">
      <div className="w-[92vw] min-w-[650px]" >
          {primaryHeaderJSVG}
      </div>
      <div className="absolute top-0 w-[40vw] min-w-[280px]">
        {children}
      </div>
    </div>
  )
}