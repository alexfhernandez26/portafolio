import Image from "next/image";
import React from "react";

const skills = [
    { skill: "HTML" },
    { skill: "CSS" },
    { skill: "JavaScript" },
    { skill: "TypeScript" },
    { skill: "React" },
    { skill: "Next.js" },
    { skill: "Tailwind CSS" },
    { skill: "Git" },
    { skill: "GitHub" },
  ]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="py-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl ">About me
        <hr className="w-6 mx-auto bg-teal-500 my-4 h-1 border-0 rounded" />
        </h1>
        <div className="flex flex-col md:flex-row space-y-10 items-stretch align-top md:text-left md:p-4 md:space-y-0 md:space-x-10 ">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">Get to know me!</h1>
            <p>
            Hi, my name is Hosna and I am a {" "}
            <span className="font-bold">{"highly ambitious"}</span>,
            <span className="font-bold">{" self-motivated"}</span>, 
            <span className="font-bold">{" and driven "}</span>
            software engineer based in Santo Domingo, DR.
            </p>
            <br />
            <p>
                I graduated from California State University, 
                Northridge in 2019 with a BS in Computer Engineering and have been working 
                in the field ever since.
            </p>
            <br />
            <p>
                I have a wide range of hobbies and passions that keep me busy. From reading, playing sports, 
                traveling, to making YouTube videos, I am always seeking new experiences
                and love to keep myself engaged and learning new things.
            </p>
            <br />
            <p>
                I believe that you should {" "}
                <span className="font-bold text-teal-500">never stop growing </span> 
                and that's what I strive to do, 
                I have a passion for technology and a desire to always push the limits of what 
                is possible. I am excited to see where my caree
                r takes me and am always open to new opportunities. 
            </p>
          </div>
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center md:justify-start">
                {skills.map((item,idx) => {
                    return (
                        <p key={idx} className="bg-gray-200 px-4 py-2 mr-2 mt-2 rounded text-gray-500 font-semibold">{item.skill}</p>
                    )
                })}
            </div>    
            <div className="mt-20">
             <Image 
              src="/avatar.jpg"  
              alt="img" 
              width={300} 
              height={300}   
              className="hidden md:block "
              />
            </div>                  
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
