import { useLoaderData } from "react-router-dom";
// import Estate from "../Estate/Estate";
import Slider from "../Slider/Slider";
import Estate from "../Estate/Estate";
import { Helmet } from "react-helmet-async";
import 'animate.css';

const Home = () => {
    const estate = useLoaderData()
    console.log(estate)
    return (
        <div className="mt-12 max-w-6xl mx-auto">
            <Helmet>
                <title>SleepWell | Home</title>
            </Helmet>
            <Slider></Slider>

            <div>
                <p className="animate__animated animate__flipInX  text-4xl  text-center font-bold mt-32">Featured Properties</p>
                <p className="border-b border-green-300 p-2 text-center w-96 mx-auto"></p>
            </div>
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