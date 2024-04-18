import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../providers/AuthProvider";


const UpdateProfile = () => {
    const { user, updateUserProfile } = useContext(AuthContext)
    console.log(updateUserProfile)

    const handleUpdateProfile = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        console.log(name, photo);

        updateUserProfile(name, photo)
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className="max-w-lg mx-auto my-36">
            <Helmet>
                <title>SleepWell | Update-Profile</title>
            </Helmet>


            <p className="text-center text-black font-bold text-3xl pb-4">Hi, <span className="text-red-500">{user.displayName || "Sir / Ma'am"}!</span></p>
            <p className="text-center font-medium pb-12">Update Your Profile</p>


            <p className="pl-44 mx-auto pb-4">
                <img className=" w-36 rounded-full" src={user.photoURL || 'user.png'} alt="" />
            </p>

            <div>
                <p className="text-center font-medium pb-12">{user.email}</p>
            </div>


            <form onSubmit={handleUpdateProfile} className="card-body border bg-gray-100 rounded-lg">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <input type="text"
                        name="name"
                        placeholder="Your Name"
                        className="input rounded-full input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text"
                        name="photo"
                        placeholder="Photo URL"
                        className="input rounded-full input-bordered" />
                </div>

                <div className="form-control mt-6">
                    <button className="btn rounded-full bg-black text-white">Save Changes</button>
                </div>
            </form>


        </div>
    );
};

export default UpdateProfile;