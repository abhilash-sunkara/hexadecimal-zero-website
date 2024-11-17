import { useRouter, usePathname } from "next/navigation";
import { motion } from 'framer-motion';
import {slideFromTop } from "./animations";

const HeaderBar = () => {
  const router = useRouter();
  const segments = usePathname().split("/");
  const lastSegment = segments[segments.length - 1];

  const handleClick = (route: string) => {
    if (route === "") {
      router.push("/");
    } else {
      router.push("/" + route);
    }
  };

  return (
    <motion.div variants = {slideFromTop} className="w-full" initial = "hidden"
    animate = "active">
    <div  className="flex flex-row bg-emerald-200  justify-between rounded-md">
      <div
        className="m-4 p-4 flex flex-col group transition-all duration-300 ease-in-out cursor-pointer"
        onClick={() => handleClick("")}
      >
        <p className="text-2xl text-slate-950 font-bold">Home</p>
        <div
          className={`min-h-[2px] bg-emerald-950 transition-all duration-300 ease-in-out ${
            lastSegment === "" ? "w-full" : "w-0"
          } group-hover:w-full`}
        ></div>
      </div>
      <div
        className="m-4 p-4 flex flex-col group transition-all duration-300 ease-in-out cursor-pointer"
        onClick={() => handleClick("gallery")}
      >
        <p className="text-2xl text-slate-950 font-bold">Robot Gallery</p>
        <div
          className={`min-h-[2px] bg-emerald-950 transition-all duration-300 ease-in-out ${
            lastSegment === "gallery" ? "w-full" : "w-0"
          } group-hover:w-full`}
        ></div>
      </div>
      <div
        className="m-4 p-4 flex flex-col group transition-all duration-300 ease-in-out cursor-pointer"
        onClick={() => handleClick("blog")}
      >
        <p className="text-2xl text-slate-950 font-bold">Blog</p>
        <div
          className={`min-h-[2px] bg-emerald-950 transition-all duration-300 ease-in-out ${
            lastSegment === "blog" ? "w-full" : "w-0"
          } group-hover:w-full`}
        ></div>
      </div>
      <div
        className="m-4 p-4 flex flex-col group transition-all duration-300 ease-in-out cursor-pointer"
        onClick={() => handleClick("outreach")}
      >
        <p className="text-2xl text-slate-950 font-bold">Outreach Gallery</p>
        <div
          className={`min-h-[2px] bg-emerald-950 transition-all duration-300 ease-in-out ${
            lastSegment === "outreach" ? "w-full" : "w-0"
          } group-hover:w-full`}
        ></div>
      </div>
      
    </div>
    </motion.div>
  );
};

export default HeaderBar;