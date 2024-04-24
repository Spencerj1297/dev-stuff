import { ProductCar } from "./components/productCar";
import { Intro } from "./components/Intro";

export default function Home() {
  return (
    <>
      <main className="lg:h-screen w-screen pt-16 lg:pt-32 z-10">
        <video
          autoPlay
          playsInline
          loop
          muted
          className="absolute w-full h-full object-cover z-0 opacity-20"
        >
          <source src="/home/video.mp4" type="video/mp4" />
          Sorry, your browser doesn&apost support videos.
        </video>
        <Intro />
        <ProductCar />
      </main>
    </>
  );
}
