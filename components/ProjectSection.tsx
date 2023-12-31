import React from "react"
import Image from "next/image"
import Link from "next/link"
//import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Thankful Thoughts",
    description:
      "ThankfulThoughts is a web app that generates an appreciative sentence of something or someone you are thankful for.",
    image: "/thankfulthoughts.png",
    github: "https://github.com/hqasmei/thankful-thoughts",
    link: "https://thankfulthoughts.io/",
  },
  {
    name: "PlatoIO",
    description: "PlatoIO is a to do list app that built using the PERN stack.",
    image: "/platoio.png",
    github: "https://github.com/hqasmei/platoio",
    link: "https://platoio.com/register",
  },
  {
    name: "Kator Family Photos",
    description:
      "Kator Family Photos is a photos and video digitization service in the LA area.",
    image: "/familyphotos.png",
    github: "https://github.com/hqasmei/katorfamilyphotos",
    link: "https://katorfamilyphotos.com/",
  },
]
const ProjectSection = () => {
  return (
    <section id="projects">
         <h1 className="text-center font-bold text-4xl ">Projects
           <hr className="w-6 mx-auto bg-teal-500 my-4 h-1 border-0 rounded" />
        </h1>

        <div className="flex flex-col space-y-28 ">
          {projects.map((project, index) => {
            return(
            <div key={index}>
              <div className="flex flex-col md:flex-row md:space-x-12">
                <div className="md:w-1/2">
                  <Link href={project.link} target="_blank">
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={1000}
                      height={1000}
                      className="rounded-xl shadow-xl hover:opacity-70 mt-8"
                    />
                  </Link>
                </div>
                <div className="mt-12 md:w-1/2">
                 <h1 className="text-4xl font-bold mb-4">{project.name}</h1>
                 <p className="text-xl mb-4 text-neutral-600">{project.description}</p>
                 <div className="flex flex-row space-x-4 align-bottom">
                  <Link href={project.github} target="_blank">
                    <BsGithub 
                      size={30}
                      className="hover:tanslate-y-1 transition-transform cursor-pointer"
                    />
                  </Link>
                  <Link href={project.link} target="_blank">
                    <BsArrowUpRightSquare
                      size={30}
                      className="hover:tanslate-y-1 transition-transform cursor-pointer"
                    />
                  </Link>
                 </div>
                </div>
              </div>
            </div>
            )
          })}
        </div>
    </section>
  )
}

export default ProjectSection