'use client';

import Image from "next/image";

import {Montserrat, Quantico} from 'next/font/google'
import HeaderBar from "./components/headerbar";
import { motion } from "framer-motion";
import {slideFromLeft } from "./components/animations";
import Carousel from "./components/carousel";

const montserrat = Montserrat({
  weight: ["400", "700"], // Specify the weights you need
  subsets: ["latin"],      // Specify the subset(s) you need
  variable: "--font-montserrat", // Define a custom CSS variable
});

const quantico = Quantico({
  weight: ["400", "700"], // Specify the weights you need
  subsets: ["latin"],      // Specify the subset(s) you need
  variable: "--font-quantico", // Define a custom CSS variable
});



export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-start justify-start p-10 bg-emerald-50 ${montserrat.variable} ${quantico.variable}`}>

        <HeaderBar></HeaderBar>
        <motion.div variants = {slideFromLeft} className="w-full" initial = "hidden"
         animate = "active">
        <div className="flex flex-row justify-between w-full">
          <p className = "text-8xl text-emerald-800 font-bold font-quantico max-w-[900px]">
            Hexadecimal Zero Robotics
          </p>
          <Image src = "/logo.png" alt = "logo" width={240} height={240} style={{borderRadius : 4}}/>
        </div>
        </motion.div>

        
        <motion.div variants = {slideFromLeft} initial = "hidden"
         animate = "active">
        <div className="flex flex-col py-4">
          <p className="text-5xl text-slate-950 font-bold font-montserrat py-2">What is Hexadecimal Zero?</p>
          <p className="text-2xl text-slate-950 font-bold font-montserrat py-2">Hexadecimal Zero, FTC Team 26847, is a community-based rookie team from Central Texas, specifically the Austin area. As a group of passionate and eager students, we have come together to dive into the exciting world of FIRST Tech Challenge (FTC). Though we&apos;re just starting our journey in robotics, we&apos;re determined to learn, grow, and compete with energy and enthusiasm.
            Our team is made up of individuals from diverse backgrounds, each bringing unique skills, talents, and perspectives. What unites us is our shared passion for science, technology, engineering, and mathematics (STEM). We chose the name Hexadecimal Zero to reflect our embrace of technology, coding, and problem-solving, as well as to symbolize our fresh start and limitless potential in FTC.
          </p>
        </div>
        </motion.div>

        <div className="flex flex-col py-4">
          <p className="text-5xl text-slate-950 font-bold font-montserrat py-2">
            Thank you Sponsors!
          </p>



          <Carousel></Carousel>
        </div>
        


    </main>
  );
}
