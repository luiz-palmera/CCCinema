import React, { useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import front from "../../assets/models/dvd001_cover_front.jpg";
import back from "../../assets/models/dvd001_cover_back.jpg";
import side from "../../assets/models/dvd001_cover_side.png";
import { TextureLoader } from "three";


export const Movie = ({position = [-1, 0, 2.5], fov = 40}) => {
    return(
        <Canvas 
            camera ={{position, fov}}
            style={{width: '700px', height: '400px', marginTop: '130px'}}
        >
            <MovieModel />
            <OrbitControls />
        </Canvas>
    )
};

const MovieModel = () => {
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

    const textures = [
        new TextureLoader().load(),
        new TextureLoader().load(side),
        new TextureLoader().load(),
        new TextureLoader().load(),
        new TextureLoader().load(front),
        new TextureLoader().load(back),
      ];

    return(
        <mesh
            ref={meshRef}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
        >
            <boxGeometry args ={[0.9, 1.2, 0.1]}/>
            {textures.map((texture, index) => (
            <meshBasicMaterial attach={`material-${index}`} map={texture} key={index} />
      ))}
        </mesh>
    )
};