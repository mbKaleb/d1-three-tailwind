import PrimaryPlate from "./PrimaryPlate"
import NeonNameSign from "./NeonNameSign"
import SecondaryPlate from "./SecondaryPlate"

export default function FullHeader() {
  return (
    <div className="relative fixed max-w-[100vw] ">
      <div className="fixed -top-[1vw] flex justify-center h-full z-[20]" >
        <SecondaryPlate />
        <PrimaryPlate>
          <NeonNameSign />
        </PrimaryPlate>
      </div>

    </div>
  )
}