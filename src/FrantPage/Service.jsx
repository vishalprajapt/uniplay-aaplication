import React from "react";

const services = [
  {
    title: "Unlimited Entertainment",
    description:
      "Stream thousands of movies, web series, and shows across multiple genres anytime, anywhere.",
  },
  {
    title: "Live Sports",
    description:
      "Watch live cricket, football, and other major sports events in HD and real-time.",
  },
  {
    title: "Download to Watch Offline",
    description:
      "Download your favorite content and watch it offline, without using data.",
  },
  {
    title: "Premium Access",
    description:
      "Get early access to blockbuster movies and Hotstar specials with a premium membership.",
  },
  {
    title: "Watch on Any Device",
    description:
      "Enjoy streaming on your mobile, tablet, laptop, or smart TV without interruption.",
  },
  {
    title: "Parental Control",
    description:
      "Create kid-friendly profiles with content tailored to children’s viewing safety.",
  },
];

const Service = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-16 px-6">
      <div className="max-w-7xl ">
        <h2 className="text-4xl font-bold text-white mb-12 border-b-4 inline-block border-blue-500 pb-2">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl shadow-lg transition-all duration-300 p-6 text-left border border-gray-700 "
              style={{marginBottom:"15px",padding:"10px 20px"}}
            >
              <h4 className="text-xl font-semibold text-blue-400 mb-3">
                {service.title}
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
