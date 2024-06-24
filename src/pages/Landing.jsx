import React from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  const handleClick = (targetRoute) => {
    navigate(targetRoute);
  };

  return (
    <div className="landing-container flex flex-col items-center justify-center min-h-screen bg-gray-100"> 
      <section className="hero w-full px-4 py-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to Your Website!</h1>
        <p className="text-xl text-gray-600 mt-4">A captivating tagline to grab attention and explain your value proposition.</p>
        <button onClick={() => handleClick('/about')} className="mt-8 px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700">Learn More</button> {/* Tailwind classes for button */}
      </section>

      <section className="features w-full px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-800">Key Features</h2>
        <ul className="list-disc mt-4 ml-4 space-y-2"> 
          <li className="text-gray-600">Feature 1: Benefit for users</li>
          <li className="text-gray-600">Feature 2: Benefit for users</li>
          <li className="text-gray-600">Feature 3: Benefit for users</li>
        </ul>
      </section>

      <section className="cta w-full px-4 py-8 text-center"> {/* Tailwind classes for CTA section */}
        <h2 className="text-2xl font-bold text-gray-800">Ready to Get Started?</h2>
        <button onClick={() => handleClick('/signup')} className="mt-8 px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700">Sign Up Now!</button> {/* Tailwind classes for button */}
      </section>

      <section className="testimonials w-full px-4 py-8"> {/* Tailwind classes for testimonials section (optional) */}
        <h2 className="text-2xl font-bold text-gray-800">What People Are Saying</h2>
        <p className="text-gray-600 mt-4">"This website has been incredibly helpful for..." - Satisfied Customer</p>  {/* Customer testimonial (optional) */}
      </section>

      <section className="footer w-full px-4 py-4 text-center text-gray-500 bg-gray-200"> {/* Tailwind classes for footer section (optional) */}
        <p>&copy; 2024 Your Company Name</p>
      </section>
    </div>
  );
};

export default Landing;
