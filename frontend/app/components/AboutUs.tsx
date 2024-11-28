"use client";

import React, { useState } from "react";
import Image from "next/image";

import { Footer, Navbar } from "../components";
import { Button } from "@/components/ui/button";
import TeamProfile from "./TeamProfile";
import heroimage from "../public/aboutpagehero.png";
import logo from "../public/text_logo.png";
import offer from "../public/offer.jpeg"
import mission from "../public/mission.png"
import flowerwork from "../public/flowerwork.webp"

export const TEAM_MEMBERS = [
  {
    name: "Adam Louhichi",
    role: "UX/UI Designer",
    imageSrc: "/aboutpagehero.png",
  },
  {
    name: "Kevin Kongpachith",
    role: "UX/UI Designer",
    imageSrc: "/aboutpagehero.png",
  },
  {
    name: "Rukaiya Mansoor",
    role: "Project Manager",
    imageSrc: "/aboutpagehero.png",
  }
]

export const ALL_TEAM_MEMBERS = [
  {
    name: "Adam Louhichi",
    role: "UX/UI Designer",
    imageSrc: "/aboutpagehero.png",
  },
  {
    name: "Kevin Kongpachith",
    role: "UX/UI Designer",
    imageSrc: "/aboutpagehero.png",
  },
  {
    name: "Rukaiya Mansoor",
    role: "Project Manager",
    imageSrc: "/aboutpagehero.png",
  },
  {
    name: "Hrigved Nair",
    role: "Marketing and Growth",
    imageSrc: "",
  },
  {
    name: "Stefan Andrei",
    role: "Full Stack Developer",
    imageSrc: "",
  },
  {
    name: "Iryna Voitsikhovska",
    role: "UX/UI Designer",
    imageSrc: "",
  },
  {
    name: "Gabriela Beran",
    role: "HR & Recruitment",
    imageSrc: "",
  },
]

