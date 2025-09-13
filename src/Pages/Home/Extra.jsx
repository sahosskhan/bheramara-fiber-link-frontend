import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Server, Tv, Film, Globe, CreditCard, Headphones, Wifi, UserCheck, Shield, Rocket,  Home, Cloud, Gamepad } from "lucide-react";
const Extra = () => {
  // FAQ data
  const faqData = [
{ q: "Is your service coverage available?", a: "Our service is available in many regions across the country." },
{ q: "How long does service restoration take?", a: "Usually within 24 hours." },
{ q: "What are the payment options?", a: "We accept bKash, Nagad, and bank transfers." },
{ q: "When is customer support available?", a: "Our team is available 24/7." },
{ q: "Is installation free?", a: "Yes, free installation is available in certain areas." },
{ q: "Can I change my package?", a: "Yes, you can change your package anytime." },
{ q: "What is the internet speed?", a: "The speed ranges from 12–20 Mbps depending on your area." },
{ q: "What is required to set up a connection?", a: "Just an address and ID verification are enough." },

  ];

  const [openIndex, setOpenIndex] = useState(null);



  return (
    <div>
    

      {/* More Services Section */}
      <section className="py-16 px-6">
        <h2 className=" text-4xl md:text-5xl font-bold text-center text-white mb-10">Why Choose Us For Your <span className="text-teal-500">Internet Provider</span></h2>
        
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
         
         
       {/* 1. Smart Bill Payment */}
<div className="bg-teal-300/30 backdrop-blur-md p-6 animate-wave rounded-2xl shadow-lg hover:scale-105 transition">
  <div className="flex items-center gap-3 mb-4">
    <CreditCard className="w-6 h-6 text-teal-600" />
    <h3 className="text-xl font-semibold">Smart Bill Payment</h3>
  </div>
  <p className="text-lg text-gray-400">
    Pay your internet bills anytime with our seamless online billing system.
  </p>
</div>

{/* 2. 24/7 Support */}
<div className="bg-blue-300/30 backdrop-blur-md animate-wave p-6 rounded-2xl shadow-lg hover:scale-105 transition">
  <div className="flex items-center gap-3 mb-4">
    <Headphones className="w-6 h-6 text-blue-600" />
    <h3 className="text-xl font-semibold">24/7 Support</h3>
  </div>
  <p className="text-lg text-gray-400">
    Our dedicated team is always available to help you with any issue.
  </p>
</div>

{/* 3. FTTH Technology */}
<div className="bg-purple-300/30 backdrop-blur-md p-6 animate-wave rounded-2xl shadow-lg hover:scale-105 transition">
  <div className="flex items-center gap-3 mb-4">
    <Wifi className="w-6 h-6 text-purple-600" />
    <h3 className="text-xl font-semibold">FTTH Technology</h3>
  </div>
  <p className="text-lg text-gray-400">
    Enjoy blazing-fast fiber-to-the-home internet for uninterrupted browsing.
  </p>
</div>

{/* 4. Self Care Portal */}
<div className="bg-pink-300/30 backdrop-blur-md p-6 animate-wave rounded-2xl shadow-lg hover:scale-105 transition">
  <div className="flex items-center gap-3 mb-4">
    <UserCheck className="w-6 h-6 text-pink-600" />
    <h3 className="text-xl font-semibold">Self Care Portal</h3>
  </div>
  <p className="text-lg text-gray-400">
    Manage your account, usage, and payments with ease from one place.
  </p>
</div>

{/* 5. Secure & Private */}
<div className="bg-orange-300/30 backdrop-blur-md p-6 animate-wave rounded-2xl shadow-lg hover:scale-105 transition">
  <div className="flex items-center gap-3 mb-4">
    <Shield className="w-6 h-6 text-orange-600" />
    <h3 className="text-xl font-semibold">Secure & Private</h3>
  </div>
  <p className="text-lg text-gray-400">
    We ensure your online activities remain safe with advanced encryption.
  </p>
</div>

{/* 6. BDIX Boost */}
<div className="bg-red-300/30 backdrop-blur-md p-6 animate-wave rounded-2xl shadow-lg hover:scale-105 transition">
  <div className="flex items-center gap-3 mb-4">
    <Rocket className="w-6 h-6 text-red-600" />
    <h3 className="text-xl font-semibold">BDIX Boost</h3>
  </div>
  <p className="text-lg text-gray-400">
    Extra speed on Facebook, YouTube, and local BDIX content for smooth streaming.
  </p>
</div>

{/* 7. Live TV Streaming */}
<div className="bg-green-300/30 backdrop-blur-md animate-wave p-6 rounded-2xl shadow-lg hover:scale-105 transition">
  <div className="flex items-center gap-3 mb-4">
    <Tv className="w-6 h-6 text-green-600" />
    <h3 className="text-xl font-semibold">Live TV Streaming</h3>
  </div>
  <p className="text-lg text-gray-400">
    Watch your favorite channels live anytime, anywhere with seamless streaming.
  </p>
</div>

{/* 8. OTT Platforms */}
<div className="bg-indigo-300/30 backdrop-blur-md animate-wave p-6 rounded-2xl shadow-lg hover:scale-105 transition">
  <div className="flex items-center gap-3 mb-4">
    <Film className="w-6 h-6 text-indigo-600" />
    <h3 className="text-xl font-semibold">OTT Platforms</h3>
  </div>
  <p className="text-lg text-gray-400">
    Enjoy the best movies and series from top OTT platforms in one place.
  </p>
</div>

{/* 9. FTP Server Access */}
<div className="bg-cyan-300/30 backdrop-blur-md animate-wave p-6 rounded-2xl shadow-lg hover:scale-105 transition">
  <div className="flex items-center gap-3 mb-4">
    <Server className="w-6 h-6 text-cyan-600" />
    <h3 className="text-xl font-semibold">FTP Server Access</h3>
  </div>
  <p className="text-lg text-gray-400">
    Securely upload and download your files anytime with our FTP servers.
  </p>
</div>

{/* 10. Smart Home Integration */}
<div className="bg-yellow-300/30 backdrop-blur-md animate-wave p-6 rounded-2xl shadow-lg hover:scale-105 transition">
  <div className="flex items-center gap-3 mb-4">
    <Home className="w-6 h-6 text-yellow-600" />
    <h3 className="text-xl font-semibold">Smart Home System</h3>
  </div>
  <p className="text-lg text-gray-400">
    Connect and control all your smart home devices from a single platform.
  </p>
</div>

{/* 11. Cloud Storage Solutions */}
<div className="bg-fuchsia-300/30 backdrop-blur-md animate-wave p-6 rounded-2xl shadow-lg hover:scale-105 transition">
  <div className="flex items-center gap-3 mb-4">
    <Cloud className="w-6 h-6 text-fuchsia-600" />
    <h3 className="text-xl font-semibold">Cloud Storage System</h3>
  </div>
  <p className="text-lg text-gray-400">
    Store, manage, and access your files securely on the cloud anytime.
  </p>
</div>

{/* 12. Gaming Acceleration */}
<div className="bg-pink-300/30 backdrop-blur-md animate-wave p-6 rounded-2xl shadow-lg hover:scale-105 transition">
  <div className="flex items-center gap-3 mb-4">
    <Gamepad className="w-6 h-6 text-pink-600" />
    <h3 className="text-xl font-semibold">Gaming Acceleration</h3>
  </div>
  <p className="text-lg text-gray-400">
    Reduce latency and enjoy smoother online gaming with optimized connections.
  </p>
</div>


        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 px-6">
              <section className="text-center ">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
Find answers to common questions about our plans, features, and services. Get quick help with billing, connectivity, and technical support.
        </p>
      </section>
        <div className="max-w-4xl mt-12 mx-auto grid gap-4">
          {faqData.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-4 cursor-pointer transition-all duration-300 hover:scale-[1.02] shadow-lg "
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-white font-medium">{item.q}</h3>
                <ChevronDown
                  className={`text-white transition-transform ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </div>
              {openIndex === idx && (
                <p className="mt-2 text-gray-300 transition-all duration-300">{item.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>

    
    </div>
  );
};

export default Extra;
