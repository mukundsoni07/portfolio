import React from "react";
import expense from "../assets/expense-tracker.png";
import blog from "../assets/blog.png";
import dictionary from "../assets/dictionary.png";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    name: "Expense Tracker",
    technologies: "React Js, Tailwind CSS",
    image: expense,
    github: "https://github.com/mukundsoni07/Expense-Tracker",
    link: "https://expense-tracker-pi-tawny.vercel.app/",
  },
  {
    id: 2,
    name: "Dictionary",
    technologies: "React JS, Material UI",
    image: dictionary,
    github: "https://github.com/mukundsoni07/Dictionary",
    link: "https://dictionary-ivory-eight.vercel.app/",
  },
  {
    id: 3,
    name: "Blog App",
    technologies: "React JS, Tailwind CSS",
    image: blog,
    github: "https://github.com/mukundsoni07/Blog-App",
    link: "https://blog-app-jet-gamma.vercel.app/",
  },
  {
    id: 4,
    name: "Chat App",
    technologies: "React JS, Tailwind CSS",
    image: blog,
    github: "https://github.com/mukundsoni07/chat-app",
    link: "https://chat-app-iota-ebon.vercel.app/",  
  }
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 
              w-full h-48 object-cover" />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <Link to={project.github} className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full mr-4" target="_blank" 
              rel="noopener noreferrer">GitHub</Link>
              <Link to={project.link} className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" 
              rel="noopener noreferrer">Link</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
