import { Canvas } from "@react-three/fiber";
import Player from "./components/Player";
import { PointerLockControls, KeyboardControls, Sky } from "@react-three/drei";
import Map from "./components/Map";
import { Physics } from "@react-three/rapier";
import Lights from "./components/Lights";

export default function Experience() {
  return (
    <>
      <KeyboardControls
        map={[
          { name: "forward", keys: ["ArrowUp", "w", "W"] },
          { name: "backward", keys: ["ArrowDown", "s", "S"] },
          { name: "left", keys: ["ArrowLeft", "a", "A"] },
          { name: "right", keys: ["ArrowRight", "d", "D"] },
          { name: "jump", keys: ["Space"] },
        ]}
      >
        <Canvas shadows camera={{ fov: 45 }}>
          <Sky sunPosition={[100, 20, 100]} />
          <Lights />

          <Physics gravity={[0, -30, 0]}>
            <Map />
            <Player />
          </Physics>
          <PointerLockControls />
        </Canvas>
      </KeyboardControls>
    </>
  );
}
