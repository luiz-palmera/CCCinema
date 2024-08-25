import React, { useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export const Book = ({position = [-1, 0, 2.5], fov = 40}) => {
    return(
        <Canvas 
            camera ={{position, fov}}
            style={{width: '700px', height: '400px', marginTop: '70px'}}
        >
            <BookModel />
            <OrbitControls />
        </Canvas>
    )
};

const BookModel = () => {
    const [isRotating, setIsRotating] = useState(true);

    useFrame(({ clock }) => {
        if (isRotating) {
            const elapsedTime = clock.getElapsedTime();
            meshRef.current.rotation.y = elapsedTime;
        }
    });

    const meshRef = React.useRef(null);

    const handlePointerDown = () => setIsRotating(false);
    const handlePointerUp = () => setIsRotating(true);

    return(
        <mesh
            ref={meshRef}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
        >
            <boxGeometry args ={[0.9, 0.9, 0.9]}/>
            <meshNormalMaterial />
        </mesh>
    )
};