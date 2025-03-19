import { Canvas } from "@react-three/fiber";
import React from "react";
import { workExperiences } from "../contants";

const Experience = () => {
  return (
    <section c-space my-20>
      <div className="w-full text-white-600">
        <h3 className="head-text">my Experience</h3>
      </div>
      <div className="work-container">
        <div className="work-canvas">
            <Canvas>

            </Canvas>

        </div>
        <div className="work-content">
            <div className="sm:py-10 py-5 sm-px-5 px-2.5">
             {workExperiences.map(({id,name , icon ,  pos , duration ,title , animation })=>(
                <div key={id} className="work-content_container group">
                    <div className="flex flex-col h-full justify-start items-center py-2">
                        <div className="work-content_logo">
                             <img src={icon} alt="logo" className="w-full h-full"></img>
                        </div>
                        <div className="work-content_bar" />

                    </div>
                    <div className="sm:p-5 px-2.5 py-5 text-white-800">
                          <p className="font-bold text-white"> {name}</p>
                          <p className="text-sm mb-5 ">{pos}</p>
                          <p className="group-hover:text-white transition ease-in-out duration-500 ">{title}</p>
                    </div>

                </div>
             ))}
            </div>
             
        </div>

      </div>
    </section>
  );
};

export default Experience;
