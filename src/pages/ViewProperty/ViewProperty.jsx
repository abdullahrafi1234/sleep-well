
import { useLoaderData, useParams } from "react-router-dom";


const ViewProperty = () => {
    const propertys = useLoaderData()
    const { id } = useParams()
    const idInt = parseInt(id)
    const property = propertys.find( property => property.id === idInt)
    console.log(property)

    const { estate_title, segment_name , long_description, image, location, facilities, status, price
    } = property

    return (
        <div>
            <div className="mt-12 mb-16">
            <div className="hero-content flex-col lg:flex-row">
                <div className="bg-[#1313130D lg:p-8 rounded-lg">
                    <img width={'500px'} src={image} className=" rounded-lg shadow-2xl" />
                </div>

                <div className="w-2/3  lg:pl-20 text-start">
                    <h1 className="text-4xl font-bold">{estate_title}</h1>
                    <p className="py-4 font-medium" >Location: {location}</p>
                    <p className="font-medium border-y border-gray-300 py-3">{segment_name}</p>

                    <p className="py-6 pb-12"> <span className="font-bold">Details : </span>{long_description}</p>

                    <p className="flex gap-5 items-center border-b pb-8"> <span className="font-bold">Facilities</span>
                        <p className="text-[#23BE0A] px-6 py-2 font-medium bg-[#23BE0A0D] rounded-xl">#{facilities
[0]}</p>
                        <p className="text-[#23BE0A] px-6 py-2 font-medium bg-[#23BE0A0D] rounded-xl">#{facilities
[1]}</p>

                    </p>

                    <p className="py-2">Status: <span className="font-bold">{status}</span></p>

                    <p className="pt-2 mb-8 text-xl">Price <span className="font-bold">{price}</span></p>


                    

                </div>
            </div>
        </div>
            
            
        </div>
    );
};

export default ViewProperty;