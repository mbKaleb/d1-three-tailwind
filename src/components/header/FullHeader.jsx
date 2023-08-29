import PrimaryPlate from "./PrimaryPlate"
import NeonNameSign from "./NeonNameSign"
import SecondaryPlate from "./SecondaryPlate"

export default function FullHeader() {
  return (

      <div className="relative fixed -top-[1vw] flex justify-center z-[20] overflow-clip " >
        <SecondaryPlate />
        <PrimaryPlate>
          <NeonNameSign />
        </PrimaryPlate>
      </div>
  )
}