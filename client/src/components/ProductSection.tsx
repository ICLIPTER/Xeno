import { Clock, Sparkles, Star } from "lucide-react";
import thousandX from "@/assets/1000x.png";
import AnimatedDesignCard from "./AnimatedDesignCard";


const ProductSection = () => {
  return (
    <section className="relative w-full pt-20 pb-32 font-poppins overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-1/2 top-[10%] -translate-x-1/2 w-130 h-130 rounded-full 
      bg-linear-to-r from-[#CB52D4]/30 to-indigo-600/30 blur-[140px]"
        />
      </div>

      {/* CONTAINER — fixes alignment */}
      <div className="relative max-w-6xl mx-auto px-6">
        {/* Beam */}
        <div className="flex flex-col items-center mb-24">
          {/* Hanging Wire */}
          <div className="h-24 w-px bg-linear-to-b from-indigo-300 to-indigo-500/10" />

          {/* Bulb Wrapper */}
          <div className="relative mt-4 flex items-center justify-center">
            {/* EXPANDING AMBIENT AURA */}
            <div
              className="absolute h-56 w-56 rounded-full 
      bg-linear-to-r from-[#CB52D4]/40 via-indigo-500/40 to-indigo-600/40
      blur-[120px] animate-[pulse_4s_ease-in-out_infinite]"
            />

            {/* SECONDARY BRIGHT FLASH */}
            <div
              className="absolute h-40 w-40 rounded-full 
      bg-indigo-400/50 blur-[90px]
      animate-[pulse_2.5s_ease-in-out_infinite]"
            />

            {/* SPINNING ENERGY RING */}
            <div
              className="absolute h-24 w-24 rounded-full 
      border border-indigo-300/60
      animate-[spin_6s_linear_infinite]"
            />

            {/* INNER LIGHT CORE */}
            <div
              className="absolute h-20 w-20 rounded-full 
      bg-indigo-300/70 blur-2xl 
      animate-[pulse_2s_ease-in-out_infinite]"
            />

            {/* BULB CORE */}
            <div
              className="relative h-16 w-16 rounded-full
      bg-linear-to-br from-[#E0C3FC] via-indigo-400 to-indigo-700
      flex items-center justify-center
      shadow-[0_0_120px_rgba(139,92,246,1)]
      animate-[pulse_1.8s_ease-in-out_infinite]"
            />
          </div>
        </div>

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-[38px] md:text-5xl font-semibold leading-[1.1] tracking-[-0.02em] text-gray-400">
            Empowering product builders
            <br />
            <span className="text-white font-bold">
              with the most powerful coding agents
            </span>
          </h2>

          <p className="mt-6 text-base md:text-lg text-gray-500 max-w-2xl mx-auto">
            Bolt does the heavy lifting for you, so you can focus on your vision
            instead of fighting errors.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-3 mt-18">
          {/* TOP — WIDE CARD */}
          <div className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              {/* Text */}
              <div>
                <h3 className="text-white font-semibold text-lg">
                  Always the best, without switching tools
                </h3>
                <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-md">
                  Bolt integrates the frontier coding agents from the AI labs
                  directly inside one familiar visual interface. No more AI
                  anxiety or juggling multiple platforms.
                </p>
              </div>

              {/* Agents */}
              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-xl bg-black/40 px-5 py-3 border border-white/10">
                  <div className="flex items-center gap-3">
                    <Sparkles className="size-4 text-orange-400" />
                    <span className="text-sm text-white">Claude Code</span>
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-black/30 px-5 py-3 text-gray-500">
                  <div className="flex items-center gap-3">
                    <Clock className="size-4" />
                    <span className="text-sm">Codex</span>
                  </div>
                  <span className="text-xs">coming soon</span>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-black/30 px-5 py-3 text-gray-500">
                  <div className="flex items-center gap-3">
                    <Star className="size-4 text-indigo-400" />
                    <span className="text-sm">Gemini</span>
                  </div>
                  <span className="text-xs">coming soon</span>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM — TWO CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* LEFT */}
            <div className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl p-10 flex flex-col justify-center text-center">
              <span className="text-6xl font-bold text-white">98%</span>
              <span className="mt-3 text-gray-400 font-medium">
                less errors
              </span>

              <p className="mt-5 text-sm text-gray-500 max-w-xs mx-auto">
                Bolt automatically tests, refactors, and iterates reducing
                errors so you keep building instead of fixing.
              </p>
            </div>

            {/* RIGHT */}
            <div className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl p-10">
              <h3 className="text-white font-semibold text-lg">
                Build big without breaking
              </h3>

              <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                Bolt handles{" "}
                <span className="text-white">projects 1,000 times larger</span>{" "}
                than before. Its improved built-in context management can handle
                complexity and keep your projects running smoothly.
              </p>

              <div className="mt-10 h-40 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center overflow-hidden">
                <img
                  src={thousandX}
                  alt="1000x"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>

            {/* DESIGN SYSTEM CARD */}
            <div className="md:col-span-2 relative overflow-hidden rounded-2xl">
              <AnimatedDesignCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
