import FirstSection from "./FirstSection/FirstSection";
import "./Home.css"
import Loading from "../../Components/Loading/Loading";
import ReactLenis from "lenis/react";
import SecondSection from "./SecondSection/SecondSection";
import ThirdSection from "./ThirdSection/ThirdSection";

function Home() {
    return (
        <ReactLenis root>
            <div className="main-home-page">
                <Loading></Loading>
                <FirstSection></FirstSection>
                <SecondSection></SecondSection>
                <ThirdSection></ThirdSection>
            </div>
        </ReactLenis>
    );
}

export default Home;
