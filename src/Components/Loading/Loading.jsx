import "./Loading.css";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import logoWhite from "../../assets/cokeLogoWhite.png"
import { useModelStore } from "../store";

gsap.registerPlugin(ScrollTrigger);

function Loading() {
    const loadingInnerRef = useRef(null);
    const loadingProgress = useModelStore((state) => state.loadingProgress);


    useEffect(() => {
        gsap.fromTo("#axosd span", {
            top: "26px"
        }, {
            top: "0px",
            duration: 1.5,
            ease: "power3.inOut",
            stagger: 0.01
        });

        // Check if document is already fully loaded
        if (document.readyState === "complete" && loadingProgress === 100) {
            gsap.to(".loadingInner", {
                width: "100%",
                ease: "power4.inOut",
                duration: 1,
            });
        } else {
            window.addEventListener("load", () => {
                gsap.to(".loadingInner", {
                    width: "100%",
                    ease: "power4.inOut",
                    duration: 1,
                    onComplete: () => {
                        gsap.fromTo("#axosd span", {
                            top: "0px"
                        }, {
                            top: "-100px",
                            duration: 1.5,
                            ease: "power3.inOut",
                            stagger: 0.01,
                            delay: 0.7,
                            onComplete: () => {
                                gsap.fromTo(".main-loading", {
                                    top: "0",
                                }, {
                                    top: "-100%",
                                    ease: "power3.inOut",
                                    duration: 1,
                                })
                            }
                        });
                    }
                });
            });
        }

    }, []);

    return (
        <div className="main-loading">
            <div className="loading">

                <div className="bottom-load">
                    <div className="daisdaf">
                        <span>{loadingProgress.toFixed(2)}%</span>
                    </div>
                </div>
                <div className="asd">
                    <div className="img">
                        <img height={"300px"} src={logoWhite} alt="" />
                    </div>
                    <div className="loadingOuter">
                        <div
                            ref={loadingInnerRef}
                            className="loadingInner"
                        >
                        </div>
                    </div>
                    <div className="msg">
                        <span id="axosd">
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