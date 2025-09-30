const LogosMarquee = () => {
  const logos = [
    { name: "ARKX", src: "/lovable-uploads/arkx.png" },
    { name: "Edvantis", src: "/lovable-uploads/edvantis.png" },
    { name: "EMBCI", src: "/lovable-uploads/embci.png" },
    { name: "EMSI", src: "/lovable-uploads/emsi.png" },
    { name: "ENCG Tanger", src: "/lovable-uploads/encg-tanger.png" },
    { name: "ENSA Berrechid", src: "/lovable-uploads/ensa-berrechid.png" },
    { name: "ENSA Khouribga", src: "/lovable-uploads/ensa-khouribga.png" },
    { name: "ENSAH", src: "/lovable-uploads/ensah.png" },
    { name: "ESITH", src: "/lovable-uploads/esith.png" },
    { name: "FSTH", src: "/lovable-uploads/fsth.jpeg" },
    { name: "GoMyCode", src: "/lovable-uploads/gomycode.png" },
    { name: "INPT", src: "/lovable-uploads/inpt.png" },
    { name: "ISMAGI", src: "/lovable-uploads/ismagi.png" },
    { name: "Mundiapolis", src: "/lovable-uploads/mundiapolis.png" },
    { name: "UM6P 1337", src: "/lovable-uploads/um6p-1337.png" },
    { name: "Universiapolis", src: "/lovable-uploads/universiapolis.png" },
  ];

  // Triple the logos array for seamless infinite scroll
  const displayLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll gap-12 items-center">
            {displayLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 h-20 w-32 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogosMarquee;
