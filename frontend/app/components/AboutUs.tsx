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
import adam from "../public/adam.png"
import carmen from "../public/carmen.png"
import francisco from "../public/francisco.png"
import gabriela from "../public/gabriela.png"
import hrigved from "../public/hrigved.png"
import iryna from "../public/iryna.png"
import kevin from "../public/kevin.png"
import rona from "../public/rona.jpg"
import rukaiya from "../public/rukaiya.png"
import stefan from "../public/stefan.png"

export const TEAM_MEMBERS = [
  {
    name: "Rukaiya Mansoor",
    role: "Project Manager",
    imageSrc: rukaiya,
  },
  {
    name: "Carmen Schäfer",
    role: "UX/UI Designer",
    imageSrc: carmen,
  },
  {
    name: "Hrigved Nair",
    role: "Marketing and Growth",
    imageSrc: hrigved,
  },
]

export const ALL_TEAM_MEMBERS = [
  {
    name: "Francisco Padilla",
    role: "CEO",
    imageSrc: francisco,
  },
  {
    name: "Rukaiya Mansoor",
    role: "Project Manager",
    imageSrc: rukaiya,
  },
  {
    name: "Carmen Schäfer",
    role: "UX/UI Designer",
    imageSrc: carmen,
  },
  {
    name: "Hrigved Nair",
    role: "Marketing and Growth",
    imageSrc: hrigved,
  },
  {
    name: "Stefan Andrei",
    role: "Full stack Developer",
    imageSrc: stefan,
  },
  {
    name: "Adam Louhichi",
    role: "UX/UI Designer",
    imageSrc: adam,
  },
  {
    name: "Gabriela Beran",
    role: "HR & Recruitment",
    imageSrc: gabriela,
  },
  {
    name: "Kevin Kongpachith",
    role: "UX/UI Designer",
    imageSrc: kevin,
  },
  {
    name: "Iryna Voitsikhovska",
    role: "UX/UI Designer",
    imageSrc: iryna,
  },
  {
    name: "Rona Zong",
    role: "Fullstack Developer",
    imageSrc: rona,
  },
]

