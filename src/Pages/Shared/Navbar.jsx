import React, { use } from "react";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router";
import "./Navbar.css";
import { AuthContext } from "../../Context/AuthContext";
import { auth } from "../../firebase/firebase.init";
import userimg from "../../assets/user.png";
import { ToastContainer } from "react-toastify";
import { Avatar } from "flowbite-react";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);

  const handleSignOut = () => {
    signOutUser(auth)
      .then(() => console.log("user signed out"))
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allArtifacts">All Artifacts</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/addArtifacts">Add Artifacts</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
      <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
            <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <a className="flex justify-center items-center text-xl">
              <img src={logo} alt="logo" className="w-[80px] hidden md:block" />
              <p className="hidden md:block font-bold text-2xl">
                Artifact<span className="text-primary">Atlas</span>
              </p>
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end">
            <div>
              <div className="dropdown mr-2">
                <div tabIndex={0} role="button" className="btn m-1">
                  Theme
                  <svg
                    width="12px"
                    height="12px"
                    className="inline-block h-2 w-2 fill-current opacity-60"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 2048 2048"
                  >
                    <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content bg-base-300 rounded-box z-1 w-52 p-2 shadow-2xl"
                  onChange={(e) => {
                    const theme = e.target.value;
                    document.documentElement.setAttribute("data-theme", theme);
                    localStorage.setItem("theme", theme);
                  }}
                >
                  <li>
                    <input
                      type="radio"
                      name="theme-dropdown"
                      className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                      aria-label="Default"
                      value="default"
                    />
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="theme-dropdown"
                      className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                      aria-label="light"
                      value="light"
                    />
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="theme-dropdown"
                      className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                      aria-label="dark"
                      value="dark"
                    />
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="theme-dropdown"
                      className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                      aria-label="synthwave"
                      value="synthwave"
                    />
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="theme-dropdown"
                      className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                      aria-label="Cyberpunk"
                      value="cyberpunk"
                    />
                  </li>
                  <li>
                    <input
                      type="radio"
                      name="theme-dropdown"
                      className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                      aria-label="forest"
                      value="forest"
                    />
                  </li>
                </ul>
              </div>
            </div>
            {user ? (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                >
                  <Avatar
                    img={user.photoURL || userimg}
                    rounded
                    bordered
                    color="success"
                  />
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-20 mt-3 w-60 p-3 shadow-lg"
                >
                  <li className="mb-2 flex items-center gap-3 border-b pb-2">
                    <div className="avatar">
                      <div className="w-8 rounded-full">
                        <img
                          src={user.photoURL || userimg}
                          alt={user.displayName || user.email}
                        />
                      </div>
                    </div>
                    <span className="font-semibold">
                      {user.displayName || user.email}
                    </span>
                  </li>
                  <li>
                    <Link
                      to="/myArtifacts"
                      className="flex items-center gap-2 hover:bg-primary hover:text-white rounded px-2 py-1 transition"
                    >
                      <span className="material-icons text-base">
                        My Posted Artifacts
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/likedArtifacts"
                      className="flex items-center gap-2 hover:bg-primary hover:text-white rounded px-2 py-1 transition"
                    >
                      <span className="material-icons text-base">
                        Liked Artifacts
                      </span>
                    </Link>
                  </li>
                  <li>
                    <button
                      className="btn btn-error btn-sm mt-2 w-full"
                      onClick={handleSignOut}
                    >
                      <span className="material-icons text-base mr-1">
                        Logout
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link className="btn btn-primary btn-sm" to="/auth/register">
                  Register
                </Link>
                <Link className="btn btn-outline btn-sm" to="/auth/signIn">
                  Login
                </Link>
              </div>
            )}
          </div>
          </div>
        </div>
  );
};

export default Navbar;
