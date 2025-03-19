import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef, useEffect, useState } from "react";

const HeroCamera = ({ children, isMobile }) => {
  const groupRef = useRef();
  const [gyroRotation, setGyroRotation] = useState({ alpha: 0, beta: 0, gamma: 0 });

  // Handle gyroscope movement
  useEffect(() => {
    if (isMobile && window.DeviceOrientationEvent) {
      const handleOrientation = (event) => {
        setGyroRotation({
          alpha: event.alpha || 0,
          beta: event.beta || 0, 
          gamma: event.gamma || 0, 
        });
      };

      window.addEventListener("deviceorientation", handleOrientation);
      return () => window.removeEventListener("deviceorientation", handleOrientation);
    }
  }, [isMobile]);

  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [0, 0, 30], 0.25, delta);

    if (isMobile) {
      // Convert gyroscope values to suitable rotation angles
      const xRotation = -gyroRotation.beta * (Math.PI / 180) / 5; // Front-to-back tilt
      const yRotation = -gyroRotation.gamma * (Math.PI / 180) / 5; // Left-to-right tilt

      easing.dampE(groupRef.current.rotation, [xRotation, yRotation, 0], 0.25, delta);
    } else {
      easing.dampE(
        groupRef.current.rotation,
        [-state.pointer.y / 3, state.pointer.x / 5, 0],
        0.25,
        delta
      );
    }
  });

  return <group ref={groupRef} scale={1.0}>{children}</group>;
};

export default HeroCamera;
