const subAreas = [
  "Chak Bheramara",
  "Pashchim Damukdia",
  "Char Damukdia",
  "16 Dag Pashchim Para",
  "16 Dag Munshipara",
  "16 Dag 68 Para",
  "16 Dag Uttar Para",
  "16 Dag Madhya Para",
  "16 Dag Dakshin Para",
  "Bahirchor 12 Dag",
  "Powerhouse Colony",
  "Pumphouse Colony",
  "Moslempur",
  "12 Mile Mondolpara",
  "12 Mile Munshipara",
  "12 Mile Wahedpur",
  "12 Mile Tiktikipara",
];

const CoverageArea = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-[#0e1026] via-[#1f0b3a] to-[#0b253e] text-gray-100 min-h-screen">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Coverage Check</h2>
        <p className="text-lg text-center text-gray-300 mb-10 max-w-2xl mx-auto">
          Want to know if our service is available in your area? Select Division, District and Upazila to search easily.
        </p>
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-12 shadow-lg ">
          <h2 className="text-4xl font-bold mb-2 ">Bheramara</h2>
          <p className="text-gray-300 mb-6 text-lg">Kushtia District, Khulna Division</p>

          {/* Sub Areas Tree */}
          <div className="grid md:grid-cols-3 gap-6">
            {subAreas.map((area, idx) => (
              <div
                key={idx}
                className="relative rounded-xl p-4 text-center cursor-pointer backdrop-blur-md bg-white/10 border border-white/20 shadow-md  animate-wave"
             
              >
                <p className="text-lg font-semibold  text-white">{area}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden">
          <iframe
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d365019.0!2d89.081382!3d23.905602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe860b2ef0aaf9%3A0x0!2sBheramara!5e0!3m2!1sen!2sbd!4v1694555555555!5m2!1sen!2sbd`}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default CoverageArea;
