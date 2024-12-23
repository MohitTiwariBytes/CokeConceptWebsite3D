import "./ThirdSection.css"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import brand1 from "../../../assets/Brands/1.webp"
import brand2 from "../../../assets/Brands/2.webp"
import brand3 from "../../../assets/Brands/3.svg"
import brand4 from "../../../assets/Brands/4.webp"
import brand5 from "../../../assets/Brands/5.webp"
import brand6 from "../../../assets/Brands/6.svg"
import brand7 from "../../../assets/Brands/7.svg"
import brand8 from "../../../assets/Brands/8.webp"
import brand9 from "../../../assets/Brands/9.svg"
import brand10 from "../../../assets/Brands/10.svg"
import brand11 from "../../../assets/Brands/11.svg"
import brand12 from "../../../assets/Brands/12.webp"
import brand13 from "../../../assets/Brands/13.svg"
import brand14 from "../../../assets/Brands/14.svg"
import brand15 from "../../../assets/Brands/15.svg"
import brand16 from "../../../assets/Brands/16.webp"
import { useEffect } from "react"

gsap.registerPlugin(ScrollTrigger)

export default function ThirdSection() {

    useEffect(() => {
        // Animation for line1
        const line1Animation = gsap.fromTo(
            ".line1 img",
            { left: "90%" },
            {
                left: "-110%",
                ease: "none",
                scrollTrigger: {
                    trigger: ".main-third-section",
                    start: "top top",
                    end: "+=200%", // Adjust based on your scroll requirements
                    scrub: true,
                },
            }
        );

        // Animation for line2
        const line2Animation = gsap.fromTo(
            ".line2 img",
            { left: "-90%" },
            {
                left: "110%",
                ease: "none",
                scrollTrigger: {
                    trigger: ".main-third-section",
                    start: "top top",
                    end: "+=200%",
                    scrub: true,
                },
            }
        );

        // Pin the section until both animations are complete
        ScrollTrigger.create({
            trigger: ".main-third-section",
            start: "top top",
            end: "+=200%", // Matches the longest animation
            pin: true,
            scrub: true, // Sync pinning with scroll
        });

        return () => {
            line1Animation.kill();
            line2Animation.kill();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [])

    return (
        <div className="main-third-section">
            <div className="brands">
                <div className="line1">
                    <img src={brand1} alt="" />
                    <img src={brand2} alt="" />
                    <img src={brand3} alt="" />
                    <img src={brand4} alt="" />
                    <img src={brand5} alt="" />
                    <img src={brand6} alt="" />
                    <img src={brand7} alt="" />
                    <img src={brand8} alt="" />
                    <img src={brand9} alt="" />
                    <img src={brand10} alt="" />
                    <img src={brand11} alt="" />
                    <img src={brand12} alt="" />
                    <img src={brand13} alt="" />
                    <img src={brand14} alt="" />
                    <img src={brand15} alt="" />
                    <img src={brand16} alt="" />
                </div>
                <div className="line2">
                    <img src={brand1} alt="" />
                    <img src={brand2} alt="" />
                    <img src={brand3} alt="" />
                    <img src={brand4} alt="" />
                    <img src={brand5} alt="" />
                    <img src={brand6} alt="" />
                    <img src={brand7} alt="" />
                    <img src={brand8} alt="" />
                    <img src={brand9} alt="" />
                    <img src={brand10} alt="" />
                    <img src={brand11} alt="" />
                    <img src={brand12} alt="" />
                    <img src={brand13} alt="" />
                    <img src={brand14} alt="" />
                    <img src={brand15} alt="" />
                    <img src={brand16} alt="" />
                </div>
            </div>
            <div className="thirdSection">
                <div className="asdiad">
                    <h1>Explore our brands.</h1>
                </div>
            </div>
        </div>
    )
}
