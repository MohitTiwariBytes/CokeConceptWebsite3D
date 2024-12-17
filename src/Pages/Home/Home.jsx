import FirstSection from "./FirstSection/FirstSection";
import "./Home.css"
import Loading from "../../Components/Loading/Loading";

function Home() {
    return (
        <div className="main-home-page">
            <Loading></Loading>
            <FirstSection></FirstSection>
        </div>
    );
}

export default Home;
