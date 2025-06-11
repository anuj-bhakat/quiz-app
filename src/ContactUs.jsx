import React, { useState } from 'react';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');

    // Simulate a form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMessage('Thank you for reaching out! We will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 py-12 px-4">
      <div className="bg-white shadow-xl rounded-xl p-8 max-w-3xl w-full">
        <h1 className="text-3xl font-semibold text-center text-gray-900 mb-6">Contact Us</h1>

        <p className="text-lg text-gray-700 mb-4">
          Have a question or need support? We're here to help! Please fill out the form below, and we'll get back to you as soon as possible.
        </p>

        {successMessage && (
          <div className="bg-green-100 text-green-800 border-l-4 border-green-500 p-4 mb-6">
            <p>{successMessage}</p>
          </div>
        )}

        {errorMessage && (
          <div className="bg-red-100 text-red-800 border-l-4 border-red-500 p-4 mb-6">
            <p>{errorMessage}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-700 font-medium mb-2">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-700 font-medium mb-2">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-gray-700 font-medium mb-2">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your message"
              rows="6"
              required
            />
          </div>

          <button
            type="submit"
            className={`w-full bg-blue-500 text-white py-2 rounded-md ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'} transition-colors`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Send Message'}
          </button>
        </form>

        <div className="mt-8 text-center">
          <button
            onClick={() => window.history.back()}
            className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;