import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} QuizFlare. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="/privacy-policy" className="hover:text-gray-400 text-sm">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="hover:text-gray-400 text-sm">
            Terms of Service
          </a>
          <a href="/contact" className="hover:text-gray-400 text-sm">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;