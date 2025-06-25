import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const ResumePage = () => {
  const [verified, setVerified] = useState(false);

  const handleCaptchaChange = (value) => {
    if (value) setVerified(true);
  };

const siteKey = process.env.REACT_APP_RECAPTCHA_SITE_KEY; 


  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-6">
      <h2 className="text-3xl font-bold text-yellow-400 mb-6">Resume Verification</h2>
      <p className="text-gray-300 mb-4 text-center max-w-md">
        Please verify you're human to access my resume.
      </p>

      <div className="mb-6">
        <ReCAPTCHA
          sitekey={siteKey}
          onChange={handleCaptchaChange}
        />
      </div>

      {verified ? (
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-md"
        >
          View Resume
        </a>
      ) : (
        <p className="text-sm text-gray-500">Complete the CAPTCHA to continue.</p>
      )}
    </div>
  );
};

export default ResumePage;
