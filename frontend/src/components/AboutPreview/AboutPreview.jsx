import profile from '../../assets/profile.jpg';

const AboutPreview = () => {
  return (
    <section id="about" className="bg-gray-900 py-16 px-6 text-white text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img 
            src={profile} 
            alt="Profile" 
            className="w-48 h-48 object-cover rounded-lg border-4 border-yellow-500 shadow-md"
          />
          <p className="text-gray-300 text-md leading-relaxed max-w-xl">
            I’m a fullstack web developer with a passion for building responsive and engaging websites.
            Skilled in React, TailwindCSS, and backend tech, I focus on clean design and great user experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
