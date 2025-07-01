
const Contact = () => {
  return (
    <section className="min-h-screen bg-black text-white pt-24 px-6">
      <h2 className="text-yellow-400 text-3xl font-bold mb-8 text-center">Hire/Contact Me</h2>
      <p className="text-white-400 text-1xl font-bold mb-8 text-center">If you're looking for to hire me for an internship or a part/full-time role, you can email me by clicking the link below or connect with me on Linkedin or fill out the form! Whatever works the best for you</p> 
      {/* Social Links */}
      <div className="flex justify-center space-x-8 mb-10">
        <a href="https://www.linkedin.com/in/parv-bhardwaj/" target="_blank" className="text-blue-400 hover:underline">LinkedIn</a>
        <a href="https://github.com/Codegrammer2002" target="_blank" className="text-gray-300 hover:underline">GitHub</a>
        <a href="mailto:bhardwajparv2015@gmail.com" className="text-yellow-500 hover:underline">Email</a>
      </div>

      {/* Contact Form */}
    <form
        action="https://formsubmit.co/bhardwajparv2015@gmail.com"
        method="POST"
        className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg space-y-6"
      >
        <input type="hidden" name="_captcha" value="false" />
        <div>
          <label className="block text-sm font-semibold mb-1">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            className="w-full px-4 py-3 bg-gray-900 rounded border border-gray-600 focus:outline-none focus:border-yellow-500"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Email</label>
          <input
            type="email"
            name="email"
            placeholder="abc@example.com"
            required
            className="w-full px-4 py-3 bg-gray-900 rounded border border-gray-600 focus:outline-none focus:border-yellow-500"
          />
        </div>
         <div>
          <label className="block text-sm font-semibold mb-1">Subject</label>
          <input
            type="text"
            name="email"
            placeholder="Your subject"
            required
            className="w-full px-4 py-3 bg-gray-900 rounded border border-gray-600 focus:outline-none focus:border-yellow-500"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Message</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Your message..."
            required
            className="w-full px-4 py-3 bg-gray-900 rounded border border-gray-600 focus:outline-none focus:border-yellow-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-500 text-black font-bold py-3 rounded hover:bg-yellow-600 transition"
        >
          Send Message
        </button>
      </form>


   
    </section>
  );
};

export default Contact;
