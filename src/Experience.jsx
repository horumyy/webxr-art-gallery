import { Canvas } from "@react-three/fiber";
import Player from "./components/Player";
import { PointerLockControls, KeyboardControls } from "@react-three/drei";
import Map from "./components/Map";
import { Physics } from "@react-three/rapier";

export default function Experience() {
  return (
    <>
      <KeyboardControls
        map={[
          { name: "forward", keys: ["ArrowUp", "KeyW"] },
          { name: "backward", keys: ["ArrowDown", "KeyS"] },
          { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
          { name: "rightward", keys: ["ArrowRight", "KeyD"] },
        ]}
      >
        <Canvas shadows camera={{ fov: 45, position: [0, 2, -1] }}>
          <ambientLight />
          <Physics debug gravity={[0, -30, 0]}>
            <Player />
            <Map />
          </Physics>
          <PointerLockControls />
        </Canvas>
      </KeyboardControls>
    </>
  );
}
