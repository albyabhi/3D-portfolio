import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const AvatarModel = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/model2.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    
    if (actions) {
      Object.values(actions).forEach((action) => action.play());
    }
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature">
          <skinnedMesh
            name="avaturn_body"
            geometry={nodes?.avaturn_body?.geometry}
            material={materials?.avaturn_body_material}
            skeleton={nodes?.avaturn_body?.skeleton}
          />
          <skinnedMesh
            name="avaturn_glasses_0"
            geometry={nodes?.avaturn_glasses_0?.geometry}
            material={materials?.avaturn_glasses_0_material}
            skeleton={nodes?.avaturn_glasses_0?.skeleton}
          />
          <skinnedMesh
            name="avaturn_glasses_1"
            geometry={nodes?.avaturn_glasses_1?.geometry}
            material={materials?.avaturn_glasses_1_material}
            skeleton={nodes?.avaturn_glasses_1?.skeleton}
          />
          <skinnedMesh
            name="avaturn_hair_0"
            geometry={nodes?.avaturn_hair_0?.geometry}
            material={materials?.avaturn_hair_0_material}
            skeleton={nodes?.avaturn_hair_0?.skeleton}
          />
          <skinnedMesh
            name="avaturn_hair_1"
            geometry={nodes?.avaturn_hair_1?.geometry}
            material={materials?.avaturn_hair_1_material}
            skeleton={nodes?.avaturn_hair_1?.skeleton}
          />
          <skinnedMesh
            name="avaturn_look_0"
            geometry={nodes?.avaturn_look_0?.geometry}
            material={materials?.avaturn_look_0_material}
            skeleton={nodes?.avaturn_look_0?.skeleton}
          />
          <skinnedMesh
            name="avaturn_shoes_0"
            geometry={nodes?.avaturn_shoes_0?.geometry}
            material={materials?.avaturn_shoes_0_material}
            skeleton={nodes?.avaturn_shoes_0?.skeleton}
          />
          <primitive object={nodes?.Hips} />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/models/model2.glb");

export default AvatarModel;
