import React, { use } from 'react';
import { useLocation, useNavigate } from 'react-router';
import SocialLogin from '../Shared/SocialLogin';
import { FaEnvelope, FaLock, FaSignInAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { AuthContext } from '../../Context/AuthContext';

const SignIn = () => {
  const { signInUser } = use(AuthContext)
  const location = useLocation();
  const navigate = useNavigate()
  const from = location.state || "/"

  const handleSignIn = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then(result => {
        console.log(result);
        navigate(from)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col lg:flex-row gap-10 items-center justify-center w-full max-w-5xl p-5 md:p-10">
        <motion.div
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, type: "spring" }}
        >
        </motion.div>
        <motion.div
          className="card bg-base-100 shrink-0 shadow-2xl w-full max-w-md"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
        >
          <div className="card-body">
            <h1 className="text-3xl font-extrabold text-primary flex items-center gap-2 mb-4">
              <FaSignInAlt className="text-accent" /> Sign In
            </h1>
            <form onSubmit={handleSignIn} className="space-y-4">
              <div>
                <label className="label font-semibold flex items-center gap-2">
                  <FaEnvelope className="text-blue-600" /> Enter your email
                </label>
                <input
                  type="email"
                  name='email'
                  className="input input-bordered w-full"
                  placeholder="example@gmail.com"
                  required
                />
              </div>
              <div>
                <label className="label font-semibold flex items-center gap-2">
                  <FaLock className="text-purple-600" /> Enter your password
                </label>
                <input
                  type="password"
                  name='password'
                  className="input input-bordered w-full"
                  placeholder="............"
                  required
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 4px 24px #6366f1" }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="btn btn-primary btn-block mt-4 flex items-center gap-2 justify-center"
              >
                <FaSignInAlt /> Sign In
              </motion.button>
            </form>
            <div className='divider'>or</div>
            <SocialLogin from={from} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SignIn;