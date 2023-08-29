import { primaryHeaderJSVG } from "../jsx-paths/primaryHeaderJSVG"


export default function PrimaryPlate({children}) {
  return (
    <div className="fixed  flex justify-center">
      <div className="absolute w-[92vw] min-w-[650px]" >
          {primaryHeaderJSVG}
      </div>
      <div className=" absolute w-[92vw] min-w-[650px]">
        {children}
      </div>
    </div>
  )
}