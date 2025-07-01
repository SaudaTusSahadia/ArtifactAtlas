import React from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router';
import {
  FaTwitter,
  FaYoutube,
  FaFacebook,
  FaLinkedin,
  FaGithub
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-content py-10 px-4">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
        
        {/* Logo + Info */}
        <div>
          <img className="w-[100px]" src={logo} alt="ArtifactAtlas Logo" />
          <p className="font-bold mt-2">
            ArtifactAtlas Ltd.
            <br />
            Providing reliable information since 1992
          </p>
          <p className="mt-2">© {new Date().getFullYear()} - All rights reserved</p>
        </div>

        {/* Navigation Links */}
        <div>
          <nav className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
            <Link to="/about" className="link link-hover">About Us</Link>
            <Link to="/contact" className="link link-hover">Contact Us</Link>
            <Link to="/privacy" className="link link-hover">Privacy Policy</Link>
            <Link to="/terms" className="link link-hover">Terms of Service</Link>
            <Link to="/profile" className="link link-hover">Your Profile</Link>
            <Link to="/faq" className="link link-hover">FAQ</Link>
          </nav>
        </div>

        {/* Social Icons */}
        <div className="flex items-start lg:justify-end gap-6 text-xl">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter className="hover:text-accent transition duration-300" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaYoutube className="hover:text-accent transition duration-300" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook className="hover:text-accent transition duration-300" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="hover:text-accent transition duration-300" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="hover:text-accent transition duration-300" />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
