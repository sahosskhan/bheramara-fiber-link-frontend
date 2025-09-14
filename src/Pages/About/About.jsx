import { Phone, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const About = () => {
  const collaborations = [
    { name: "REGO Communications", logo: "https://i.ibb.co.com/TxTHJb9b/mcpl-logo.png" },
    { name: "Mir Info System", logo: "https://i.ibb.co.com/mCq2B4XY/mirinfosys-logo-e-2147483647-v-beta-t-Cxgs-DABdhnp5d-M2-X35-XSEGw-Phlqpn-Nc2-Mr-Zm8e4i-YVs.jpg" },
    { name: "SH Network", logo: "https://i.ibb.co.com/v4H138FK/image.png" },
    { name: "Earth Telecommunication", logo: "https://i.ibb.co.com/vRNqDNC/image.png" },
  ];

 const team = [ 
  { name: "MD. Saiful Alam Khan", position: "CEO", number: "+880 1712-577194", email: "ssninternet9@gmail.com", image: "https://i.ibb.co.com/mFHrvH5W/image.png", }, 
  { name: "K.M. Yeamin Saiful Khan", position: "CTO", number: "+880 1712-577194", email: "ssninternet9@gmail.com", image: "https://i.ibb.co.com/mFHrvH5W/image.png", }, 
  { name: "KM Yeardin Saiful Khan", position: "CMO", number: "+880 1712-5771945", email: "ssninternet9@gmail.com", image: "https://i.ibb.co.com/c9JZvdK/image.png", }, 
  { name: "MD. Sahoss Khan", position: "Web Developer", number: "+880 1778-030482", email: "sahosskhan359@gmail.com", image: "https://i.ibb.co.com/DPhL6jBf/image.png", }, 
  { name: "MD. Alamin Islam", position: "Network Engineer", number: "+880 1778-030482", email: "ssninternet9@gmail.com", image: "https://i.ibb.co.com/TD9Mw3cf/image.png", }, ];

  // Sequential Heading Animation
  const texts = ["Our Story", "Our Vision", "Our Mission"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      let fullText = texts[currentIndex];
      let i = 0;
      const typeWriter = setInterval(() => {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
        if (i === fullText.length) {
          clearInterval(typeWriter);
          setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % texts.length);
          }, 1500);
        }
      }, 100);
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="bg-gradient-to-br from-[#0e1026] via-[#1f0b3a] to-[#0b253e] text-gray-100 min-h-screen py-16">

      {/* Hero Section */}
      <section className="pb-16 sm:pb-20 px-4 sm:px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 animate-fadeIn">
          About Bheramara Fiber Link (BFL) Internet
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto animate-fadeIn delay-200">
          Delivering lightning-fast internet with reliable FTTH technology, 24/7 support, and secure service to homes and businesses across Bangladesh.
        </p>
      </section>

      {/* Sequential Heading */}
      <section className="px-2 max-w-7xl mx-auto animate-fadeIn delay-400">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition">
          <h2 className="text-2xl sm:text-3xl text-teal-500 font-bold mb-4 h-12">
            Bheramara Fiber Link (BFL) - {displayText}
            <span className="animate-pulse">|</span>
          </h2>
          <p className="text-gray-200 text-sm sm:text-lg leading-relaxed">
     Bheramara Fiber Link (BFL) was founded with a simple vision: to bring high-speed, reliable, and secure internet connectivity to every home and business in Bangladesh. Starting in the bustling town of Bheramara, our team faced many challenges, from establishing infrastructure to ensuring customer satisfaction. <br /> Through persistence and innovation, we adopted the latest FTTH technology to provide seamless connectivity, allowing our customers to enjoy uninterrupted browsing, streaming, and communication. <br /> Over the years, we have expanded our reach across multiple districts, connecting urban centers as well as rural communities. Our commitment to 24/7 customer support ensures that every subscriber receives timely assistance, while our secure systems protect privacy and data integrity. <br /> Looking ahead, Bheramara Fiber Link (BFL) aims to continue its journey as a leading internet provider, focusing on smart solutions, digital inclusion, and sustainable growth. Our vision is to empower individuals and businesses with fast, reliable, and secure internet, bridging the digital divide and fostering innovation across the country.
          </p>
        </div>
      </section>

       {/* Collaborations - Grid */}
      <section className="px-4 py-14 max-w-7xl mx-auto animate-fadeIn delay-600">
        <h2 className="text-3xl sm:text-5xl font-bold mb-8 sm:mb-12 text-center">Our Collaborations & Partners</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {collaborations.map((partner, index) => (
            <div key={index} className="bg-white backdrop-blur-lg p-4 rounded-2xl shadow-lg flex flex-col items-center justify-center">
              <img src={partner.logo} alt={partner.name} className="w-24 h-28 object-contain mb-2" />
              <h3 className="text-black font-semibold text-center text-base sm:text-lg">{partner.name}</h3>
            </div>
          ))}
        </div>
      </section>

  {/* Team Section */}
<section className="py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto animate-fadeIn delay-800">
  <h2 className="text-3xl sm:text-5xl font-bold text-center mb-4">Meet Our Team</h2>
  <p className="text-base sm:text-lg md:text-xl text-center text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto">
    Our team of experts works tirelessly to provide the best internet experience for our customers.
  </p>

  {/* Desktop Table */}
  <div className="hidden md:block">
    <table className="min-w-full bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg divide-y divide-gray-700">
      <thead>
        <tr className="text-left text-gray-200">
          <th className="px-6 py-3">Name</th>
          <th className="px-6 py-3">Position</th>
          <th className="px-6 py-3">Phone</th>
          <th className="px-6 py-3">Email</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-700">
        {team.map((member, index) => (
          <tr key={index} className="hover:bg-white/20 transition-colors duration-300 text-gray-100">
            <td className="px-6 py-4 flex items-center gap-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-12 h-12 rounded-full border-2 border-teal-400 object-cover"
              />
              {member.name}
            </td>
            <td className="px-6 py-4">{member.position}</td>
            <td className="px-6 py-4">{member.number}</td>
            <td className="px-6 py-4">{member.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {/* Mobile Cards */}
  <div className="md:hidden flex flex-col gap-4">
    {team.map((member, index) => (
      <div key={index} className="bg-white/10 backdrop-blur-lg p-4 rounded-2xl shadow-lg">
        <div className="flex items-center gap-4 mb-2">
          <img
            src={member.image}
            alt={member.name}
            className="w-12 h-12 rounded-full border-2 border-teal-400 object-cover"
          />
          <div>
            <h3 className="text-white font-semibold">{member.name}</h3>
            <p className="text-gray-300 text-sm">{member.position}</p>
          </div>
        </div>
        <div className="flex flex-col gap-1 text-gray-400 text-sm">
          <div className="flex items-center gap-2"><Phone size={16} /> {member.number}</div>
          <div className="flex items-center gap-2"><Mail size={16} /> {member.email}</div>
        </div>
      </div>
    ))}
  </div>
</section>

    </div>
  );
};

export default About;
