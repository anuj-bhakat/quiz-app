import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} QuizFlare. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <Link to="/privacy-policy" className="hover:text-gray-400 text-sm">
            Privacy Policy
          </Link>
          <Link to="/terms-of-service" className="hover:text-gray-400 text-sm">
            Terms of Service
          </Link>
          <Link to="/contact" className="hover:text-gray-400 text-sm">
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
