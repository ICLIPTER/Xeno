import { useEffect, useState } from "react";
import design3 from "@/assets/design3.svg";

const colors = [
  {
    bg: "rgba(59,130,246,0.25)",
    dot: "bg-blue-500",
    text: "text-blue-400",
  },
  {
    bg: "rgba(132,204,22,0.25)",
    dot: "bg-lime-400",
    text: "text-lime-400",
  },
  {
    bg: "rgba(236,72,153,0.25)",
    dot: "bg-pink-500",
    text: "text-pink-400",
  },
  {
    bg: "rgba(139,92,246,0.25)",
    dot: "bg-violet-500",
    text: "text-violet-400",
  },
];


const AnimatedDesignCard = () => {
  const [active, setActive] = useState(0);

  // Auto change every 1 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % colors.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative border border-white/10 rounded-2xl 
      pt-14 px-6 pb-10 flex flex-col items-center gap-4 
      overflow-hidden bg-[#1E1E21] backdrop-blur-xl"
      style={{
        maskImage: "linear-gradient(black 0%, black 75%, transparent 100%)",
      }}
    >
      {/* Dynamic Glow */}
      <div
        className="absolute inset-0 transition-all duration-1000"
        style={{
          background: `radial-gradient(75% 100% at 50% 0%, ${colors[active].bg} 0%, rgba(30,30,33,0) 100%)`,
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-4 w-full">
        {/* Color Indicators */}
        <div className="flex gap-2">
          {colors.map((c, i) => (
            <div
              key={i}
              className={`w-4 h-4 rounded transition-all duration-500 ${
                c.dot
              } ${active === i ? "scale-110 opacity-100" : "opacity-30"}`}
            />
          ))}
        </div>

        {/* Heading */}
        <div className="text-center text-white font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight tracking-tight max-w-xl">
          Build with{" "}
          <span className="relative inline-block">
            <span
              className={`transition-colors duration-700 ${colors[active].text}`}
            >
              your
            </span>
          </span>{" "}
          design system
        </div>

        {/* Subtext */}
        <p className="text-sm sm:text-base text-white/70 text-center max-w-sm">
          Stop building from scratch. Start building on-brand.
        </p>

        {/* SVG CENTER DISPLAY */}
        <div className="w-full h-80 flex items-center justify-center relative">
          <img
            src={design3}
            alt="Design system example"
            className="max-h-full max-w-full object-contain transition-all duration-700"
          />
        </div>
      </div>
    </div>
  );
};

export default AnimatedDesignCard;
