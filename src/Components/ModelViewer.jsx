import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { gsap } from 'gsap';

function ModelViewer() {
    const mountRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 10;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0);
        mountRef.current.appendChild(renderer.domElement);

        const ambientLight = new THREE.AmbientLight(0xffffff, 6);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
        directionalLight.position.set(5, 10, 7.5);
        scene.add(directionalLight);

        const pointLight = new THREE.PointLight(0xffffff, 1, 50);
        pointLight.position.set(2, 5, 5);
        scene.add(pointLight);

        const loader = new GLTFLoader();
        let model, outlineModel;

        loader.load(
            '../assets/realistic_3d_coca-cola_can.glb',
            (gltf) => {
                model = gltf.scene;
                model.scale.set(1.8, 1.8, 1.8);

                model.traverse((child) => {
                    if (child.isMesh) {
                        child.material.emissive = new THREE.Color(0x000000);
                        child.material.emissiveIntensity = 0;
                    }
                });

                outlineModel = model.clone();
                outlineModel.traverse((child) => {
                    if (child.isMesh) {
                        child.material = new THREE.MeshBasicMaterial({
                            color: 0x000000, // Red color
                            side: THREE.BackSide,
                        });
                    }
                });
                outlineModel.scale.set(1.82, 1.82, 1.82);
                outlineModel.rotation.z = 13;

                scene.add(outlineModel);
                scene.add(model);

                model.rotation.z = 13;

                gsap.fromTo(
                    [model.position, outlineModel.position],
                    { y: -10, rotateX: -23 },
                    {
                        y: 0,
                        rotate: 0,
                        duration: 1.5,
                        ease: 'power2.out',
                        onComplete: () => {
                            gsap.to([model.position, outlineModel.position], {
                                y: 0.6,
                                duration: 2,
                                repeat: -1,
                                yoyo: true,
                                ease: 'sine.inOut',
                            });
                        },
                    }
                );
            },
            undefined,
            (error) => {
                console.error('Error loading model:', error);
            }
        );

        const handleMouseMove = (event) => {
            if (model) {
                const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
                const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

                gsap.to([model.rotation, outlineModel.rotation], {
                    x: mouseY * 0.3,
                    y: mouseX * 0.5,
                    duration: 0.5,
                    ease: 'power2.out',
                });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };
        animate();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <div
            ref={mountRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: 10,
                pointerEvents: 'auto',
            }}
        />
    );
}

export default ModelViewer;
