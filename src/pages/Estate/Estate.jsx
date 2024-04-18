
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";


const Estate = ({ estate }) => {
    const { id, estate_title, segment_name, description, image, location } = estate
    // const [estateData , setEstateData] = useState()

    // useEffect(() => {
    //     fetch('data.json')
    //     .then(res => res.json())
    //     .then(data => setEstateData(data))
    // },[])

    return (
        <div>

            <div className="hero shadow-lg p-4 rounded-lg my-16 justify-start">
                <div className="hero-content p-4 gap-12 flex-col lg:flex-row justify-start">
                    <img src={image} className="lg:max-w-sm md:max-w-sm rounded-lg shadow-2xl justify-start" />
                    <div className="space-y-2 md:pl-8">
                        <h1 className="text-3xl font-medium ">{estate_title}</h1>
                        <p className="flex font-medium gap-2 items-center px-2">{location} <IoLocationOutline className="text-xl"></IoLocationOutline></p>
                        <p className="py-6">{description}</p>
                        <p className="border-b border-t border-gray-300 py-3 pl-8">{segment_name}</p>
                        <button className="btn btn-outline btn-accent">
                            <Link to={`/view-property/${id}`}>View Property</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Estate;