import { Link } from "react-router-dom";


const Register = () => {

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value;
        console.log(email, password)
    }

    return (
        <div className="max-w-lg mx-auto my-36">

            <p className="text-center font-medium text-2xl pb-12">Create Your Account</p>
            <form onSubmit={handleRegister} className="card-body border bg-gray-100 rounded-lg">
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
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Password</span>
                    </label>
                    <input type="password"
                        name="password"
                        placeholder="Password"
                        className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-orange-500 text-white">Login</button>
                </div>
            </form>
            <p className="bg-blue-100 rounded-lg text-center border p-4 my-4">Already Have an Account? Please <Link className="text-orange-500 font-semibold" to={'/login'}>Login</Link></p>
        </div>

    );
};

export default Register;