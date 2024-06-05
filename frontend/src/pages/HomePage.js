import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Home() {
  // Sample course data
  const courses = [
    {
      title: "Web Development Bootcamp",
      description: "Learn full-stack web development with hands-on projects and real-world scenarios.",
      image: "https://imgs.search.brave.com/IwhrwxWBFZUk6sGaVCXxdD596zMS3E2BM70uyp0SU6M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucHJpc21pYy5p/by9kcmliYmJsZS8z/NzE0NTIwYy1kMmRj/LTQ1MzUtYjcwZi05/YzA0MjdmNjYxMWZf/NS53ZWJwP2F1dG89/Y29tcHJlc3MsZm9y/bWF0JnJlY3Q9MCww/LDgwMCw2MDAmdz0x/MjAwJmg9OTAwJTIw/MTIwMHcsJTIwaHR0/cHM6Ly9pbWFnZXMu/cHJpc21pYy5pby9k/cmliYmJsZS8zNzE0/NTIwYy1kMmRjLTQ1/MzUtYjcwZi05YzA0/MjdmNjYxMWZfNS53/ZWJwP2F1dG89Y29t/cHJlc3MsZm9ybWF0/JnJlY3Q9MCwwLDgw/MCw1OTkmdz0zNzUm/aD0yODElMjAzNzV3/LCUyMGh0dHBzOi8v/aW1hZ2VzLnByaXNt/aWMuaW8vZHJpYmJi/bGUvMzcxNDUyMGMt/ZDJkYy00NTM1LWI3/MGYtOWMwNDI3ZjY2/MTFmXzUud2VicD9h/dXRvPWNvbXByZXNz/LGZvcm1hdCZyZWN0/PTAsMCw4MDAsNjAw/Jnc9NzQ0Jmg9NTU4/JTIwNzQ0dw",
    },
    {
      title: "Data Science & Machine Learning",
      description: "Master data analysis, visualization, and machine learning with Python and R.",
      image: "https://imgs.search.brave.com/A1IG3b7QAL1qje9XYNc1M2XcYuEKuAv9mu4gGo_mxew/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucHJpc21pYy5p/by9kcmliYmJsZS8x/YjAwZWQwMC1hOWY3/LTQwZGEtOWY1My01/MTQ3NjhjNDBlMmFf/Mi53ZWJwP2F1dG89/Y29tcHJlc3MsZm9y/bWF0JnJlY3Q9MCww/LDEyMDAsOTAwJnc9/MTIwMCZoPTkwMCUy/MDEyMDB3LCUyMGh0/dHBzOi8vaW1hZ2Vz/LnByaXNtaWMuaW8v/ZHJpYmJibGUvMWIw/MGVkMDAtYTlmNy00/MGRhLTlmNTMtNTE0/NzY4YzQwZTJhXzIu/d2VicD9hdXRvPWNv/bXByZXNzLGZvcm1h/dCZyZWN0PTAsMCwx/MjAwLDg5OSZ3PTM3/NSZoPTI4MSUyMDM3/NXcsJTIwaHR0cHM6/Ly9pbWFnZXMucHJp/c21pYy5pby9kcmli/YmJsZS8xYjAwZWQw/MC1hOWY3LTQwZGEt/OWY1My01MTQ3Njhj/NDBlMmFfMi53ZWJw/P2F1dG89Y29tcHJl/c3MsZm9ybWF0JnJl/Y3Q9MCwwLDEyMDAs/OTAwJnc9NzQ0Jmg9/NTU4JTIwNzQ0dw",
    },
    {
      title: "Digital Marketing 101",
      description: "Become a digital marketing expert with our comprehensive course.",
      image: "https://imgs.search.brave.com/Ikf_hT6G3LNq7-dxiYw7x8LhFtW2o_GpcDfUfer5Hrw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9lcm96/Z2Fhci5waXRiLmdv/di5way9zeXN0ZW0v/ZmlsZXMvY3JlYXRp/dmUlMjBkZXNpZ24l/MjBDb3Vyc2UucG5n",
    },
    {
      title: "Graphic Design Masterclass",
      description: "Unlock your creativity and learn professional graphic design techniques.",
      image: "https://imgs.search.brave.com/SXKd0XNWT5Mgp8_KkDfSs6OGWPWt5i6lEDcYYXls28I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9kaWdp/dGFsZ3Vya2hhLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/My8wNS9kZXNpZ24t/d2l0aC1jYW52YS5q/cGc",
    },
    {
      title: "Photography Essentials",
      description: "Capture stunning photos with our beginner to advanced photography course.",
      image: "https://imgs.search.brave.com/aPMd__b7AQpJQusVp-RbR2dFjMCWVFn3GaDZ4sMtzbY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/Zm9ybWF0LmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvZ3JhcGhp/Yy1kZXNpZ24tY291/cnNlcy1vbmxpbmUu/anBn",
    },
  ];

  // Slider settings for the hero carousel
  const heroSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust the speed of autoplay
    arrows: false, // Hide navigation arrows
  };

  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      {/* Navigation */}
      
      {/* Hero Section */}
      <section className="relative">
        <Slider {...heroSliderSettings}>
          {courses.map((course, index) => (
            <div key={index} className="flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${course.image})` }}>
              <div className="text-center text-white px-4">
                <h1 className="text-5xl font-bold mb-4">{course.title}</h1>
                <p className="text-xl mb-8">{course.description}</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-400 transition">Enroll Now</button>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Featured Courses */}
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-8">All the skills you need in one place</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="course-card bg-white rounded-lg shadow-lg p-4 transform transition-transform duration-300 hover:scale-105">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-700">{course.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Remainder of your code... */}
    </div>
  );
}

export default Home;
