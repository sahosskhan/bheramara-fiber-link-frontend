import { Zap, Gamepad, Server, Youtube, Facebook, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const packages = [
  { name: "Lumen", speed: "30 Mbps", price: 525 },
  { name: "Orion", speed: "40 Mbps", price: 630 },
  { name: "Cosmo", speed: "50 Mbps", price: 735 },
  { name: "Bolt", speed: "60 Mbps", price: 800 },
  { name: "Flash", speed: "80 Mbps", price: 1050 },
  { name: "Supernova", speed: "100 Mbps", price: 1260, realIp: true }, // Real IP available
];

const features = [
  { key: "bdix", label: "Extra BDIX Speed", icon: <Zap className="w-5 h-5 text-yellow-500" /> },
  { key: "gaming", label: "Lowest Gaming Ping", icon: <Gamepad className="w-5 h-5 text-green-500" /> },
  { key: "ftp", label: "FTP Server Access", icon: <Server className="w-5 h-5 text-purple-500" /> },
  { key: "youtube", label: "Bufferless YouTube", icon: <Youtube className="w-5 h-5 text-red-500" /> },
  { key: "facebook", label: "Bufferless Facebook", icon: <Facebook className="w-5 h-5 text-blue-500" /> },
];

const OurPackages = () => {
  return (
    <section className="bg-gradient-to-br from-[#0e1026] via-[#1f0b3a] to-[#0b253e] text-gray-100 min-h-screen py-16 px-6">
      {/* Page Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
          Our Internet Packages
        </h2>
        <p className="mt-3 text-lg sm:text-xl  text-gray-300 max-w-2xl mx-auto">
          Choose the best package that fits your lifestyle — fast, reliable, and full of extra benefits.
        </p>
      </div>

      {/* Package Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {packages.map((pkg, i) => (
          <div
            key={i}
            className="group relative bg-[#1a2238]/80 border border-white/10 
                       rounded-2xl shadow-lg p-8 text-center transition-all duration-500 
                       hover:scale-105 hover:shadow-2xl 
                       hover:border-indigo-400/40 backdrop-blur-xl animate-wave"
          >
            {/* Glow Border */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-400/20 to-indigo-400/20 opacity-0 group-hover:opacity-100 blur-lg transition duration-500"></div>

            {/* Content */}
            <div className="relative z-10">
              {/* Package Name */}
              <h3 className="text-2xl font-bold text-teal-300 group-hover:text-indigo-300">
                {pkg.name}
              </h3>

              {/* Price */}
              <p className="text-4xl font-extrabold mt-4 text-white">
                ৳{pkg.price}
                <span className="text-sm font-medium text-gray-400"> /month</span>
              </p>

              {/* Speed */}
              <p className="mt-2 text-lg text-indigo-200 font-semibold">{pkg.speed}</p>

              {/* Features */}
              <ul className="mt-6 space-y-3 text-sm text-gray-300">
                {features.map((f, idx) => (
                  <li
                    key={idx}
                    className="flex items-center justify-between bg-white/5 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/10"
                  >
                    <span className="flex items-center gap-2 font-medium">
                      {f.icon} {f.label}
                    </span>
                    <span className="font-semibold text-green-400">✔</span>
                  </li>
                ))}

                {/* Real IP indicator if available */}
                {pkg.realIp && (
                  <li className="flex items-center justify-between bg-white/5 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/10">
                    <span className="flex items-center gap-2 font-medium">
                      <Globe className="w-5 h-5 text-purple-500" /> Real IP
                    </span>
                    <span className="font-semibold text-green-400">✔</span>
                  </li>
                )}
              </ul>
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurPackages;
