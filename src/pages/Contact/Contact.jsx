import { Helmet } from "react-helmet-async";

const Contact = () => {
    return (
        <div className="max-w-lg mx-auto my-36">
            <Helmet>
                <title>SleepWell | Contact</title>
            </Helmet>


            <p className="text-center font-medium text-2xl pb-12">Contact Us</p>
            <form className="card-body border bg-gray-100 rounded-lg">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <input type="text"
                        name="name"
                        placeholder="Your Name"
                        className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text"
                        name="photo"
                        placeholder="Photo URL"
                        className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <input type="email"
                        name="email"
                        placeholder="Email Address"
                        className="input input-bordered" required />
                </div>
                <label className="form-control">
                    <div className="label">
                        <span className="label-text">Comments</span>
                    </div>
                    <textarea className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                    <div className="label">
                        
                    </div>
                </label>

                <div className="form-control mt-6">
                    <button className="btn bg-sky-500 text-white">Submit Inquiry</button>
                </div>
            </form>


        </div>
    );
};

export default Contact;