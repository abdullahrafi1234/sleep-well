import { Helmet } from "react-helmet-async";
import { FaFacebook, FaTwitter, FaGithub, FaInstagram, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-8 mx-auto my-36">
            <Helmet>
                <title>SleepWell | Contact</title>
            </Helmet>


            <div className="lg:w-1/2 pt-16 p-8">
                <div className="text-center lg:text-left space-y-8">
                    <h1 className="text-5xl font-bold">CONTACT US</h1>
                    <p className="flex gap-2 items-center"> <FaPhone></FaPhone> (+88) 01722438145</p>


                    <div className="space-y-2">

                        <p className="flex gap-2 items-center"> <FaLocationDot></FaLocationDot> 15/17 Tikkapara</p>
                        <p className="pl-8">Mohammadpur,</p>
                        <p className="pl-8">Dhaka, Bangladesh</p>
                    </div>

                    <p>
                        <div className="flex gap-8 text-center lg:p-0 pl-20 pt-8">
                            <a href="https://www.facebook.com/rafis.bird.house"><FaFacebook className="text-3xl text-blue-700"></FaFacebook></a>
                            <a href="https://twitter.com/rafibhuiyan1234"><FaTwitter className="text-3xl text-sky-400"></FaTwitter></a>
                            <a href="https://github.com/abdullahrafi1234"><FaGithub className="text-3xl"></FaGithub></a>
                            <a href="https://www.instagram.com/abdullah.rafiii/"><FaInstagram className="text-3xl text-red-400"></FaInstagram></a>
                        </div>
                    </p>
                </div>
            </div>

            <div className="lg:max-w-lg lg:w-1/2 p-8">
                <form className="card-body rounded-lg">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg">Your Name</span>
                        </label>
                        <input type="text"
                            name="name"
                            placeholder="Your Name"
                            className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg">Your Email</span>
                        </label>
                        <input type="email"
                            name="email"
                            placeholder="Email Address"
                            className="input input-bordered" required />
                    </div>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text text-lg">Your Message</span>
                        </div>
                        <textarea className="textarea textarea-bordered h-24" placeholder=""></textarea>
                        <div className="label">

                        </div>
                    </label>

                    <div className="form-control mt-6">
                        <button className="btn bg-sky-500 text-white">Submit Inquiry</button>
                    </div>
                </form>

            </div>

        </div>
    );
};

export default Contact;