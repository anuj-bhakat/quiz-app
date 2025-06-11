import React from 'react';

function TermsOfService() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 py-12 px-4">
      <div className="bg-white shadow-xl rounded-xl p-8 max-w-3xl w-full">
        <h1 className="text-3xl font-semibold text-center text-gray-900 mb-6">Terms of Service</h1>

        <p className="text-lg text-gray-700 mb-4">
          Welcome to **QuizFlare**! By accessing or using this website, you agree to comply with and be bound by the following terms and conditions of use:
        </p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">1. Acceptance of Terms</h2>
          <p className="text-gray-700">
            By accessing and using **QuizFlare**, you agree to these Terms of Service. If you do not agree, please refrain from using our website.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">2. Privacy Policy</h2>
          <p className="text-gray-700">
            We value your privacy. Please refer to our <a href="/privacy-policy" className="text-indigo-600 hover:underline">Privacy Policy</a> for information on how we collect, use, and protect your personal data.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">3. Use of QuizFlare</h2>
          <p className="text-gray-700">
            You are granted a non-exclusive, non-transferable license to use **QuizFlare** for personal, non-commercial purposes. You agree not to misuse or abuse the platform in any way, including but not limited to:
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Posting false, misleading, or harmful content.</li>
            <li>Interfering with the security or performance of the platform.</li>
            <li>Engaging in any activity that violates the rights of others.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">4. User Content</h2>
          <p className="text-gray-700">
            You are responsible for any content that you submit or share on **QuizFlare**, including quiz results, answers, and any other personal data. By submitting content, you grant us a license to use, display, and distribute that content as necessary for the operation of the service.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">5. Limitation of Liability</h2>
          <p className="text-gray-700">
            **QuizFlare** will not be held liable for any direct, indirect, incidental, special, or consequential damages resulting from your use or inability to use the platform. We do not guarantee the accuracy or availability of the content on the platform.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">6. Modifications to Terms</h2>
          <p className="text-gray-700">
            We may update or modify these Terms of Service at any time. Any changes will be posted on this page with an updated effective date.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">7. Contact Information</h2>
          <p className="text-gray-700">
            If you have any questions or concerns about these Terms of Service, please contact us at <a href="mailto:support@quizflare.com" className="text-indigo-600 hover:underline">support@quizflare.com</a>.
          </p>
        </section>

        <div className="mt-6 text-center">
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

export default TermsOfService;