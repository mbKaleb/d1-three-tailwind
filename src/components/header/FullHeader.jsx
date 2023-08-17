import PrimaryPlate from "./PrimaryPlate"
import NeonNameSign from "./NeonNameSign"
import SecondaryPlate from "./SecondaryPlate"

export default function FullHeader() {
  return (
    <div className="relative bg-black h-[100vh] ">
      <div className="absolute relative top-[0px] flex justify-center h-full z-[20]" >
        <SecondaryPlate />
        <PrimaryPlate>
          <NeonNameSign />
        </PrimaryPlate>
      </div>

    </div>
  )
}