'use client';

import Image from "next/image";

import {Montserrat, Quantico} from 'next/font/google'
import HeaderBar from "../components/headerbar";
import { motion } from "framer-motion";
import {slideFromBottom } from "../components/animations";

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

  const OutreachPosts: GalleryElementType[] = [
    {imgpath : "/outreach_gallery/polymakerfilament.png", description : "Filament from Polymaker Sponsorship"}, 
    {imgpath : "/outreach_gallery/cypresscreek.jpg", description : "Presented at Cypress Creek STEM Night"}, 
    {imgpath : "/outreach_gallery/ankermakeandpolymaker.png", description : "Printers and Filament from Ankermake and Polymaker"}
  ]

  return (
    <main className={`flex min-h-screen flex-col items-start justify-start p-10 bg-emerald-50 ${montserrat.variable} ${quantico.variable}`}>

        <HeaderBar></HeaderBar>
        
        <motion.div variants = {slideFromBottom} initial = "hidden"
         animate = "active">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-8 w-full">
            {OutreachPosts.map((item, index) => <GalleryElement imgpath={item.imgpath} description={item.description} key = {index}></GalleryElement>)}
        </div>
        </motion.div>
        


    </main>
  );
}

type GalleryElementType = {
    
    imgpath : string,
    description : string,
}



const GalleryElement: React.FC<GalleryElementType> = ({imgpath, description }) => {
    return (
      <div className="relative group">
        <div className="flex flex-col bg-emerald-200 gap-4 transition-all duration-300 ease-in-out group-hover:blur-sm">
          <Image src={imgpath} width={400} height={200} style={{ borderRadius: 4 }} alt={""} />
        </div>

        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
          <p className="text-xl text-white text-center p-4">{description}</p>
        </div>
      </div>
    );
  };