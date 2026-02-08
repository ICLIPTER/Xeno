import NvidiaLogo from "../assets/companies/nvidia.svg";
import ColumnLogo from "../assets/companies/column.svg";
import GithubLogo from "../assets/companies/github.svg";
import NikeLogo from "../assets/companies/nike.svg";
import LemonSqueezyLogo from "../assets/companies/lemonsqueezy.svg";
import LaravelLogo from "../assets/companies/laravel.svg";
import LillyLogo from "../assets/companies/lilly.svg";
import OpenAILogo from "../assets/companies/openai.svg";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const LogoCloud = () => {
  return (
    <section className="bg-background pb-16 pt-16 md:pb-32">
      <div className="group relative m-auto max-w-5xl px-6">
        <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
          <Link to="/" className="block text-sm duration-150 hover:opacity-75">
            <span> Meet Our Customers</span>

            <ChevronRight className="ml-1 inline-block size-3" />
          </Link>
        </div>
        <div className="group-hover:blur-xs mx-auto mt-12 grid max-w-2xl grid-cols-4 gap-x-12 gap-y-8 transition-all duration-500 group-hover:opacity-50 sm:gap-x-16 sm:gap-y-14">
          <div className="flex">
            <img
              className="mx-auto h-5 w-fit dark:invert"
              src={NvidiaLogo}
              alt="Nvidia Logo"
            />
          </div>

          <div className="flex">
            <img
              className="mx-auto h-4 w-fit dark:invert"
              src={ColumnLogo}
              alt="Column Logo"
            />
          </div>
          <div className="flex">
            <img
              className="mx-auto h-4 w-fit dark:invert"
              src={GithubLogo}
              alt="GitHub Logo"
            />
          </div>
          <div className="flex">
            <img
              className="mx-auto h-5 w-fit dark:invert"
              src={NikeLogo}
              alt="Nike Logo"
            />
          </div>
          <div className="flex">
            <img
              className="mx-auto h-5 w-fit dark:invert"
              src={LemonSqueezyLogo}
              alt="Lemon Squeezy Logo"
            />
          </div>
          <div className="flex">
            <img
              className="mx-auto h-4 w-fit dark:invert"
              src={LaravelLogo}
              alt="Laravel Logo"
            />
          </div>
          <div className="flex">
            <img
              className="mx-auto h-7 w-fit dark:invert"
              src={LillyLogo}
              alt="Lilly Logo"
            />
          </div>

          <div className="flex">
            <img
              className="mx-auto h-6 w-fit dark:invert"
              src={OpenAILogo}
              alt="OpenAI Logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;
