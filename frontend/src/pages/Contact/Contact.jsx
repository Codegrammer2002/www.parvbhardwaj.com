import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="min-h-screen bg-black text-white pt-24 px-6">
      <h2 className="text-indigo-400 text-3xl font-bold mb-8 text-center">Want to hire or get in touch? Contact Me</h2>
      <p className="text-gray-300 text-center max-w-2xl mx-auto mb-6">
        If you're looking for an intern or full-time employee, email me or connect on LinkedIn — or use the form below!
      </p>

      {/* Social Links */}
      <div className="flex justify-center space-x-8 mb-10">
        <a href="https://www.linkedin.com/in/parv-bhardwaj/" target="_blank" className="text-blue-400 hover:underline">LinkedIn</a>
        <a href="https://github.com/Codegrammer2002" target="_blank" className="text-gray-300 hover:underline">GitHub</a>
        <a href="mailto:bhardwajparv2015@gmail.com" className="text-indigo-400 hover:underline">Email</a>
      </div>

      {/* Success message if redirected */}
      {window.location.href.includes("success=true") && (
        <div className="bg-emerald-600 text-white text-center py-3 px-6 mb-6 rounded-lg max-w-xl mx-auto shadow">
          ✅ Message sent successfully!
        </div>
      )}

      {/* Real HTML form to FormSubmit */}
      <form
        action="https://formsubmit.co/bhardwajparv2015@gmail.com"
        method="POST"
        className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg space-y-6"
      >
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="http://www.parvbhardwaj.com/contact?success=true " />

        <div>
          <label className="block text-sm font-semibold mb-1">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            className="w-full px-4 py-3 bg-gray-900 rounded border border-gray-600 focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Email</label>
          <input
            type="email"
            name="email"
            placeholder="abc@example.com"
            required
            className="w-full px-4 py-3 bg-gray-900 rounded border border-gray-600 focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Subject</label>
          <input
            type="text"
            name="subject"
            placeholder="Your subject"
            required
            className="w-full px-4 py-3 bg-gray-900 rounded border border-gray-600 focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Message</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Your message..."
            required
            className="w-full px-4 py-3 bg-gray-900 rounded border border-gray-600 focus:outline-none focus:border-indigo-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white font-bold py-3 rounded hover:bg-indigo-600 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
