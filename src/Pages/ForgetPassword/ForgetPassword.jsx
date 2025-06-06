import React, { useContext } from 'react';
import animation from '../../assets/forgetPass.json';
import { AuthContext } from '../../Context/AuthContext';
import { useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router';

const ForgetPassword = () => {

    const { resetUserPassword } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleForgetPassword = (e) => {
        e.preventDefault();
        const email = e.target.email.value;

        resetUserPassword(email)
            .then(() => {
                navigate('/auth/signIn');
                window.open('https://mail.google.com', '_blank');
                toast.success('Password reset email sent successfully! Please check your inbox.', {
                    position: "top-right",
                    autoClose: 4000,
                    theme: "colored",
                });
            })
            .catch((error)=>{
                toast.error(error.message || 'Failed to send password reset email. Please try again.', {
                    position: "top-right",
                    autoClose: 4000,
                    theme: "colored",
                })
            })
        }
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <title>Forget Password | ArtifactAtlas</title>
            <ToastContainer />
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="card bg-base w-full max-w-md shadow-2xl rounded-3xl p-8 border border-blue-300"
            >
                <div className="flex justify-center mb-4">
                    <Lottie animationData={animation} loop={true} className="h-40" />
                </div>

                <h1 className="text-2xl font-extrabold text-center text-secondary mb-2">Forgot Your Password?</h1>
                <p className="text-center text-base text-gray-500 mb-6">
                    Enter your email below and we’ll send you a link to reset your password.
                </p>

                <form onSubmit={handleForgetPassword} className="space-y-5">
                    <div className="flex items-center border border-gray-300 rounded-lg p-3 shadow-sm focus-within:ring-2 ring-blue-400 transition-all">
                        <MdEmail className="text-pretty text-2xl" />
                        <input
                            type="email"
                            name="email"
                            className="w-full ml-3 bg-transparent outline-none text-gray-700 placeholder-gray-400"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 bg-accent hover:bg-primary text-white font-semibold rounded-lg shadow-md transition-all flex items-center justify-center gap-2"
                    >
                        <span className="material-icons text-base">Send Reset Link</span>
                    </button>
                </form>

                <p className="text-center mt-4 text-gray-500 text-sm">
                    You’ll be redirected to Gmail after reset.
                </p>
                <div className="text-center mt-6">
                    <Link to="/auth/signIn" className="text-blue-600 hover:underline font-semibold text-sm">
                        Back to Login
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default ForgetPassword;