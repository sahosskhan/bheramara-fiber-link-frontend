import { Link } from "react-router-dom";
import Extra from "./Extra";
import Popups from "./Popups";
import { Zap, Clock, Server, Wifi, Globe } from "lucide-react";

const Home = () => {
  const packages = [
    {
      name: "Lumen", 
      speed: "30 Mbps",
       price: "৳525 / month",
     desc: `Stay connected all day with reliable speed for browsing, streaming, and social media. 
Ideal for students, casual users, and small households who need smooth internet.`,
      ribbon: "Popular",
      gradient: "from-yellow-300 to-indigo-400",
      titleColor: "text-yellow-300",
    },
    {
      name: "Cosmo",
      speed: "50 Mbps",
      price: "৳735 / month",
     desc: `A perfect mix of speed and affordability designed for families and professionals.
Stream, work, and play without interruptions while keeping costs under control.`,
      ribbon: "Best Value",
      gradient: "from-indigo-400 to-purple-500",
      titleColor: "text-indigo-300",
    },
    {
      name: "Supernova",
      speed: "100 Mbps",
      price: "৳1260 / month",
 desc: `Experience next-level internet with blazing-fast speed for gaming and 4K streaming.
Built for heavy users, businesses, and anyone who demands ultra-performance.`,
      ribbon: "Ultra Speed",
      gradient: "from-pink-400 to-red-400",
      titleColor: "text-pink-300",
    },
  ];

  const badges = [
    { label: "Extra BDIX Speed", icon: <Zap className="w-4 h-4 text-yellow-500" />, bg: "bg-yellow-300/30" },
    { label: "24/7 Stable Speed", icon: <Clock className="w-4 h-4 text-blue-500" />, bg: "bg-blue-300/30" },
    { label: "Large FTP Server", icon: <Server className="w-4 h-4 text-purple-500" />, bg: "bg-purple-300/30" },
    { label: "FTTH Technology", icon: <Wifi className="w-4 h-4 text-green-500" />, bg: "bg-green-300/30" },
    { label: "Real IP", icon: <Globe className="w-4 h-4 text-pink-500" />, bg: "bg-pink-300/30" },
  ];

  return (
    <div className="bg-gradient-to-br from-[#0e1026] via-[#1f0b3a] to-[#0b253e] text-gray-100 min-h-screen">
      {/* Hero Heading */}
      <section className="w-full py-14 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-indigo-400 animate-pulse">
            Stay Connected with Bheramara Fiber Link (BFL)
          </span>
        </h1>
        <p className="text-gray-300 max-w-5xl text-lg font-semibold uppercase mx-auto leading-relaxed">
          Experience blazing fast internet up to{" "}
          <span className="text-teal-300 animate-pulse font-semibold">100 Mbps</span>.  
          Get <span className="text-yellow-500">Extra BDIX Speed</span>, <span className="text-green-500">Lowest Gaming Ping</span>, <span className="text-orange-500">Bufferless Browse</span> & <span className="text-blue-500">Real IP</span> —  
          all with <span className="text-red-500">24/7</span> dedicated support.
        </p>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {badges.map((badge, i) => (
            <span
              key={badge.label}
              className={`flex items-center gap-2 px-4 py-2 text-sm rounded-full border border-white/20 backdrop-blur-md hover:bg-white/20 transition transform hover:scale-110 animate-pulse ${badge.bg}`}
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              {badge.icon}
              {badge.label}
            </span>
          ))}
        </div>
      </section>

      {/* Recommended Packages Heading */}
      <section className="text-center px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-4">
          Recommended Internet Packages
        </h2>
        <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto">
          Choose the best package that fits your lifestyle — fast, reliable, and full of extra benefits.
        </p>
      </section>

      {/* Package Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg, i) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col justify-between bg-white/10 border border-white/20 
              rounded-2xl p-6 shadow-lg backdrop-blur-xl 
              transition hover:scale-[1.03] hover:shadow-2xl 
              animate-wave `}
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              {/* Ribbon */}
              <div
                className={`absolute top-3 right-[-28px] rounded-xl rotate-45 bg-gradient-to-r ${pkg.gradient} 
                text-[#0b1320] text-lg font-bold px-10 py-1 shadow-md`}
              >
                {pkg.ribbon}
              </div>

              {/* Content */}
              <div>
                <h3 className={`text-4xl font-bold ${pkg.titleColor}`}>{pkg.name}</h3>
                <div className="text-xl font-extrabold mt-2">{pkg.speed}</div>
                <div className="text-yellow-500 mb-2 text-xl mt-2">{pkg.price}</div>
                <p className="text-base text-gray-400">{pkg.desc}</p>
              </div>

              {/* Button */}
             <Link to="/get-new-connection">
              <button
                className="mt-8 w-full py-3 rounded-full bg-gradient-to-r from-teal-300 to-indigo-400 text-[#0b1320] 
                font-bold shadow-md transition-all duration-500 
                hover:from-indigo-500 hover:to-teal-400 hover:text-white hover:shadow-2xl hover:-translate-y-1"
              >
                Get Started
              </button></Link>
            </div>
          ))}
        </div>
      </section>

      <Extra />
      <Popups />
    </div>
  );
};

export default Home;
