import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

export function FloatingSphere() {
  const meshRef = useRef<Mesh>(null!);

  useFrame((state) => {
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.3;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshStandardMaterial color="#818CF8" metalness={0.8} roughness={0.2} />
    </mesh>
  );
}