import React, { use, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import SocialLogin from '../Shared/SocialLogin';
import { FaEnvelope, FaLock, FaSignInAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { AuthContext } from '../../Context/AuthContext';
import { toast, ToastContainer } from 'react-toastify';
import animation from '../../assets/login.json';
import Lottie from 'lottie-react';
import { Link } from 'react-router';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { LockIcon, Mail } from 'lucide-react';
import { BsPass } from 'react-icons/bs';

const SignIn = () => {
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const { signInUser, GoogleSignIn } = use(AuthContext)
    const location = useLocation();
    const navigate = useNavigate()
    // const from = location.state || "/"
    console.log(location.state);

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then(result => {
                console.log(result);
                toast.success("You logged in successfully!", {
                    position: "top-right",
                    autoClose: 4000,
                    theme: "colored",
                });
                navigate(`${location.state ? location.state : "/"}`);
            })
            .catch((error) => {
                console.log(error);
                setError(error.code);
                toast.error('You are not registered yet. Please register first to access!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    // transition: Bounce,
                });
            })
    }

    const handleGoogleSignIn = () => {
        GoogleSignIn()
            .then(() => {
                navigate(`${location.state ? location.state : "/"}`);
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className="min-h-screen flex items-center justify-center  px-4 py-12">
            <title>Login | ArtifactAtlas</title>
            <ToastContainer />
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className=" shadow-2xl rounded-3xl border border-blue-200 w-full max-w-5xl flex flex-col md:flex-row overflow-hidden"
            >
                {/* Animation Section */}
                <div className="md:w-1/2  flex items-center justify-center p-8">
                    <Lottie animationData={animation} loop={true} className="w-full max-w-xs md:max-w-md" />
                </div>

                {/* Form Section */}
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                    <h1 className="text-3xl font-extrabold text-center text-primary mb-2">Welcome Back!</h1>
                    <p className="text-center text-base text-gray-500 mb-6">Login to your ArtifactAtlas account</p>

                    <form onSubmit={handleSignIn} className="space-y-5">
                        <div>
                            <label className="text-sm font-semibold text-gray-500 flex gap-2"><Mail size={20} className='text-primary' /> Email Address</label>
                            <div className="relative mt-1">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400">
                                    <FaEnvelope />
                                </span>
                                <input
                                    type="email"
                                    name="email"
                                    className="input input-bordered w-full pl-10"
                                    placeholder="example@gmail.com"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="text-sm font-semibold text-gray-500 flex gap-2"><LockIcon size={20} className='text-primary'></LockIcon> Password</label>
                            <div className="relative mt-1">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400">
                                    <FaLock />
                                </span>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    className="input input-bordered w-full pl-10 pr-10"
                                    placeholder="••••••••"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute top-1/2 right-3 -translate-y-1/2 bg-gray-100 p-1.5 rounded-full text-lg text-gray-600 hover:bg-gray-200 transition"
                                    tabIndex={-1}
                                >
                                    {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                                </button>
                            </div>
                        </div>

                        <div className="text-right">
                            <Link to="/auth/forgetPassword" className="text-sm text-blue-600 hover:underline">
                                Forgot password?
                            </Link>
                        </div>

                        {error && <p className="text-sm text-red-500">{error}</p>}

                        <button
                            type="submit"
                            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2"
                        >
                            <FaSignInAlt className="inline" /> Login
                        </button>
                    </form>

                    <div className="divider my-6">or</div>

                    <div>
                        {/* Google */}
                        <button onClick={handleGoogleSignIn} className="btn w-full bg-white text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>
                    </div>

                    <p className="text-center text-sm text-gray-600 mt-6">
                        Don't have an account?{" "}
                        <Link to="/auth/register" className="text-blue-500 hover:underline font-semibold">
                            Register
                        </Link>
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default SignIn;