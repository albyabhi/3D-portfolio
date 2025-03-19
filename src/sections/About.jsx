import React, { Suspense, useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";
import Button from "../components/Button";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "../components/CanvasLoader";
import AvatarModel from "../components/AvatarModel";
import { OrbitControls } from "@react-three/drei";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const globeRef = useRef(null);

  const handleCopy = () => {
    navigator.clipboard.writeText("alby4645@gmail.com");
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  useEffect(() => {
    if (globeRef.current) {
      const controls = globeRef.current.controls?.();
      if (controls) {
        controls.autoRotate = true;
        controls.autoRotateSpeed = 3.5;
      }
    }
  }, []);

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <div className="w-full h-full   inset-0">
              <Canvas className="w-full h-full">
                <Suspense fallback={<CanvasLoader />}>
                  <AvatarModel
                  scale={5.5}
                   position={[0, -7.8,0]} 
                   />
                  <ambientLight intensity={2} />
                  <directionalLight
                    castShadow
                    position={[10, 10, 10]}
                    intensity={6}
                  />
                  <OrbitControls
                    enableZoom={false} 
                   
                    maxPolarAngle={Math.PI / 2} // Lock rotation to X-axis only
                    minPolarAngle={Math.PI / 2} // Lock rotation to X-axis only
                  />
                </Suspense>
                <OrbitControls />
              </Canvas>
            </div>
            <div>
              <p className="grid-headtext">Hi i am Alby</p>
              <p className="grid-subtext">
                A fresher wait to implement my skill to a professional project
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/stack.png"
              alt="grid2"
              className="w-full sm:2-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                specialised in JavaScript with a focus on React JS echo systems
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[500px] h-auto flex flex-col justify-center items-center">
              <Globe
              ref={globeRef}
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={1.5}
                showAtmosphere
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                
              />
              <div className="text-center mt-2">
                <p className="grid-headtext text-lg font-semibold">
                  Working across all time zones
                </p>
                <p className="grid-subtext text-gray-400">
                  I am from India, Kerala
                </p>
                <Button name="Contact me" isBeam containerClass="w-full mt-6" />
              </div>
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain "
            />
            <div>
              <p className="grid-headtext text-lg font-semibold">my passion</p>
              <p className="grid-subtext text-gray-400">
                love solving problems and build innovation through code
              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="grid-3"
              className="w-full sm:h-[276px] md:h-[126px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-xl md:text-xl font-medium text-white">
                  alby4645@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
