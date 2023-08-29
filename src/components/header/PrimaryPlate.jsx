import { primaryHeaderJSVG } from "../jsx-paths/primaryHeaderJSVG"


export default function PrimaryPlate({children}) {
  return (
    <div className="fixed  flex justify-center">
      <div className="absolute w-[92vw] min-w-[900px]" >
          {primaryHeaderJSVG}
      </div>
      <div className=" absolute w-[92vw] min-w-[900px]">
        {children}
      </div>
    </div>
  )
}