const AboutUs = () => {
  const [showAll, setShowAll] = useState(false);
  const toggleShowAll = () => {setShowAll(!showAll)};

  return (
    <div className="w-full bg-bgdarkv1 text-white text-base">
      {/* Header Section */}
      <header className="relative z-30">
        <Navbar className="z-40" />
      </header>

      {/* Hero Image Container */}
      <div className="relative overflow-hidden">
        {/* Background Image */}
        <Image
          src={heroimage}
          alt="sample-image"
          className="w-full object-cover"
        />

        {/* Content Overlay */}
        <div className="absolute top-20 left-0 flex flex-col items-start gap-10 mx-52 py-10">
          <div className="w-[409px] h-[54px]">
            <Image 
              src={logo} 
              alt="logo"
              // height={90}
              className="object-cover"
            />
          </div>
          <div className="font-bold space-y-8 text-[32px] mt-5">
            <p>Is the all-in-one platform to streamline workflows, connect with</p>
            <p>top talents, foster seamless collaboration, assign tasks</p>
            <p>effortlessly, and securely track progress.</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="w-full flex flex-col items-center">
        {/* Offer Section */}
        <section className="flex flex-row items-center justify-center gap-10 mx-52 mt-10 mb-28">
          <div className="flex-[3]">
            <h2 className="text-[48px] font-bold">
              What <span className="text-purplev1">We Offer Now</span>
            </h2>
            <hr className="border-t-8 mt-8 mb-14"></hr>
            <div className="space-y-8">
              <div className="flex flex-row pb-2 gap-4">
                <p className="flex-[1] font-bold text-[24px]">Efficient Project Management</p>
                <p className="flex-[2] font-semibold text-[20px]">Organize tasks, timelines, and resources - all in one place with FlowerWork’s intuitive dashboard, keeping deadlines and progress on track.</p>
              </div>
              <div className="flex flex-row pb-2 gap-4">
                <p className="flex-[1] font-bold text-[24px]">Flexible Talent and Scalability</p>
                <p className="flex-[2] font-semibold text-[20px]">Access verified professionals and scale projects seamlessly, whether for solo ventures or multi-team workflows.</p>
              </div>
              <div className="flex flex-row pb-2 gap-4">
                <p className="flex-[1] font-bold text-[24px]">Collaborative Workflows</p>
                <p className="flex-[2] font-semibold text-[20px]">Streamline communication with real-time updates, file sharing, and feedback tools to stay aligned and productive.</p>
              </div>
              <div className="flex flex-row pb-2 gap-4">
                <p className="flex-[1] font-bold text-[24px]">Secure Data and Goal Tracking</p>
                <p className="flex-[2] font-semibold text-[20px]">Protect your data while tracking project actions with clear documentation and customizable tools to achieve your goals.</p>
              </div>
            </div>
          </div>
          {/* Background Image */}
          <div className="flex-[1.5] w-[417px] h-[391px] overflow-hidden">
            <Image
              src={offer}
              alt="sample-image"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Mission Section */}
        <section className="flex flex-row items-center justify-center gap-10 mx-52 mt-10 mb-28">
          {/* Background Image */}
          <div className="flex-[1.5] w-[432px] h-[391px] overflow-hidden">
            <Image
              src={mission}
              alt="sample-image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-[3]">
            <h2 className="text-[48px] font-bold">
              Our <span className="text-purplev1 font-bold">Mission</span>
            </h2>
            <hr className="border-t-8 mt-8 mb-14"></hr>
            <div className="space-y-8">
              <div className="flex flex-row pb-2 gap-4">
                <p className="flex-[1] font-bold text-[24px]">Empowering Teams and Individuals</p>
                <p className="flex-[2] font-semibold text-[20px]">Drive efficient project management and seamless collaboration, enabling teams and individuals to focus on what truly matters and achieve exceptional results.</p>
              </div>
              <div className="flex flex-row pb-2 gap-4">
                <p className="flex-[1] font-bold text-[24px]">Bridging Talent and Opportunity</p>
                <p className="flex-[2] font-semibold text-[20px]">Bridge the gap between talent and opportunity by curating professional talent pools tailored to meet unique needs and exceed expectations.</p>
              </div>
              <div className="flex flex-row pb-2 gap-4">
                <p className="flex-[1] font-bold text-[24px]">Scaling Success with Flexibility</p>
                <p className="flex-[2] font-semibold text-[20px]">Deliver adaptable solutions that evolve with you—scaling effortlessly from small tasks to complex workflows, empowering teams of any size to succeed.</p>
              </div>
              <div className="flex flex-row pb-2 gap-4">
                <p className="flex-[1] font-bold text-[24px]">Increase productivity efficiently</p>
                <p className="flex-[2] font-semibold text-[20px]">Equipped with advanced features to streamline workflows, optimizing resource with seasoned experts, and tailored solutions, businesses drive efficiency and boost productivity.</p>
              </div>
            </div>
            
          </div>
        </section>

        {/* Flowerwork Section */}
        <section className="flex flex-row items-center justify-center gap-10 mx-52 mt-10 mb-28">
          <div className="flex-[3]">
            <h2 className="text-[48px] font-bold">
              Upcoming Features on <span className="text-purplev1 font-bold">FlowerWork</span>
            </h2>
            <hr className="border-t-8 mt-8 mb-14"></hr>
            <div className="space-y-8">
              <div className="flex flex-row pb-2 gap-4">
                <p className="flex-[1] font-bold text-[24px]">AI-Driven Task Management</p>
                <p className="flex-[2] font-semibold text-[20px]">Elevate your entire project management with our AI tools, automating task creation, priority setting, precise forecasting, real time updates, etc.</p>
              </div>
              <div className="flex flex-row pb-2 gap-4">
                <p className="flex-[1] font-bold text-[24px]">Blockchain-Powered Talent Verification</p>
                <p className="flex-[2] font-semibold text-[20px]">Build trust and transparency with blockchain-secured profiles and verified credentials for talent connections you can rely on.</p>
              </div>
              <div className="flex flex-row pb-2 gap-4">
                <p className="flex-[1] font-bold text-[24px]">Automated Talent Matching</p>
                <p className="flex-[2] font-semibold text-[20px]">Let AI intelligently match your projects with the best-fit professionals based on skills, availability, and performance history, while automating your interview process.</p>
              </div>
              <div className="flex flex-row pb-2 gap-4">
                <p className="flex-[1] font-bold text-[24px]">Smart Contract Onboarding</p>
                <p className="flex-[2] font-semibold text-[20px]">Simplify onboarding and collaboration with blockchain-powered smart contracts for secure and efficient agreements.</p>
              </div>
            </div>
          </div>
          {/* Background Image */}
          <div className="flex-[1.5] w-[434px] h-[434px] overflow-hidden">             
            <Image
              src={flowerwork}
              alt="sample-image"
              className="w-full h-full object-cover"
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