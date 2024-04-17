import { useLoaderData } from "react-router-dom";
// import Estate from "../Estate/Estate";
import Slider from "../Slider/Slider";
import Estate from "../Estate/Estate";


const Home = () => {
    const estate = useLoaderData()
    console.log(estate)
    return (
        <div className="mt-12 max-w-6xl mx-auto">
            <Slider></Slider>
            <div>
                {
                    estate.map(estate => <Estate key={estate.id} estate ={estate}></Estate>)
                }
            </div>
            {/* <Estate></Estate> */}

        </div>
    );
};

export default Home;