import { useEffect } from 'react';

const Recommendations = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widgets.sociablekit.com/linkedin-recommendations/widget.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section>
      <h2 className="text-yellow-400 text-2xl font-bold mb-4">Recommendations</h2>
      <div className="sk-ww-linkedin-recommendations" data-embed-id="25571205"></div>
      <iframe src='https://widgets.sociablekit.com/linkedin-recommendations/iframe/25571205' frameborder='0' width='100%' height='1000'></iframe>
    </section>
  );
};

export default Recommendations;
