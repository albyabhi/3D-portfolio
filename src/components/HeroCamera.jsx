import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef, useEffect, useState } from "react";

const HeroCamera = ({ children, isMobile }) => {
  const groupRef = useRef();
  const [gyroRotation, setGyroRotation] = useState({ alpha: 0, beta: 0, gamma: 0 });

  useEffect(() => {
    if (isMobile && window.DeviceOrientationEvent) {
      const requestPermission = async () => {
        if (
          typeof DeviceMotionEvent.requestPermission === "function"
        ) {
          const permission = await DeviceMotionEvent.requestPermission();
          if (permission !== "granted") {
            console.warn("Gyroscope permission denied");
            return;
          }
        }
        
        const handleOrientation = (event) => {
          setGyroRotation({
            alpha: event.alpha || 0,
            beta: Math.max(-90, Math.min(90, event.beta || 0)), // Clamped for stability
            gamma: Math.max(-45, Math.min(45, event.gamma || 0)), // Clamped
          });
        };

        window.addEventListener("deviceorientation", handleOrientation);
      };

      requestPermission();

      return () => window.removeEventListener("deviceorientation", handleOrientation);
    }
  }, [isMobile]);

  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [0, 0, 30], 0.25, delta);

    if (groupRef.current) {
      if (isMobile) {
        const xRotation = (-gyroRotation.beta * Math.PI) / 180 / 5;
        const yRotation = (-gyroRotation.gamma * Math.PI) / 180 / 5;
        easing.dampE(groupRef.current.rotation, [xRotation, yRotation, 0], 0.25, delta);
      } else {
        easing.dampE(
          groupRef.current.rotation,
          [-state.pointer.y / 3, state.pointer.x / 5, 0],
          0.25,
          delta
        );
      }
    }
  });

  return <group ref={groupRef} scale={1.0}>{children}</group>;
};

export default HeroCamera;
