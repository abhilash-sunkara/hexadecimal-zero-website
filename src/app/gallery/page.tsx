'use client';

import Image from "next/image";

import {Montserrat, Quantico} from 'next/font/google'
import HeaderBar from "../components/headerbar";



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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-8 w-full">
            <GalleryElement text="Robot after Meet 1" imgpath="/meet1bot.png" description="This is our robot that performed at our first competition as a team" />
            <GalleryElement text="Robot after Meet 2" imgpath="/meet1bot.png" description="This is our updated robot for the second meet" />
            <GalleryElement text="Robot after Meet 3" imgpath="/meet1bot.png" description="Robot design after third meet" />
            <GalleryElement text="Robot Final" imgpath="/meet1bot.png" description="Our robot for the final competition" />
            <GalleryElement text="Team Meeting" imgpath="/meet1bot.png" description="Team working together" />
            <GalleryElement text="On the Field" imgpath="/meet1bot.png" description="Robot on the field in action" />
        </div>
        
        

        


    </main>
  );
}

type GalleryElementType = {
    text : string,
    imgpath : string,
    description : string,
}



const GalleryElement: React.FC<GalleryElementType> = ({ text, imgpath, description }) => {
    return (
      <div className="relative group">
        <div className="flex flex-col bg-emerald-200 gap-4 transition-all duration-300 ease-in-out group-hover:blur-sm">
          <Image src={imgpath} width={400} height={200} style={{ borderRadius: 4 }} alt={""} />
          <p className="text-slate-950 text-xl text-center font-bold font-montserrat">{text}</p>
        </div>

        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
          <p className="text-xl text-white text-center p-4">{description}</p>
        </div>
      </div>
    );
  };