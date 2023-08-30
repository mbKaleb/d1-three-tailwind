import PrimaryPlate from "./PrimaryPlate"
import NeonNameSign from "./NeonNameSign"
import SecondaryPlate from "./SecondaryPlate"

export default function FullHeader() {
  return (

      <div className="fixed relative h-64 top-0 z-[20] overflow-clip ">
        {/* <SecondaryPlate /> */}
        <PrimaryPlate>
          <NeonNameSign />
        </PrimaryPlate>
        
      </div>
  )
}