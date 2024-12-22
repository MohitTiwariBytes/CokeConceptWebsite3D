import { useRef, useEffect } from 'react';
import gsap from "gsap";
import "./Button.css"

// eslint-disable-next-line react/prop-types
export default function Button({ text, onClick }) {
    const innerBoxRef = useRef(null);
    const outerBoxRef = useRef(null);

    useEffect(() => {
        const innerBox = innerBoxRef.current;
        const outerBox = outerBoxRef.current;

        // Set initial state
        gsap.set(innerBox, { top: '100%' });

        // Hover in animation
        const hoverIn = () => {
            gsap.to(innerBox, {
                top: '0%',
                duration: 0.5,
                ease: 'power4.inOut'
            });

            gsap.to(outerBox, {
                scale: 0.9,
                duration: 0.5,
                ease: 'power4.inOut'
            })
        };

        // Hover out animation
        const hoverOut = () => {
            gsap.to(innerBox, {
                top: '100%',
                duration: 0.5,
                ease: 'power4.inOut'
            });
            gsap.to(outerBox, {
                scale: 1,
                duration: 0.5,
                ease: 'power4.inOut'
            })
        };

        // Add event listeners
        const btnElement = innerBox.closest('.btn');
        btnElement.addEventListener('mouseenter', hoverIn);
        btnElement.addEventListener('mouseleave', hoverOut);

        // Cleanup event listeners
        return () => {
            btnElement.removeEventListener('mouseenter', hoverIn);
            btnElement.removeEventListener('mouseleave', hoverOut);
        };
    }, []);

    return (
        <div onClick={onClick} className="btn">
            <div ref={outerBoxRef} className="outerBox">
                <span>{text}</span>
            </div>
            <div ref={innerBoxRef} className="innerBox">
                <span>{text}</span>
            </div>
        </div>
    )
}