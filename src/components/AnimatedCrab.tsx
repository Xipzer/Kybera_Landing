/**
 * Code by ~Xipzer
 */

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

function CrabModel() {
  const groupRef = useRef<THREE.Group>(null)
  const leftClawRef = useRef<THREE.Group>(null)
  const rightClawRef = useRef<THREE.Group>(null)
  const leftEyeRef = useRef<THREE.Group>(null)
  const rightEyeRef = useRef<THREE.Group>(null)
  const legRefs = useRef<THREE.Group[]>([])

  const bodyMat = useMemo(() => new THREE.MeshStandardMaterial({
    color: new THREE.Color('#e63946'),
    roughness: 0.4,
    metalness: 0.2,
  }), [])

  const darkMat = useMemo(() => new THREE.MeshStandardMaterial({
    color: new THREE.Color('#991b1b'),
    roughness: 0.5,
    metalness: 0.1,
  }), [])

  const eyeWhiteMat = useMemo(() => new THREE.MeshStandardMaterial({
    color: new THREE.Color('#0a0f1a'),
    roughness: 0.2,
    metalness: 0.0,
  }), [])

  const eyeGlowMat = useMemo(() => new THREE.MeshStandardMaterial({
    color: new THREE.Color('#00e5cc'),
    emissive: new THREE.Color('#00e5cc'),
    emissiveIntensity: 2,
    roughness: 0.1,
    metalness: 0.5,
  }), [])

  useFrame((state) => {
    const t = state.clock.elapsedTime

    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.5) * 0.1
      groupRef.current.position.y = Math.sin(t * 0.8) * 0.02
    }

    if (leftClawRef.current) {
      leftClawRef.current.rotation.z = Math.sin(t * 1.5) * 0.15 + 0.3
    }
    if (rightClawRef.current) {
      rightClawRef.current.rotation.z = -Math.sin(t * 1.5 + 0.5) * 0.15 - 0.3
    }

    if (leftEyeRef.current) {
      leftEyeRef.current.position.y = 0.55 + Math.sin(t * 2) * 0.02
    }
    if (rightEyeRef.current) {
      rightEyeRef.current.position.y = 0.55 + Math.sin(t * 2 + 0.3) * 0.02
    }

    legRefs.current.forEach((leg, i) => {
      if (leg) {
        const offset = i * 0.4
        leg.rotation.x = Math.sin(t * 2 + offset) * 0.15
      }
    })
  })

  const setLegRef = (index: number) => (el: THREE.Group | null) => {
    if (el) legRefs.current[index] = el
  }

  return (
    <group ref={groupRef} scale={1.2}>
      <mesh material={bodyMat} castShadow>
        <sphereGeometry args={[0.5, 32, 32]} />
        <mesh scale={[1, 0.5, 0.85]}>
          <sphereGeometry args={[0.5, 32, 32]} />
        </mesh>
      </mesh>

      <mesh material={bodyMat} position={[0, 0.05, 0]} scale={[1, 0.45, 0.8]}>
        <sphereGeometry args={[0.52, 32, 32]} />
      </mesh>

      <mesh material={darkMat} position={[0, -0.15, 0]} scale={[0.85, 0.25, 0.7]}>
        <sphereGeometry args={[0.48, 32, 32]} />
      </mesh>

      <group ref={leftEyeRef} position={[-0.2, 0.55, 0.25]}>
        <mesh material={bodyMat} position={[0, -0.1, 0]}>
          <cylinderGeometry args={[0.04, 0.05, 0.2, 8]} />
        </mesh>
        <mesh material={eyeWhiteMat}>
          <sphereGeometry args={[0.08, 16, 16]} />
        </mesh>
        <mesh material={eyeGlowMat} position={[0, 0, 0.06]}>
          <sphereGeometry args={[0.04, 16, 16]} />
        </mesh>
      </group>

      <group ref={rightEyeRef} position={[0.2, 0.55, 0.25]}>
        <mesh material={bodyMat} position={[0, -0.1, 0]}>
          <cylinderGeometry args={[0.04, 0.05, 0.2, 8]} />
        </mesh>
        <mesh material={eyeWhiteMat}>
          <sphereGeometry args={[0.08, 16, 16]} />
        </mesh>
        <mesh material={eyeGlowMat} position={[0, 0, 0.06]}>
          <sphereGeometry args={[0.04, 16, 16]} />
        </mesh>
      </group>

      <group ref={leftClawRef} position={[-0.55, 0.1, 0.15]}>
        <mesh material={bodyMat} rotation={[0, 0, 0.5]}>
          <capsuleGeometry args={[0.06, 0.3, 8, 8]} />
        </mesh>
        <mesh material={bodyMat} position={[-0.3, 0.15, 0]}>
          <capsuleGeometry args={[0.07, 0.2, 8, 8]} />
        </mesh>
        <mesh material={darkMat} position={[-0.3, -0.02, 0]} rotation={[0, 0, -0.3]}>
          <capsuleGeometry args={[0.05, 0.18, 8, 8]} />
        </mesh>
      </group>

      <group ref={rightClawRef} position={[0.55, 0.1, 0.15]}>
        <mesh material={bodyMat} rotation={[0, 0, -0.5]}>
          <capsuleGeometry args={[0.06, 0.3, 8, 8]} />
        </mesh>
        <mesh material={bodyMat} position={[0.3, 0.15, 0]}>
          <capsuleGeometry args={[0.07, 0.2, 8, 8]} />
        </mesh>
        <mesh material={darkMat} position={[0.3, -0.02, 0]} rotation={[0, 0, 0.3]}>
          <capsuleGeometry args={[0.05, 0.18, 8, 8]} />
        </mesh>
      </group>

      {[-1, 1].map((side) =>
        [0, 1, 2].map((i) => (
          <group
            key={`leg-${side}-${i}`}
            ref={setLegRef(side === -1 ? i : i + 3)}
            position={[side * 0.4, -0.15, -0.1 + i * 0.2]}
            rotation={[0, 0, side * 0.8]}
          >
            <mesh material={bodyMat}>
              <capsuleGeometry args={[0.03, 0.2, 6, 6]} />
            </mesh>
            <mesh material={darkMat} position={[side * 0.12, -0.15, 0]} rotation={[0, 0, side * -0.5]}>
              <capsuleGeometry args={[0.025, 0.15, 6, 6]} />
            </mesh>
          </group>
        ))
      )}
    </group>
  )
}

export default function AnimatedCrab() {
  return (
    <div style={{ width: '100%', height: '100%', minHeight: 200 }}>
      <Canvas
        camera={{ position: [0, 0.5, 2.5], fov: 40 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[3, 5, 2]} intensity={1.2} color="#ffcccc" />
        <directionalLight position={[-2, 3, 4]} intensity={0.6} color="#ff4d4d" />
        <pointLight position={[0, 1, 2]} intensity={0.8} color="#00e5cc" distance={5} />

        <Float
          speed={2}
          rotationIntensity={0.3}
          floatIntensity={0.5}
          floatingRange={[-0.05, 0.05]}
        >
          <CrabModel />
        </Float>
      </Canvas>
    </div>
  )
}
