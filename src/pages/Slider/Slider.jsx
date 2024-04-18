import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import "swiper/css";
import "swiper/css/bundle";
import 'swiper/css/navigation';

const Slider = () => {
    return (
        <div className="lg:mt-16 mt-32">
            <Swiper

                navigation={true}
                modules={[Navigation, Autoplay, Pagination]}
                loop= {true}
                autoplay ={
                    {delay: 2000}
                }
                pagination={{
                    clickable: true,
                  }}


            >
                <SwiperSlide>
                    <div className="text-center justify-center">
                        <p className="pb-2 w-96  font-bold text-3xl text-center border-b border-green-400 mb-4">LUXURY HOTELS</p>
                        <img className="max-h-xl" src="hotel.jpg" alt="" />

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <p className=" pb-2 w-96  font-bold text-3xl text-center border-b border-green-400 mb-4">SUNBURST MOTELS</p>
                        <img className="max-h-xl" src="motel.jpg" alt="" />

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <p className="pb-2 w-96  font-bold text-3xl text-center border-b border-green-400 mb-4">BEAUTIFUL RESORTS</p>
                        <img src="resort.jpg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <p className="pb-2 w-96  font-bold text-3xl text-center border-b border-green-400 mb-4">NEWLANDS LODGES</p>
                        <img className=" " src="lodges.jpg" alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>






        </div>
    );
};

export default Slider;