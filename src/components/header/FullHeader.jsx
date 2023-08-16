import PrimaryPlate from "./PrimaryPlate"
import NeonNameSign from "./NeonNameSign"
import SecondaryPlate from "./SecondaryPlate"

export default function FullHeader() {
  return (
    <div className="flex justify-center fixed w-full z-[20] h-[5vw] bg-black min-h-[50px]">
      <SecondaryPlate />
      <div className="flex justify-center w-full outline outline-gray-700 outline-4 ">
        <PrimaryPlate />
        <NeonNameSign />
      </div>
    </div>
  )
}