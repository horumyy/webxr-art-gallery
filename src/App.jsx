import { Canvas } from "@react-three/fiber";
import { Sky, PointerLockControls, KeyboardControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import Map from "./components/Map";
import Player from "./components/Player";
import Experience from "./Experience";

export default function App() {
  return <Experience />;
}
