import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { FloatingCube } from './FloatingCube';
import { FloatingSphere } from './FloatingSphere';

export function Scene3D() {
  return (
    <Canvas className="w-full h-full">
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={1} />
      
      <FloatingCube />
      <FloatingSphere />
    </Canvas>
  );
}