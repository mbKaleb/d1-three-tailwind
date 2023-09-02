import PrimaryPlate from "./PrimaryPlate"
import NeonNameSign from "./NeonNameSign"
import SecondaryPlate from "./SecondaryPlate"

export default function FullHeader() {
  return (

      <div className="fixed flex w-full justify-center top-0 z-[20]">
        <SecondaryPlate />
        <PrimaryPlate>
          <NeonNameSign />
        </PrimaryPlate>
        
      </div>
  )
}