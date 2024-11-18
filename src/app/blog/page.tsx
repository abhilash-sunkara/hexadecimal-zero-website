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

  const BlogPosts:BlogElementType[] = [
    {title : "Kickoff", date : "9/7/2024", imgpath : "/blog_posts/kickoff.png", text : "Kicking off our rookie season in FTC has been both thrilling and challenging. We&apos;re diving headfirst into the game rules, brainstorming robot designs, and figuring out the basics of coding and building. Every day feels like a new lesson in teamwork and problem-solving, and we&apos;re excited to see how far we can push ourselves. This season, we&apos;re determined to grow together and make our mark in the competition."},
    {title : "Ready for Tele-op and Autonomous", date : "9/24/24", imgpath : "/blog_posts/fieldsetup.png", text : "Setting up the field for the first time felt surreal – seeing it all laid out made the competition feel real. With the field ready, we&apos;ve started writing our first lines of code, working on getting the robot&apos;s movements just right. Learning the basics of programming each motor and sensor is a challenge, but we&apos;re excited to bring our ideas to life and see our robot in action!"},
    {title : "Meet 1 Finished", date : "11/2/2024", imgpath : "/blog_posts/meet1bot.png", text : "We just finished our first league meet, and we couldn&apos;t be prouder – we placed 4th in the league! Competing for the first time was intense, but it showed us how much we&apos;ve grown as a team. This experience has only motivated us more, and we&apos;re excited to keep improving and pushing our limits for the next competition."}
  ]

  return (
    <main className={`flex min-h-screen flex-col items-start justify-start p-10 bg-emerald-50 ${montserrat.variable} ${quantico.variable}`}>
        
        <HeaderBar></HeaderBar>
        
        <div className="w-full">
        
        {BlogPosts.reverse().map((item, index) => (
          <BlogElement title={item.title} date = {item.date} imgpath={item.imgpath} text = {item.text} key = {index}></BlogElement>
        ))}


        

        </div>
    </main>
  );
}

type BlogElementType = {
  title : string,
  date : string,
  imgpath : string,
  text : string
}

const BlogElement: React.FC<BlogElementType> = ({title, date, imgpath, text}) => {
  return (
    <div className="flex flex-row py-10">
          <Image src = {imgpath} alt = "meet 1 bot" width={800} height={400} style={{borderRadius : 4}}/>
          <div className = "flex flex-col px-8">
            <p className="text-5xl text-emerald-700 font-bold font-montserrat ">{title}</p>
            <p className="text-3xl text-emerald-700 font-bold font-montserrat ">{date}</p>
            <p className="text-2xl text-slate-950 font-montserrat font-bold pt-4">{text}</p>
          </div>
        </div>
  )
}