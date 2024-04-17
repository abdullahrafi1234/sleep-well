import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";



const Navbar = () => {

    const { logOut, user } = useContext(AuthContext)

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navLinks = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/update-profile'}>Update Profile</NavLink></li>
        <li><NavLink to={'/contact-us'}>Contact Us</NavLink></li>
        <li><NavLink to={'/register'}>Register</NavLink></li>
    </>

    return (
        <div className="navbar rounded-b-lg bg-emerald-300 text-black py-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <div className="flex items-center gap-0 ml-4">
                    <p><img className="lg:w-16" src="logos.png" alt="" /></p>
                    <a className="btn btn-ghost text-3xl text-white">SleepWell</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className="flex gap-3 items-center">

                            <button data-tip={user.displayName} className=" text-white border-none tooltip tooltip-bottom w-12"><img className="rounded-full" src={user.photoURL} /></button>

                            <button onClick={handleSignOut} data-tip={user.displayName} className="btn rounded-xl bg-orange-500 text-white border-none">Sign Out</button>
                        </div> :
                        <div className="">
                            <Link className="btn rounded-xl bg-orange-500 text-white border-none" to={'/login'}>Login</Link>
                        </div>

                }
            </div>
            {/* <div className="navbar-end">
                <Link className="btn rounded-xl bg-orange-500 text-white" to={'/login'}>Log in</Link>
            </div> */}
        </div>
    );
};

export default Navbar;