import React, { Suspense, useState } from "react";
import { myProjects } from "../contants/index";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader";
import DemoComputer from "../components/DemoComputer";
import { useMediaQuery } from "react-responsive";

const Projects = () => {
  const [selectedIndex , setSelectedIndex] = useState(0);
  const currentProject = myProjects[selectedIndex];

  const isMobile = useMediaQuery ({maxWidth:768});
    const isTablet = useMediaQuery ({minWidth:768 , maxWidth:1024});
    const isSmall = useMediaQuery ({ maxWidth:440});

  const projectCount = myProjects.length;

  const HandleNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % projectCount);
  };

  const HandlePrev = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === 0 ? projectCount - 1 : prevIndex - 1
    );
  };
  
   
  
  

  return (
    <section className="c-space my-20">
      <p className="head-text">My Works</p>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0">
            <img
              src={currentProject.spotlight}
              alt="spotlight"
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>
          
          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">
              {currentProject.title}
            </p>
            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
            <div className="flex items-center justify-between flex-wrap gap-5">
                
                <a className="flex items-center gap-2 cursor-pointer text-white-600" href={currentProject.href} target="_blank"  rel="noopener noreferrer" >
                    <p>check live site </p>
                    <img  src="/asset/arrow-up.png" className="w-3 h-3" alt="arrow" />
                </a>
            </div>
            <div className="flex justify-between items-center mt-7">
                <button className="arrow-btn" onClick={HandlePrev}>
                  <img src="assets/left-arrow.png"  alt="left arrow" className="w-4 h-4"/>
                </button>
                <button className="arrow-btn" onClick={HandleNext}>
                  <img src="assets/right-arrow.png"  alt="right arrow" className="w-4 h-4"/>
                </button>

            </div>
          </div>
         
        </div>
         {/* grid 2 */}
         <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
                <Canvas>
                <ambientLight intensity={3} />

                    <directionalLight position={[10,10,5]} />
                    <Center>
                        <Suspense fallback={<CanvasLoader />}>

                            <group scale={isMobile ? 4.5 : 6} position={[0,-10,-3]} rotation={[0.2,-1.6,0]}>
                                   <DemoComputer texture={currentProject.texture} />
                            </group>

                        </Suspense>
                    </Center>
                    <OrbitControls enableZoom={false} maxPolarAngle={Math.PI /2} />
                </Canvas>
          </div>
      </div>
    </section>
  );
};

export default Projects;
