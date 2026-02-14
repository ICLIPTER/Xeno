import { Loader2Icon, Github, Figma } from "lucide-react";
import React, { useState } from "react";
import LogoCloud from "../components/LogoCloud";
import HeroTitleSVG from "../components/HeroTitleSVG";
import ProductSection from "../components/ProductSection";

const Home = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFigmaImport = () => {
    alert("Figma import coming soon 🚀");
  };

  const handleGithubImport = () => {
    alert("GitHub import coming soon 🐙");
  };

  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    //simulate API call

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <section className="flex flex-col items-center text-white text-sm pb-20 px-4 font-poppins">
      <a
        href="https://prebuiltui.com"
        className="flex items-center gap-2 border border-slate-700 rounded-full p-1 pr-3 text-sm mt-20"
      >
        <span className="bg-indigo-600 text-xs px-3 py-1 rounded-full">
          NEW
        </span>
        <p className="flex items-center gap-2">
          <span>Try 30 days free trial option</span>
          <svg
            className="mt-px"
            width="6"
            height="9"
            viewBox="0 0 6 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m1 1 4 3.5L1 8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </p>
      </a>

      <h1
        className="text-center mt-25 max-w-3xl mx-auto
  text-[44px] md:text-6xl
  leading-[1.05]
  font-bold
  tracking-[-0.02em]"
      >
        What will you <HeroTitleSVG /> today?
      </h1>

      <p
        className="text-center mt-3 max-w-md mx-auto
  text-[20px] md:text-base
  font-medium
  leading-relaxed
  tracking-[-0.01em]
  text-gray-500"
      >
        Create, customize and publish websites faster than ever with our AI
        Website Builder.
      </p>

      <form
        onSubmit={onSubmitHandler}
        className="bg-white/10 max-w-2xl w-full rounded-xl p-4 mt-10 border border-indigo-600/70 focus-within:ring-2 ring-indigo-500 transition-all"
      >
        <textarea
          onChange={(e) => setInput(e.target.value)}
          className="bg-transparent outline-none text-gray-300 resize-none w-full"
          rows={4}
          placeholder="Describe your presentation in details"
          required
        />
        <button className="ml-auto flex items-center gap-2 bg-linear-to-r from-[#CB52D4] to-indigo-600 rounded-md px-4 py-2">
          {!loading ? (
            "Create with AI"
          ) : (
            <>
              Creating{" "}
              <Loader2Icon className="animate-spin size-4 text-white" />
            </>
          )}
        </button>
      </form>

      <div className="flex flex-col items-center gap-4 mt-6 w-full max-w-2xl">
        <div className="flex items-center gap-3 w-full">
          <div className="h-px flex-1 bg-white/20" />
          <span className="text-xs text-gray-300">OR IMPORT FROM</span>
          <div className="h-px flex-1 bg-white/20" />
        </div>

        <div className="flex gap-4 w-full">
          <button
            type="button"
            onClick={handleFigmaImport}
            className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 transition px-4 py-3"
          >
            <Figma className="size-4 text-pink-400" />
            <span className="text-sm text-white">Figma</span>
          </button>

          <button
            type="button"
            onClick={handleGithubImport}
            className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 transition px-4 py-3"
          >
            <Github className="size-4 text-gray-300" />
            <span className="text-sm text-white">GitHub</span>
          </button>
        </div>
      </div>

      <LogoCloud/>
      <ProductSection />
    </section>
  );
};

export default Home;
