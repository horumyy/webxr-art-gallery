/* eslint-disable no-unused-vars */
import { useRef } from "react";
import * as THREE from "three";

import { RigidBody, CapsuleCollider } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";
import { useKeyboardControls } from "@react-three/drei";

export default function Player() {
  const [subscribeKeys, getKeys] = useKeyboardControls();
  const bodyRef = useRef();

  const SPEED = 5;
  const direction = new THREE.Vector3();
  const frontVector = new THREE.Vector3();
  const sideVector = new THREE.Vector3();

  useFrame((state) => {
    const { forward, backward, left, right } = getKeys();
    const translation = bodyRef.current.translation();
    const velocity = bodyRef.current.linvel();

    // Update the camera position
    if (translation) {
      state.camera.position.set(translation.x, translation.y, translation.z);
    }

    // movement
    frontVector.set(0, 0, backward - forward);
    sideVector.set(left - right, 0, 0);
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(SPEED)
      .applyEuler(state.camera.rotation);
    bodyRef.current.setLinvel({
      x: direction.x,
      y: velocity.y,
      z: direction.z,
    });
  });
  return (
    <group>
      <RigidBody
        ref={bodyRef}
        restitution={0.2}
        friction={1}
        type="dynamic"
        colliders={false}
        mass={1}
        enabledRotations={[false, false, false]}
      >
        <CapsuleCollider args={[0.75, 0.5]} />
      </RigidBody>
    </group>
  );
}
