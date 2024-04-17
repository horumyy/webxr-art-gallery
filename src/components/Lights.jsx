import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightHelper } from "three";

export default function Lights() {
  const light = useRef();
  const sunLight = useRef();
  //   useHelper(light, SpotLightHelper, "teal");
  useHelper(sunLight, DirectionalLightHelper, "red");
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight
        position={[-25, 10, 1]}
        intensity={0.5}
        color={"#FFD700"}
        ref={sunLight}
        target-position={[0, -10, 0]}
        maxDistance={10}
      />

      <spotLight
        position={[0, 0.4, 0]}
        angle={0.3}
        intensity={1}
        penumbra={1}
        decay={0}
        ref={light}
      />
    </>
  );
}
