import "./Loading.css";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import logoWhite from "../../assets/cokeLogoWhite.png"

gsap.registerPlugin(ScrollTrigger);

function Loading() {
    const loadingInnerRef = useRef(null);

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
        if (document.readyState === "complete") {
            gsap.to(".loadingInner", {
                width: "100%",
                ease: "power4.inOut",
                duration: 1
            });
        } else {
            // If not fully loaded, wait for the 'load' event
            window.addEventListener("load", () => {
                gsap.to(".loadingInner", {
                    width: "100%",
                    ease: "power4.inOut",
                    duration: 1
                });
            });
        }

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