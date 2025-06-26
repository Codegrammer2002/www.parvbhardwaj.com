const Contact = () => {
  return (
    <section className="min-h-screen bg-black text-white pt-24 px-6">
      <h2 className="text-yellow-400 text-3xl font-bold mb-8 text-center">Contact Me</h2>
      <p className="text-white-400 text-1xl font-bold mb-8 text-center">If you're looking to hire me or have any questions, you can email me by clicking the link below or connect with me on Linkedin or fill out the form! Whatever works the best for you</p> 
      {/* Social Links */}
      <div className="flex justify-center space-x-8 mb-10">
        <a href="https://www.linkedin.com/in/parv-bhardwaj/" target="_blank" className="text-blue-400 hover:underline">LinkedIn</a>
        <a href="https://github.com/Codegrammer2002" target="_blank" className="text-gray-300 hover:underline">GitHub</a>
        <a href="mailto:bhardwajparv2015@gmail.com" className="text-yellow-500 hover:underline">Email</a>
      </div>

      {/* Contact Form */}
      <form
        action="https://formsubmit.co/bhardwajparv2015@gmail.com"  // Replace with your actual email
        method="POST"
        className="max-w-md mx-auto space-y-4"
      >
        <input type="hidden" name="_captcha" value="false" />
        <input type="text" name="name" placeholder="Your Name" required className="w-full px-4 py-2 rounded bg-gray-800 text-white" />
        <input type="email" name="email" placeholder="Your Email" required className="w-full px-4 py-2 rounded bg-gray-800 text-white" />
        <textarea name="message" rows="5" placeholder="Your Message" required className="w-full px-4 py-2 rounded bg-gray-800 text-white" />
        <button type="submit" className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 rounded text-black font-bold w-full">Send</button>
      </form>
    </section>
  );
};

export default Contact;
