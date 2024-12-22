import "./SecondSection.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import banner1 from "../../../assets/banner1.webp";
import banner2 from "../../../assets/banner2.webp";
import banner3 from "../../../assets/banner3.webp";
import banner4 from "../../../assets/banner4.webp";
import banner5 from "../../../assets/banner5.webp";

gsap.registerPlugin(ScrollTrigger);

const SecondSection = () => {
    const wrapperRef = useRef(null);

    useEffect(() => {
        // Text animation
        const spans = document.querySelectorAll('#coca-cola-asdadsd span');
        gsap.fromTo(spans,
            {
                color: "#aaadb4"
            },
            {
                color: "#000000",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: ".text-adoa",
                    start: "top center",
                    end: "bottom 95%",
                    scrub: true,
                }
            }
        );



    }, []);

    useEffect(() => {
        if (!wrapperRef.current) return;

        // Ensure ScrollTrigger is registered
        gsap.registerPlugin(ScrollTrigger);

        // Scroll-based animation
        gsap.fromTo(
            ".image1",
            { marginRight: "0px" },
            {
                marginRight: "-2600px",
                ease: "power2", // Keeps the animation linear with scroll
                duration: 10,
                scrollTrigger: {
                    trigger: ".main-second-section", // Use the actual element
                    start: "top 80%",
                    scrub: true, // Sync animation progress with scroll
                },
            }
        );
    }, []);

    return (
        <div className="main-second-section" ref={wrapperRef}>
            <div className="secondSection">
                <div className="text-adoa">
                    <div className="wrapper-admfa">
                        <span id="coca-cola-asdadsd">
                            <span style={{ overflow: "hidden" }}>We&apos;re</span>
                            <span style={{ overflow: "hidden" }}>The</span>
                            <span style={{ overflow: "hidden" }}>Coca-Cola</span>
                            <span style={{ overflow: "hidden" }}>Company,</span>
                            <span style={{ overflow: "hidden" }}>started</span>
                            <span style={{ overflow: "hidden" }}>in</span>
                            <span style={{ overflow: "hidden" }}>1886</span>
                            <span style={{ overflow: "hidden" }}>in</span>
                            <span style={{ overflow: "hidden" }}>Atlanta,</span>
                            <span style={{ overflow: "hidden" }}>Georgia.</span>
                            <span style={{ overflow: "hidden" }}>Known</span>
                            <span style={{ overflow: "hidden" }}>for</span>
                            <span style={{ overflow: "hidden" }}>our</span>
                            <span style={{ overflow: "hidden" }}>iconic</span>
                            <span style={{ overflow: "hidden" }}>Coca-Cola,</span>
                            <span style={{ overflow: "hidden" }}>we</span>
                            <span style={{ overflow: "hidden" }}>now</span>
                            <span style={{ overflow: "hidden" }}>offer</span>
                            <span style={{ overflow: "hidden" }}>a</span>
                            <span style={{ overflow: "hidden" }}>wide</span>
                            <span style={{ overflow: "hidden" }}>range</span>
                            <span style={{ overflow: "hidden" }}>of</span>
                            <span style={{ overflow: "hidden" }}>drinks</span>
                            <span style={{ overflow: "hidden" }}>enjoyed</span>
                            <span style={{ overflow: "hidden" }}>in</span>
                            <span style={{ overflow: "hidden" }}>over</span>
                            <span style={{ overflow: "hidden" }}>200</span>
                            <span style={{ overflow: "hidden" }}>countries.</span>
                            <span style={{ overflow: "hidden" }}>We&apos;re</span>
                            <span style={{ overflow: "hidden" }}>committed</span>
                            <span style={{ overflow: "hidden" }}>to</span>
                            <span style={{ overflow: "hidden" }}>refreshing</span>
                            <span style={{ overflow: "hidden" }}>the</span>
                            <span style={{ overflow: "hidden" }}>world</span>
                            <span style={{ overflow: "hidden" }}>and</span>
                            <span style={{ overflow: "hidden" }}>making</span>
                            <span style={{ overflow: "hidden" }}>a</span>
                            <span style={{ overflow: "hidden" }}>difference</span>
                            <span style={{ overflow: "hidden" }}>through</span>
                            <span style={{ overflow: "hidden" }}>sustainability</span>
                            <span style={{ overflow: "hidden" }}>and</span>
                            <span style={{ overflow: "hidden" }}>care</span>
                            <span style={{ overflow: "hidden" }}>for</span>
                            <span style={{ overflow: "hidden" }}>the</span>
                            <span style={{ overflow: "hidden" }}>planet.</span>
                        </span>
                    </div>
                </div>
                <div className="imagesRight">
                    <div className="wrapper-hoas">
                        <div className="image1"><img src={banner1} alt="" /></div>
                        <div className="image"><img src={banner2} alt="" /></div>
                        <div className="image"><img src={banner3} alt="" /></div>
                        <div className="image"><img src={banner4} alt="" /></div>
                        <div className="image"><img src={banner5} alt="" /></div>
                        <div className="image"><img src={banner1} alt="" /></div>
                        <div className="image"><img src={banner2} alt="" /></div>
                        <div className="image"><img src={banner3} alt="" /></div>
                        <div className="image"><img src={banner4} alt="" /></div>
                        <div className="image"><img src={banner5} alt="" /></div>
                        <div className="image"><img src={banner1} alt="" /></div>
                        <div className="image"><img src={banner2} alt="" /></div>
                        <div className="image"><img src={banner3} alt="" /></div>
                        <div className="image"><img src={banner4} alt="" /></div>
                        <div className="image"><img src={banner5} alt="" /></div>
                        <div className="image1"><img src={banner1} alt="" /></div>
                        <div className="image"><img src={banner2} alt="" /></div>
                        <div className="image"><img src={banner3} alt="" /></div>
                        <div className="image"><img src={banner4} alt="" /></div>
                        <div className="image"><img src={banner5} alt="" /></div>
                        <div className="image"><img src={banner1} alt="" /></div>
                        <div className="image"><img src={banner2} alt="" /></div>
                        <div className="image"><img src={banner3} alt="" /></div>
                        <div className="image"><img src={banner4} alt="" /></div>
                        <div className="image"><img src={banner5} alt="" /></div>
                        <div className="image"><img src={banner1} alt="" /></div>
                        <div className="image"><img src={banner2} alt="" /></div>
                        <div className="image"><img src={banner3} alt="" /></div>
                        <div className="image"><img src={banner4} alt="" /></div>
                        <div className="image"><img src={banner5} alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SecondSection;