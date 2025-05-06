import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import HackerRoom from "../components/HackerRoom";
import CanvasLoader from "../components/CanvasLoader";
import { Leva, useControls } from "leva";
import { PerspectiveCamera } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../contants/index";

import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";
import AsusLaptop from "../components/AsusLaptop";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isSmall = useMediaQuery({ maxWidth: 440 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section id='home' className="min-h-screen border-2 w-fll flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-2xl text-center text-xl font-medium text-white font-general-sans ">
          Hi , I am Alby <span className="waving-hand">👋</span>
        </p>
        <p className="text-transparent bg-gradient-to-r from-gray-400 to-gray-400 bg-clip-text text-center text-3xl sm:text-3xl">
          Building unique product for your brand
        </p>
      </div>

      <div className="w-full h-full absolute inset-0">
        {/* <Leva  /> */}
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <HeroCamera>
              <AsusLaptop
                isMobile={isMobile}
                scale={isMobile ? 4 : 7}
                position={[isMobile ? 0.1 : 0.1, -6.5, isMobile ? -10.0 : -5.9]}
                rotation={[0, 0, 0]}
              />
            </HeroCamera>

            <ambientLight intensity={2} />
            <directionalLight castShadow position={[10, 10, 10]} intensity={6} />
          </Suspense>
        </Canvas>
      </div>

      <div className=" absolute bottom-7 left-0 right-0 w-full z-10 c-space ">
        <a href="#about" className="w-fit">
          <Button
            name="About me"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96px "
          ></Button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