const AboutUs = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {setShowAll(!showAll)};

  return (
    <div className="w-full bg-bgdarkv2 text-white">
      {/* Header Section */}
      <header className="relative z-30">
        <Navbar className="z-40" />
      </header>

      {/* Hero Image Container */}
      <div className="relative w-full overflow-hidden">
        {/* Background Image */}
        <Image
          src={heroimage}
          alt="sample-image"
          className="w-full object-cover"
        />

        {/* Content Overlay */}
        <div className="absolute top-1/4 left-10 flex flex-col items-center justify-center text-left text-white leading-relaxed hidden md:block">
          <div className="mb-4">
            <Image 
              src={logo} 
              alt="logo"
              // className="w-32 md:w-48"
            />
          </div>
          <p className="font-semibold text-base md:text-lg">Is the all-in-one platform to stramline workflows, connect with</p>
          <p className="font-semibold text-base md:text-lg">top talents, foster seamless collaboration, assign tasks</p>
          <p className="font-semibold text-base md:text-lg">effortlessly, and securely track progress.</p>
        </div>
      </div>

      {/* Main Content */}
      <main className="w-full flex flex-col items-center">
        {/* Offer Section */}
        <section className="p-8 flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="flex-[2] space-y-6">
            <h2 className="text-3xl font-bold mb-4">
              What <span className="text-purplev1 font-bold">We Offer Now</span>
            </h2>
            <hr className="border-t mb-4"></hr>
            <div className="flex flex-row pb-2">
              <p className="flex-[1] font-semibold">Efficient Project Management</p>
              <p className="flex-[2]">Organize tasks, timelines, and resources - all in one place with FlowerWork’s intuitive dashboard, keeping deadlines and progress on track.</p>
            </div>
            <div className="flex flex-row pb-2">
              <p className="flex-[1] font-semibold">Flexible Talent and Scalability</p>
              <p className="flex-[2]">Access verified professionals and scale projects seamlessly, whether for solo ventures or multi-team workflows.</p>
            </div>
            <div className="flex flex-row pb-2">
              <p className="flex-[1] font-semibold">Collaborative Workflows</p>
              <p className="flex-[2]">Streamline communication with real-time updates, file sharing, and feedback tools to stay aligned and productive.</p>
            </div>
            <div className="flex flex-row pb-2">
              <p className="flex-[1] font-semibold">Secure Data and Goal Tracking</p>
              <p className="flex-[2]">Protect your data while tracking project actions with clear documentation and customizable tools to achieve your goals.</p>
            </div>
          </div>
          {/* Background Image */}
          <div className="flex-[1.5] relative w-full">
            <Image
              src={offer}
              alt="sample-image"
              width={417}
              height={391}
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        {/* Mission Section */}
        <section className="p-8 flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Background Image */}
          <div className="flex-[1.5] relative w-full">
            <Image
              src={mission}
              alt="sample-image"
              width={432}
              height={391}
              className="w-full object-cover"
            />
          </div>
          <div  className="flex-[2] space-y-6">
            <h2 className="text-3xl font-bold mb-4">
              Our <span className="text-purplev1 font-bold">Mission</span>
            </h2>
            <hr className="border-t my-4"></hr>
            <div className="flex flex-row pb-2">
              <p className="flex-[1] font-semibold">Empowering Teams and Individuals</p>
              <p className="flex-[2]">Drive efficient project management and seamless collaboration, enabling teams and individuals to focus on what truly matters and achieve exceptional results.</p>
            </div>
            <div className="flex flex-row pb-2">
              <p className="flex-[1] font-semibold">Bridging Talent and Opportunity</p>
              <p className="flex-[2]">Bridge the gap between talent and opportunity by curating professional talent pools tailored to meet unique needs and exceed expectations.</p>
            </div>
            <div className="flex flex-row pb-2">
              <p className="flex-[1] font-semibold">Scaling Success with Flexibility</p>
              <p className="flex-[2]">Deliver adaptable solutions that evolve with you—scaling effortlessly from small tasks to complex workflows, empowering teams of any size to succeed.</p>
            </div>
            <div className="flex flex-row pb-2">
              <p className="flex-[1] font-semibold">Increase productivity efficiently</p>
              <p className="flex-[2]">Equipped with advanced features to streamline workflows, optimizing resource with seasoned experts, and tailored solutions, businesses drive efficiency and boost productivity.</p>
            </div>
          </div>
        </section>

        {/* Flowerwork Section */}
        <section className="p-8 flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="flex-[2] space-y-6">
            <h2 className="text-3xl font-semibold">
              Upcoming Features on <span className="text-purplev1 font-bold">FlowerWork</span>
            </h2>
            <hr className="border-t mb-4"></hr>
            <div className="flex flex-row pb-2">
              <p className="flex-[1] font-semibold">AI-Driven Task Management</p>
              <p className="flex-[2]">Elevate your entire project management with our AI tools, automating task creation, priority setting, precise forecasting, real time updates, etc.</p>
            </div>
            <div className="flex flex-row pb-2">
              <p className="flex-[1] font-semibold">Blockchain-Powered Talent Verification</p>
              <p className="flex-[2]">Build trust and transparency with blockchain-secured profiles and verified credentials for talent connections you can rely on.</p>
            </div>
            <div className="flex flex-row pb-2">
              <p className="flex-[1] font-semibold">Automated Talent Matching</p>
              <p className="flex-[2]">Let AI intelligently match your projects with the best-fit professionals based on skills, availability, and performance history, while automating your interview process.</p>
            </div>
            <div className="flex flex-row pb-2">
              <p className="flex-[1] font-semibold">Smart Contract Onboarding</p>
              <p className="flex-[2]">Simplify onboarding and collaboration with blockchain-powered smart contracts for secure and efficient agreements.</p>
            </div>
          </div>
          {/* Background Image */}
          <div className="flex-[1.5] relative w-full">             
            <Image
              src={flowerwork}
              alt="sample-image"
              width={434}
              height={434}
              className="w-full object-cover"
            />
          </div>
        </section>        
      </main>

      {/* Team Container */}
      <div className="flex flex-col items-center">
        <h1 className="font-montserrat text-2xl sm:text-[32px] font-bold text-white mb-4 sm:mb-6 sm:mt-16">
          Our Success Team
        </h1>
        {/* Pictures */}
        <div className="relative w-full flex flex-wrap justify-center gap-8">
          {/* Background Image */}
          {TEAM_MEMBERS.map((member, index) => (
            <TeamProfile
              key={index}
              name={member.name}
              role={member.role}
              imageSrc={member.imageSrc}
            />
          ))}
          {showAll && ALL_TEAM_MEMBERS.map((member, index) => (
            <TeamProfile 
              key={index} 
              name={member.name} 
              role={member.role} 
              imageSrc={member.imageSrc} />
          ))}
        </div>
        <Button onClick={toggleShowAll} className="bg-purplev1 hover:bg-purple-700 text-white px-4 py-2 mt-2 rounded">
          {showAll ? "Show Less" : "Show All"}
        </Button>
      </div>

      {/* Join Us Container */}
      <div className="pb-10 flex flex-col items-center">
        <h1 className="font-montserrat text-2xl sm:text-[32px] font-bold text-white mb-4 sm:mb-6 sm:mt-16">
          You can be one os us too!   
        </h1>          
        <Button className="bg-purplev1 hover:bg-purplev-700 text-white font-bold px-6 py-3">
          Collaborate with us
        </Button>
      </div>

      

      {/* Footer */}
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};
  
export default AboutUs;