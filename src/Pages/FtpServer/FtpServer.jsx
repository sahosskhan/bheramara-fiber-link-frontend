import { Server } from "lucide-react";

const ftpServers = [
  { name: "FTP Media Live", address: "http://10.1.1.1", bg: "bg-teal-400/20" },
  { name: "Dhaka Flix", address: "http://172.16.50.4", bg: "bg-purple-400/20" },
  { name: "Crazy CTG", address: "https://crazyctg.com/", bg: "bg-pink-400/20" },
  { name: "MovieHaat", address: "https://moviehaat.net/", bg: "bg-indigo-400/20" },
  { name: "CTG Movies", address: "http://ctgmovies.com/", bg: "bg-orange-400/20" },
];

const FtpServer = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-[#0e1026] via-[#1f0b3a] to-[#0b253e] text-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-2">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">FTP Servers</h2>
        <p className="text-lg sm:text-xl text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Access our secure FTP servers to upload and download your files effortlessly.
        </p>

        {/* FTP Server Cards - 2 per row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ftpServers.map((server, idx) => (
            <a
              key={idx}
              href={server.address}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative p-6 rounded-2xl shadow-lg backdrop-blur-md hover:scale-105 transition transform animate-wave ${server.bg}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <Server className="w-6 h-6 text-white" />
                <h3 className="text-2xl font-semibold">{server.name}</h3>
              </div>
              <p className="text-lg text-gray-200 mb-4">{server.address}</p>
              <button className="w-full py-3 text-lg uppercase rounded-full bg-white/30 text-white font-medium hover:bg-white/30 transition">
                Visit FTP Server
              </button>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FtpServer;
