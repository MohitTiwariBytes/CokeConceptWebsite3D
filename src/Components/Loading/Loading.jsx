import "./Loading.css";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import logoWhite from "../../assets/cokeLogoWhite.png"

gsap.registerPlugin(ScrollTrigger);

function Loading() {
    const loadingInnerRef = useRef(null);
    const axosdRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Animation for letter spans
        const spans = axosdRef.current.querySelectorAll('span');
        gsap.fromTo(spans, {
            y: 26
        }, {
            y: 0,
            duration: 1.5,
            ease: "power3.inOut",
            stagger: 0.01
        });

        // Add load event listener to window
        const handleLoad = () => {
            setIsLoaded(true);
            gsap.to(loadingInnerRef.current, {
                width: "100%",
                ease: "power4.inOut",
                duration: 1,
                onComplete: () => {
                    // Optional: You might want to hide or remove the loading screen
                }
            });
        };

        // Add event listener
        window.addEventListener('load', handleLoad);

        // Cleanup event listener
        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    return (
        <div className="main-loading">
            <div className="loading">
                <div className="asd">
                    <div className="img">
                        <img height={"300px"} src={logoWhite} alt="" />
                    </div>
                    <div className="loadingOuter">
                        <div
                            ref={loadingInnerRef}
                            className="loadingInner"
                            style={{
                                width: isLoaded ? '0%' : '0%'
                            }}
                        >
                        </div>
                    </div>
                    <div className="msg">
                        <span ref={axosdRef} id="axosd">
                            <span>L</span>
                            <span>O</span>
                            <span>A</span>
                            <span>D</span>
                            <span>I</span>
                            <span>N</span>
                            <span>G</span>
                            <span>.</span>
                            <span>.</span>
                            <span>.</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Loading;