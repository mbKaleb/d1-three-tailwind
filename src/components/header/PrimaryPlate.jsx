import { primaryHeaderJSVG } from "../jsx-paths/primaryHeaderJSVG"


export default function PrimaryPlate({children}) {
  return (
    <div className="">
      <div className="fixed top-0 outline">
        {primaryHeaderJSVG}
      </div>
      <div className="fixed top-0 outline">
        {children}
      </div>
      
    </div>
  )
}