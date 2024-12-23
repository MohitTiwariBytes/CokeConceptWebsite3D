import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useModelStore } from './store';

gsap.registerPlugin(ScrollTrigger);

function ModelViewer() {
    const mountRef = useRef(null);
    const modelRef = useRef(null);
    const outlineModelRef = useRef(null);
    const setLoadingProgress = useModelStore((state) => state.setLoadingProgress);
    const setIsModelLoaded = useModelStore((state) => state.setIsModelLoaded);

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

        const updateScale = () => {
            if (modelRef.current && outlineModelRef.current) {
                if (window.innerWidth <= 600) {
                    modelRef.current.scale.set(1.4, 1.4, 1.4);
                    outlineModelRef.current.scale.set(1.42, 1.42, 1.42);
                } else {
                    modelRef.current.scale.set(1.8, 1.8, 1.8);
                    outlineModelRef.current.scale.set(1.83, 1.83, 1.83);
                }
            }
        };

        let isModelFullyLoaded = false;

        loader.load(
            '../assets/realistic_3d_coca-cola_can.glb',
            (gltf) => {
                const model = gltf.scene;
                modelRef.current = model;

                const outlineModel = model.clone();
                outlineModelRef.current = outlineModel;

                updateScale();

                window.addEventListener('resize', updateScale);

                model.traverse((child) => {
                    if (child.isMesh) {
                        child.material.emissive = new THREE.Color(0x000000);
                        child.material.emissiveIntensity = 0;
                    }
                });

                outlineModel.traverse((child) => {
                    if (child.isMesh) {
                        child.material = new THREE.MeshBasicMaterial({
                            color: 0x000000,
                            side: THREE.BackSide,
                        });
                    }
                });

                model.rotation.z = 13;
                outlineModel.rotation.z = 13;

                scene.add(outlineModel);
                scene.add(model);

                gsap.set([model.position, outlineModel.position], { y: -15 });

                // Mark as fully loaded
                isModelFullyLoaded = true;
                setIsModelLoaded(true);



                // Start the animation when model is fully loaded and progress is 100%
                gsap.fromTo(
                    [modelRef.current.position, outlineModelRef.current.position],
                    { y: -15, rotateX: -23 },
                    {
                        y: 0,
                        rotate: 0,
                        duration: 1.5,
                        ease: 'power2.out',
                        delay: 4,
                        onComplete: () => {
                            gsap.fromTo("#adoad h1", {
                                filter: "blur(22px)"
                            }, {
                                filter: "blur(0px)",
                                ease: "power2.inOut",
                                duration: 0.7,
                                stagger: 0.02
                            })
                            gsap.fromTo("#asmai h1", {
                                top: "100px"
                            }, {
                                top: "0px",
                                ease: "power2.inOut",
                                duration: 1,
                                stagger: 0.01
                            })
                            gsap.fromTo("#idk span", {
                                top: "100px"
                            }, {
                                top: "0px",
                                ease: "power2.inOut",
                                duration: 1,
                                stagger: 0.01,
                                delay: 0.8
                            })
                            gsap.fromTo("#oaja h1", {
                                top: "100px"
                            }, {
                                top: "0px",
                                ease: "power2.inOut",
                                duration: 1,
                                stagger: 0.01,
                                delay: 0.8,
                                onComplete: () => {
                                    gsap.fromTo("#oaja h1", {
                                        top: "0px"
                                    }, {
                                        top: "800px",
                                        ease: "power2.inOut",
                                        duration: 1,
                                        stagger: 0.01,
                                        delay: 1.2,
                                        scrollTrigger: {
                                            trigger: ".main-first-section",
                                            start: "top top",
                                            scrub: true
                                        }
                                    })
                                }
                            })

                            gsap.fromTo(".btn", {
                                opacity: 0
                            }, {
                                opacity: 1,
                                ease: "power4.inOut",
                                duration: 1,
                                stagger: 0.01,
                                delay: 0.8
                            })

                            gsap.to([modelRef.current.position, outlineModelRef.current.position], {
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
            (xhr) => {
                const progress = (xhr.loaded / xhr.total) * 100;
                setLoadingProgress(Math.min(progress, 100));

                if (progress === 100 && isModelFullyLoaded) {
                    setIsModelLoaded(true);
                }
            },
            (error) => {
                console.error('Error loading model:', error);
            }
        );

        const handleMouseMove = (event) => {
            if (modelRef.current && outlineModelRef.current) {
                const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
                const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

                gsap.to([modelRef.current.rotation, outlineModelRef.current.rotation], {
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
            window.removeEventListener('resize', updateScale);
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
        };
    }, [setLoadingProgress, setIsModelLoaded]);

    return (
        <div
            ref={mountRef}
            className="kioskada"
            style={{
                position: 'absolute',
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