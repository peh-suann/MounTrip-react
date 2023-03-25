import React, { useState, useRef, useEffect, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import styles from './../styles/Achievement.module.css'
// import {} from './../../public/3D/MounTripElement_8'
import ONE from './../3D/MounTripElement'
import {} from './../'

function Model8(props) {
  const { nodes, materials } = useGLTF('./../3D/MounTripElement_8.glb')
  const group = useRef()
  const [clicked, click] = useState(false)
  // useFrame((clock) => {
  //   group.current.rotation.x = clock.getElapsedTime()
  // })
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1}>
        <mesh
          ref={group}
          geometry={nodes['3D_8_-_8'].geometry}
          material={materials.Wood}
          position={[-15.27, 7.5, -15]}
          material-color={'#6cba7c'}
          onClick={(e) => click(!clicked)}
        />
      </group>
    </group>
  )
}
export function Model7(props) {
  const { nodes, materials } = useGLTF('./../3D/MounTripElement_7.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1}>
        <mesh
          geometry={nodes['3D_7_-_7'].geometry}
          material={materials['Wood 1']}
          position={[-15.3, 7.5, -15]}
          material-color={'#6cba7c'}
        />
      </group>
    </group>
  )
}

export function Model6(props) {
  const { nodes, materials } = useGLTF('./../3D/MounTripElement_6.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1}>
        <mesh
          geometry={nodes['3D_6_-_6'].geometry}
          material={materials['Wood 1']}
          position={[-15.38, 7.5, -15]}
          material-color={'#6cba7c'}
        />
      </group>
    </group>
  )
}
export function Model5(props) {
  const { nodes, materials } = useGLTF('./../3D/MounTripElement_5.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1}>
        <mesh
          geometry={nodes['3D_5_-_5'].geometry}
          material={materials['Wood 1']}
          position={[-15.38, 7.5, -15]}
          material-color={'#6cba7c'}
        />
      </group>
    </group>
  )
}

export function Model4(props) {
  const { nodes, materials } = useGLTF('./../3D/MounTripElement_4.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0.01]} scale={1}>
        <mesh
          geometry={nodes['3D_4_-_4'].geometry}
          material={materials['Wood 1']}
          position={[-15.65, 7.5, -15]}
          material-color={'#6cba7c'}
        />
      </group>
    </group>
  )
}
export function Model3(props) {
  const { nodes, materials } = useGLTF('./../3D/MounTripElement_3.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1}>
        <mesh
          geometry={nodes['3D_3_-_3'].geometry}
          material={materials['Wood 1']}
          position={[-15.65, 7.5, -15]}
          material-color={'#6cba7c'}
        />
      </group>
    </group>
  )
}
export function Model2(props) {
  const { nodes, materials } = useGLTF('./../3D/MounTripElement_2.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1}>
        <mesh
          geometry={nodes['3D_2_-_2'].geometry}
          material={materials['Wood 1']}
          position={[-15.65, 7.5, -15]}
          material-color={'#6cba7c'}
        />
      </group>
    </group>
  )
}
export function Model1(props) {
  const { nodes, materials } = useGLTF('./../3D/MounTripElement.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1}>
        <mesh
          geometry={nodes['3D_1_-_1'].geometry}
          material={materials['Wood 1']}
          position={[-15.65, 7.5, -15]}
          material-color={'#6cba7c'}
        />
      </group>
    </group>
  )
}
export function Model0(props) {
  const { nodes, materials } = useGLTF('./../3D/MounTripElement_0.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1}>
        <mesh
          geometry={nodes['3D_0_-_0'].geometry}
          material={materials['Wood 1']}
          position={[-15.65, 7.5, -15]}
          material-color={'#6cba7c'}
        />
      </group>
    </group>
  )
}

export default function LaiAchievementCanvas(props) {
  const { total } = props
  // const total = getHistoryOrder()
  // console.log('canvas:', total)
  return (
    <>
      {/* <canvas className={styles.tree_animation}> */}
      <div className={styles.tree_animation}>
        {/* fov:field of view, my view port */}
        <Canvas camera={{ fov: 90, position: [15, 0, 45] }}>
          {/* suspense catch error用 */}
          <Suspense fallback={null}>
            <ambientLight />
            <directionalLight intensity={0.8} position={[-10, 10, 45]} />
            {total < 5000 ? <Model0 /> : null}
            {5001 < total && total < 10000 ? <Model1 /> : null}
            {10001 < total && total < 15000 ? <Model2 /> : null}
            {15001 < total && total < 20000 ? <Model3 /> : null}
            {20001 < total && total < 25000 ? <Model4 /> : null}
            {25001 < total && total < 35000 ? <Model5 /> : null}
            {35001 < total && total < 45000 ? <Model6 /> : null}
            {45001 < total && total < 55000 ? <Model7 /> : null}
            {55001 < total && total < 100000 ? <Model8 /> : null}

            {/* <Model8 /> */}
            {/* <Model7 /> */}

            <OrbitControls
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
            />
          </Suspense>
        </Canvas>
      </div>
      {/* </canvas> */}
    </>
  )
}
