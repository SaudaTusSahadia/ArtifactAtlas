import React, { use } from "react";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router";
import "./Navbar.css";
import { AuthContext } from "../../Context/AuthContext";
import { auth } from "../../firebase/firebase.init";
import userimg from "../../assets/user.png";
import { ToastContainer } from "react-toastify";
import { Avatar, createTheme, ThemeProvider } from "flowbite-react";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);

  const navBarTheme = createTheme({
    root: {
      base: "flex items-center justify-center space-x-4 rounded",
      inner: "relative",
      bordered: "p-1 ring-2",
      rounded: "rounded-full",
      color: {
        dark: "ring-gray-800 dark:ring-gray-800",
        failure: "ring-red-500 dark:ring-red-700",
        gray: "ring-gray-500 dark:ring-gray-400",
        info: "ring-cyan-400 dark:ring-cyan-800",
        light: "ring-gray-300 dark:ring-gray-500",
        purple: "ring-purple-500 dark:ring-purple-600",
        success: "ring-green-500 dark:ring-green-500",
        warning: "ring-yellow-300 dark:ring-yellow-500",
        pink: "ring-pink-500 dark:ring-pink-500",
      },
      img: {
        base: "rounded",
        off: "relative overflow-hidden bg-gray-100 dark:bg-gray-600",
        on: "",
        placeholder: "absolute -bottom-1 h-auto w-auto text-gray-400",
      },
      size: {
        xs: "h-6 w-6",
        sm: "h-8 w-8",
        md: "h-10 w-10",
        lg: "h-20 w-20",
        xl: "h-36 w-36",
      },
      stacked: "ring-2 ring-gray-300 dark:ring-gray-500",
      statusPosition: {
        "bottom-left": "-bottom-1 -left-1",
        "bottom-center": "-bottom-1",
        "bottom-right": "-bottom-1 -right-1",
        "top-left": "-left-1 -top-1",
        "top-center": "-top-1",
        "top-right": "-right-1 -top-1",
        "center-right": "-right-1",
        center: "",
        "center-left": "-left-1",
      },
      status: {
        away: "bg-yellow-400",
        base: "absolute h-3.5 w-3.5 rounded-full border-2 border-white dark:border-gray-800",
        busy: "bg-red-400",
        offline: "bg-gray-400",
        online: "bg-green-400",
      },
      initials: {
        text: "font-medium text-gray-600 dark:text-gray-300",
        base: "relative inline-flex items-center justify-center overflow-hidden bg-gray-100 dark:bg-gray-600",
      },
    },
    group: {
      base: "flex -space-x-4",
    },
    groupCounter: {
      base: "relative flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 text-xs font-medium text-white ring-2 ring-gray-300 hover:bg-gray-600 dark:ring-gray-500",
    },
  });

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
    <ThemeProvider theme={navBarTheme}>
      <div className="navbar bg-base-100 shadow-sm">
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
          <a className="btn btn-ghost text-xl">
            <img src={logo} alt="logo" className="w-[80px]" />
            <p className="hidden md:block">
              Artifact<span className="text-primary">Atlas</span>
            </p>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <div>
            <div className="dropdown">
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
    </ThemeProvider>
  );
};

export default Navbar;
