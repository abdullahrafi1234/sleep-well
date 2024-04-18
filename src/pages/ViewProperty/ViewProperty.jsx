
import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";


const ViewProperty = () => {
    const propertys = useLoaderData()
    const { id } = useParams()
    const idInt = parseInt(id)
    const property = propertys.find(property => property.id === idInt)
    console.log(property)

    const { estate_title, area, segment_name, long_description, image, location, facilities, status, price
    } = property

    return (
        <div>
            <Helmet>
                <title>SleepWell | ViewProperty</title>
            </Helmet>
            <div className="mt-12 mb-16 lg:p-0 p-8">
                <div className=" flex-col lg:flex-row">

                    <h1 className="text-4xl py-2 font-bold">{estate_title}</h1>
                    <p className="border-b border-green-300  w-[500px] "></p>

                    <div className="bg-[#1313130D mt-8  rounded-lg text-center">
                        <img src={image} className=" text-center w-full lg:h-[700px] md:h-[550-x] h-[350px] rounded-lg shadow-2xl" />
                    </div>

                    <div className="w-3/4 mt-16   text-start">

                        <h1 className="text-3xl font-bold">About Our Property</h1>
                        <p className="py-4 font-medium flex gap-2" > <span className="font-bold">Location: </span>{location} <IoLocationOutline className="text-xl"></IoLocationOutline> </p>
                        <p className="font-semibold border-y border-gray-300 py-3 pl-8">Category : {segment_name}</p>

                        <p className="py-6 pb-12"> <span className="font-bold">More About : </span>{long_description}</p>

                        <p className="flex gap-5 items-center border-b pb-8"> <span className="font-bold">Utilities</span>
                            <p className="text-[#23BE0A] px-6 py-2 font-medium bg-[#23BE0A0D] rounded-xl">#{facilities[0]}</p>
                            <p className="text-[#23BE0A] px-6 py-2 font-medium bg-[#23BE0A0D] rounded-xl">#{facilities[1]}</p>

                        </p>

                        <p className="py-2">Status: <span className="font-semibold">{status}</span></p>
                        <p className="py-2">Area: <span className="font-semibold">{area}</span></p>

                        <p className="pt-2 mb-8 text-xl">Price: <span className="font-bold">{price}</span></p>




                    </div>
                </div>
            </div>


        </div>
    );
};

export default ViewProperty;