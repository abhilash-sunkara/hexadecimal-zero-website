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
        
        <div className="w-full">
        
        <div className="flex flex-row py-10 bg-white">
          <Image src = "/meet1bot.png" alt = "meet 1 bot" width={800} height={400} style={{borderRadius : 4}}/>
          <div className = "flex flex-col px-8">
            <p className="text-5xl text-emerald-700 font-bold font-montserrat ">Meet 1</p>
            <p className="text-3xl text-emerald-700 font-bold font-montserrat ">November 2, 2024</p>
            <p className="text-2xl text-slate-950 font-montserrat font-bold pt-4"> Some boiler plate text about the meet</p>
          </div>
        </div>

        <div className="flex flex-row py-10 bg-white">
          <Image src = "/meet1bot.png" alt = "meet 1 bot" width={800} height={400} style={{borderRadius : 4}}/>
          <div className = "flex flex-col px-8">
            <p className="text-5xl text-emerald-700 font-bold font-montserrat ">Meet 1</p>
            <p className="text-3xl text-emerald-700 font-bold font-montserrat ">November 2, 2024</p>
            <p className="text-2xl text-slate-950 font-montserrat font-bold pt-4"> Some boiler plate text about the meet</p>
          </div>
        </div>

        <div className="flex flex-row py-10 bg-white">
          <Image src = "/meet1bot.png" alt = "meet 1 bot" width={800} height={400} style={{borderRadius : 4}}/>
          <div className = "flex flex-col px-8">
            <p className="text-5xl text-emerald-700 font-bold font-montserrat ">Meet 1</p>
            <p className="text-3xl text-emerald-700 font-bold font-montserrat ">November 2, 2024</p>
            <p className="text-2xl text-slate-950 font-montserrat font-bold pt-4"> Some boiler plate text about the meet</p>
          </div>
        </div>

        </div>
    </main>
  );
}
