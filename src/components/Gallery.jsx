/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useGLTF } from "@react-three/drei";
import { CuboidCollider, RigidBody } from "@react-three/rapier";

export function Gallery(props) {
  const { nodes, materials } = useGLTF("/MuseoMaqueta.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials.Tuberia_Entrada}
        position={[-24, 0, 0]}
        scale={0.05}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["3D_lamp_13010_1"].geometry}
        material={materials.Luz}
      />
      <group rotation={[0, 0, Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["3D_lamp_13010"].geometry}
          material={materials.Metal_Entrada}
        />
      </group>
      <group rotation={[Math.PI, 1.571, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["3D_lamp_13016"].geometry}
          material={materials.Metal_Entrada}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes["3D_lamp_13016_1"].geometry}
          material={materials.Luz}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lamp_13001.geometry}
        material={materials["Material.002"]}
        position={[-15.312, 6.005, -1.646]}
        rotation={[Math.PI, 1.571, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.Alfombra_Entrada}
        position={[-21, 0.005, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane006.geometry}
        material={nodes.Plane006.material}
        position={[-9.367, 2, 0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials.Alfombra_Entrada}
        position={[-8.008, 0.005, 4.3]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003_1.geometry}
        material={materials.Ventana_Vidrio}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003_2.geometry}
        material={materials.Ventana_Vidrio2}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials.Metal_Entrada}
        position={[-24, 0, 0]}
        scale={0.05}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials.Ventana_Vidrio}
        position={[-8.2, 0, 7.8]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane005.geometry}
        material={materials.Concreto_Entrada}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane004.geometry}
        material={materials.Concreto_Entrada}
        position={[-23.341, 2, 0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials.Concreto_Entrada}
        position={[-9, 5, 0]}
      />
      <RigidBody type="fixed" colliders="cuboid">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.CaveCrystal01.geometry}
          material={materials.CaveCrystal}
          position={[-3.145, 1.981, 4.387]}
          rotation={[Math.PI / 2, 0, -1.396]}
          scale={0.05}
        />
      </RigidBody>
      {/* left stairs */}
      <RigidBody type="fixed" colliders={false}>
        <CuboidCollider
          args={[1, 0.2, 4.5]}
          position={[-15, 0.2, -4.1]}
          rotation={[0, 0, 10]}
        />
      </RigidBody>
      {/* Right stairs */}
      <RigidBody type="fixed" colliders={false}>
        <CuboidCollider
          args={[1, 0.2, 4.5]}
          position={[-3.5, 0.33, 4.1]}
          rotation={[0, 0, 10]}
        />
      </RigidBody>

      <RigidBody type="fixed" colliders="cuboid">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={materials.Marmol}
          position={[-8.2, 0, 7.8]}
        />
      </RigidBody>
      <RigidBody type="fixed" colliders="trimesh">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002.geometry}
          material={materials.Concreto_Entrada}
          position={[-23.341, 2, 0.005]}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane007.geometry}
          material={materials.PisoMadera_Interior}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_1.geometry}
          material={materials.Suelo_Entrada}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_2.geometry}
          material={materials.Pared_Entrada}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_1.geometry}
          material={materials.PisoMadera_Interior}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_2.geometry}
          material={materials.Pared_Interior}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_3.geometry}
          material={materials.Suelo_Entrada}
        />
      </RigidBody>
    </group>
  );
}

useGLTF.preload("/MuseoMaqueta.glb");
