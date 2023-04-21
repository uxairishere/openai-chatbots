import StableDiffusion from "@/components/Defussion/StableDefussion";
import Dalle2 from "@/components/dalle/Dalle2";

export default function Home() {
  return (
    <>
      <StableDiffusion />
      <div className="background-main w-[100%] md:w-[45%] h-[20rem] absolute right-[17%] md:right-0 top-[20rem] md:bottom-[10rem]"></div>
    </>
  )
}
