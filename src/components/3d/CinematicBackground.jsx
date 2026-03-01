import React, { useRef, useMemo, Suspense, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float, Stars, MeshDistortMaterial, Trail, Line } from '@react-three/drei';
import * as THREE from 'three';

function ArcReactor({ position }) {
  const meshRef = useRef();
  useFrame((state) => {
    meshRef.current.rotation.z = state.clock.getElapsedTime() * 0.5;
  });

  return (
    <Float speed={4} rotationIntensity={1} floatIntensity={2}>
      <group position={position}>
        <mesh ref={meshRef}>
          <torusGeometry args={[0.8, 0.05, 16, 100]} />
          <meshBasicMaterial color="#00D2FF" transparent opacity={0.8} />
        </mesh>
        <mesh>
          <sphereGeometry args={[0.3, 32, 32]} />
          <MeshDistortMaterial color="#00D2FF" speed={5} distort={0.5} radius={1} />
        </mesh>
        <pointLight color="#00D2FF" intensity={2} distance={10} />
      </group>
    </Float>
  );
}

function LightningBolt({ position }) {
  const [points, setPoints] = useState([]);
  
  useFrame((state) => {
    if (state.clock.elapsedTime % 0.5 < 0.1) {
      const p = [];
      let current = new THREE.Vector3(0, 0, 0);
      for(let i=0; i<5; i++) {
        p.push(current.clone());
        current.add(new THREE.Vector3((Math.random()-0.5)*2, -1, (Math.random()-0.5)*2));
      }
      setPoints(p);
    } else {
      setPoints([]);
    }
  });

  if (points.length === 0) return null;

  return (
    <group position={position}>
      <Line points={points} color="#00D2FF" lineWidth={2} transparent opacity={0.8} />
      <pointLight position={points[0]} color="#00D2FF" intensity={5} distance={5} />
    </group>
  );
}

function Mjolnir() {
  const ref = useRef();
  useFrame((state) => {
    ref.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    ref.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.5;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={ref} position={[-5, 3, -3]}>
        {/* Head */}
        <mesh>
          <boxGeometry args={[1, 0.6, 0.6]} />
          <meshStandardMaterial color="#A0A0A0" metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Handle */}
        <mesh position={[0, -0.6, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 1]} />
          <meshStandardMaterial color="#4A2B11" />
        </mesh>
        <pointLight color="#00D2FF" intensity={1} distance={5} />
      </group>
    </Float>
  );
}

function TechGrid() {
  return (
    <gridHelper args={[20, 20, "#E23636", "#333333"]} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, -2]} opacity={0.1} transparent />
  );
}

function AvengersEnvironment() {
  const group = useRef();
  useFrame((state) => {
    group.current.rotation.y = state.mouse.x * 0.2;
    group.current.rotation.x = -state.mouse.y * 0.2;
  });

  return (
    <group ref={group}>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <ArcReactor position={[4, 2, -2]} />
      <ArcReactor position={[-4, -2, -4]} />
      <Mjolnir />
      <LightningBolt position={[3, 5, -5]} />
      <LightningBolt position={[-6, 4, -3]} />
      <TechGrid />
      
      {/* Floating Nano-Hexagons */}
      {Array.from({ length: 15 }).map((_, i) => (
        <Float key={i} speed={2}>
          <mesh position={[(Math.random() - 0.5) * 15, (Math.random() - 0.5) * 15, -5]}>
            <circleGeometry args={[0.2, 6]} />
            <meshBasicMaterial color="#FDB813" transparent opacity={0.3} wireframe />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

const CinematicBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] bg-[#0F0F0F]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(226,54,54,0.15)_0%,transparent_70%)]"></div>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          <AvengersEnvironment />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default CinematicBackground;
