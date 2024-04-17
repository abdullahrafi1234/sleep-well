import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaFacebook, FaGithub} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";


const Login = () => {

    const { signInUser, googleLogin, githubLogin, facebookLogin, setUser } = useContext(AuthContext)
    const [error, setError] = useState('')
    console.log(setError);

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value;
        console.log(email, password)

        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                alert('Sign in Successfully')
            })
            .catch(error => {
                console.log(error)
                alert('Please Write Your Correct Gmail or Password!!!')
            })

    }



    const handleGoogleLogin =() => {
        googleLogin()
        .then(result =>{
            setUser(result.user)
            alert('Sign in Successfully')
        })
        .catch(error => {
            console.log(error)
        })
    }

    const handleGithubLogin = () => {
        githubLogin()
            .then(result => {
                setUser(result.user)
                alert('Sign in Successfully')
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const handleFacebookLogin = () => {
        facebookLogin()
            .then(result => {
                setUser(result.user)
                alert('Sign in Successfully')
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (

        <div className="max-w-lg mx-auto my-36">

            <p className="text-center font-medium text-2xl pb-12">Login to SleepWell</p>
            <form onSubmit={handleLogin} className="card-body border bg-gray-100 rounded-lg">
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
                <p className="text-red-600 text-center">{error}</p>

                <div className="form-control mt-6">
                    <button className="btn bg-orange-500 text-white">Login</button>
                </div>
            </form>
            <p className="text-center">or</p>
            
            <p className=" rounded-lg text-center border p-4 my-4 space-x-6" >
                <button onClick={handleGoogleLogin}><FcGoogle className="text-3xl"></FcGoogle></button>

                <button onClick={handleGithubLogin}><FaGithub className="text-3xl "></FaGithub></button>

                <button onClick={handleFacebookLogin}><FaFacebook className="text-3xl text-blue-700 "></FaFacebook></button>
            </p>

            <p className="bg-blue-100 rounded-lg text-center border p-4 my-4">New in SleepWell?  <Link className="text-green-500 font-semibold" to={'/register'}>Create Your Account</Link></p>



        </div>



    );
};

export default Login;