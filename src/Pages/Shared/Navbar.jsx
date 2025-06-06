import React, { use } from 'react';
import logo from '../../assets/logo.png';
import { Link, NavLink } from 'react-router';
import './Navbar.css';
import { AuthContext } from '../../Context/AuthContext';
import { auth } from '../../firebase/firebase.init';

const Navbar = () => {

    const { user, signOutUser } = use(AuthContext);


    const handleSignOut = () => {
        signOutUser(auth)
            .then(() =>
                console.log('user signed out'))
            .catch(error => {
                console.log(error)
            })
    }

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/allArtifacts">All Artifacts</NavLink></li>
        {
            user && <>
            <li><NavLink to="/addArtifacts">Add Artifacts</NavLink></li>
            </>
        }
    </>

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"><img src={logo} alt="logo" className='w-[80px]' />Artifact<span className='text-primary'>Atlas</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
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
                                viewBox="0 0 2048 2048">
                                <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="dropdown-content bg-base-300 rounded-box z-1 w-52 p-2 shadow-2xl"
                            onChange={(e) => {
                                const theme = e.target.value;
                                document.documentElement.setAttribute('data-theme', theme);
                                localStorage.setItem('theme', theme);
                            }}
                        >
                            <li>
                                <input
                                    type="radio"
                                    name="theme-dropdown"
                                    className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                                    aria-label="Default"
                                    value="default" />
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    name="theme-dropdown"
                                    className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                                    aria-label="light"
                                    value="light" />
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    name="theme-dropdown"
                                    className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                                    aria-label="dark"
                                    value="dark" />
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    name="theme-dropdown"
                                    className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                                    aria-label="Retro"
                                    value="retro" />
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    name="theme-dropdown"
                                    className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                                    aria-label="synthwave"
                                    value="synthwave" />
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    name="theme-dropdown"
                                    className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                                    aria-label="Cyberpunk"
                                    value="cyberpunk" />
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    name="theme-dropdown"
                                    className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start"
                                    aria-label="forest"
                                    value="forest" />
                            </li>
                        </ul>
                    </div>
                </div>
                
                    {
                        user ? <button className='btn' onClick={handleSignOut}>Sign Out</button> :
                            <>
                                <Link className='btn' to="/auth/register">Register</Link>
                                <Link className='btn' to="/auth/signIn">SignIn</Link>
                            </>
                    }

                
            </div>
        </div>
    );
};

export default Navbar;