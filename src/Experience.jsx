import { Canvas } from "@react-three/fiber";
import { PointerLockControls, KeyboardControls, Sky } from "@react-three/drei";
import Ecctrl, { EcctrlJoystick } from "ecctrl";
import Map from "./components/Map";
import { Physics } from "@react-three/rapier";
import Lights from "./components/Lights";

export default function Experience() {
  const keyboardMap = [
    { name: "forward", keys: ["ArrowUp", "w", "W"] },
    { name: "backward", keys: ["ArrowDown", "s", "S"] },
    { name: "leftward", keys: ["ArrowLeft", "a", "A"] },
    { name: "rightward", keys: ["ArrowRight", "d", "D"] },
    { name: "jump", keys: ["Space"] },
    { name: "run", keys: ["Shift"] },
  ];

  return (
    <>
      <Canvas shadows camera={{ fov: 45 }}>
        <Sky sunPosition={[100, 20, 100]} />
        <Lights />

        <Physics gravity={[0, -30, 0]}>
          <Map />
          <KeyboardControls map={keyboardMap}>
            <Ecctrl
              camInitDis={-0.01} // camera intial position
              camMinDis={-0.01} // camera zoom in closest position
              camFollowMult={100} // give any big number here, so the camera follows the character instantly
              turnVelMultiplier={1} // Turning speed same as moving speed
              turnSpeed={100} // give it big turning speed to prevent turning wait time
              mode="CameraBasedMovement" // character's rotation will follow camera's rotation in this mode
            >
              <mesh />
            </Ecctrl>
          </KeyboardControls>
        </Physics>
        <PointerLockControls />
      </Canvas>
    </>
  );
}
