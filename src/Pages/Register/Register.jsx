import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import SocialLogin from '../Shared/SocialLogin';
import { FaEnvelope, FaLock, FaUserPlus, FaRegEye, FaRegEyeSlash, FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router';
import animation from '../../assets/register.json';
import { Link } from 'react-router';
import Lottie from 'lottie-react';
import { toast, ToastContainer } from 'react-toastify';
import { CgPhotoscan } from 'react-icons/cg';

const Register = () => {

  const { createUser, updateUser, setUser } = useContext(AuthContext);
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleRegister = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    setPasswordError('');

    const checkPass1 = /(?=.*[A-Z])/;
    const checkPass2 = /(?=.*[a-z])/;

    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      return;
    } else if (!checkPass1.test(password)) {
      setPasswordError('Password must contain at least one uppercase letter');
      return;
    } else if (!checkPass2.test(password)) {
      setPasswordError('Password must contain at least one lowercase letter');
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            toast.success('Registered successfully!', {
              position: 'top-right',
              autoClose: 4000,
              theme: 'colored',
            });
            setTimeout(() => {
              navigate('/');
            }, 1000);
          })
          .catch((error) => {
            console.error(error);
            setUser(user);
          });
      })
      .catch((error) => {
        toast.error(error.message || 'Registration failed');
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <title>Register | ArtifactAtlas</title>
      <ToastContainer />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className=" shadow-2xl rounded-3xl border border-blue-300 w-full max-w-5xl flex flex-col md:flex-row overflow-hidden"
      >
        {/* Animation Section */}
        <div className="md:w-1/2 flex items-center justify-center p-8">
          <Lottie animationData={animation} loop={true} className="w-full max-w-xs md:max-w-md" />
        </div>

        {/* Form Section */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-extrabold text-center text-primary mb-2">Create Your Account</h1>
          <p className="text-center text-base text-gray-500 mb-6">Join ArtifactAtlas today</p>

          <form onSubmit={handleRegister} className="space-y-5">
            <div>
              <label className="text-sm font-semibold text-gray-500 flex gap-2 justify-start items-center"><FaUser />Full Name</label>
              <div className="relative mt-1">
                <input
                  name="name"
                  type="text"
                  className="input input-bordered w-full pl-10"
                  placeholder="John Doe"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-500 flex gap-2 justify-start items-center"><CgPhotoscan size={20} />Photo URL</label>
              <div className="relative mt-1">
                <input
                  name="photo"
                  type="text"
                  className="input input-bordered w-full pl-10"
                  placeholder="Photo URL"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-500 flex gap-2 justify-start items-center"><FaEnvelope />Email Address</label>
              <div className="relative mt-1">
                <input
                  name="email"
                  type="email"
                  className="input input-bordered w-full pl-10"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-500 flex gap-2 justify-start items-center"><FaLock />Password</label>
              <div className="relative mt-1">
                <input
                  name="password"
                  type={showPassword ? 'text' : 'password'}
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
              {passwordError && <p className="text-sm text-red-500 mt-1">{passwordError}</p>}
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2"
            >
              <FaUserPlus className="inline" /> Register
            </button>
          </form>

          <div className="divider my-6">or</div>

          <SocialLogin />
          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{' '}
            <Link to="/auth/signIn" className="text-blue-500 hover:underline font-semibold">
              Login here
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;