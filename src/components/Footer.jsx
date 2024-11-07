import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-indigo-950 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Address */}
          <div>
            <h3 className="font-bold text-2xl mb-2 text-white">Galaxy Eyewear</h3>
            {/* <img
              src="/path/to/your-logo.png"
              alt="Company Logo"
              className="w-32 mb-4"
            /> */}
            <p className="text-gray-400">opp. Noor stationary, near fatehwadi, Navrang Society, Fatehwadi, tower, Juhapura, Ahmedabad, Gujarat 380055</p>
            <p className="text-gray-400">Phone: +91 8735871937</p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-semibold text-lg">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaFacebook className="text-2xl" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaTwitter className="text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <p className="text-gray-400">Email: contact@company.com</p>
            <p className="text-gray-400">Support: support@company.com</p>
          </div>

          {/* Copyright */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-1 sm:text-center lg:text-left">
            <p className="text-gray-400">© 2024 Galaxy Eyewear. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
