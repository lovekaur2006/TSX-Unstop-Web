// src/App.js
import React, { useState } from "react";
import axios from "axios";
import { motion, wrap } from "framer-motion";
import love from './public/images/love.png';
import project1 from './public/images/project1.png'
import project2 from './public/images/project2.png'
import project3 from './public/images/project3.png'
import project4 from './public/images/project4.png'

function App() {
  const [file, setFile] = useState(null);
  const projects = [
    {
      title: "Blood and Plasma Donation Management System",
      description: "Designed and developed a Blood and Plasma Donation Management System supporting over 500 users, enabling efficient donor registration, request management, and real-time inventory tracking. Implemented intelligent donor-recipient matching, reducing manual coordination by 70%, and integrated automated SMS/email notifications to improve emergency response time by 60%. Ensured secure access through role-based authentication for donors, receivers, and admins, while optimizing system performance to handle 100+ concurrent transactions with 99.9% uptime.",
      image: project1,
      role: "Backend Developer and Database Adminstrator",
      link: "https://github.com/lovekaur2006/Blood-donation-management-system"
    },
    {
      title: "Quiz conducting Web app",
      description: "Developed a dynamic Quiz Conducting Web App that enabled real-time quiz creation, participation, and evaluation for over 1,000 users. Implemented user roles for Admin, Instructor, and Student with secure login and dashboard access. Integrated automated scoring, timer-based quizzes, and instant feedback features, reducing manual grading time by 90%. Optimized backend performance to handle 200+ concurrent users, with a responsive UI ensuring a seamless experience across devices. Achieved 98% user satisfaction based on post-quiz surveys.",
      image: project2,
      role: "Frontend Developer",
      link: "https://github.com/lovekaur2006/Quiz-Conducting-App"
    },
    {
      title: "Password Generator",
      description: "dynamic password generator application built with React that allows users to create secure, customizable passwords. The app features a user-friendly interface with options to select the desired password length and include various character types such as uppercase letters, lowercase letters, numbers, and special symbols. It uses React’s state management to update the password in real-time based on user preferences, ensuring instant feedback and interactivity. Additionally, the application includes a Copy to Clipboard feature, allowing users to easily use the generated password elsewhere.",
      image: project3,
      role: "Frontend Developer",
      link: "https://github.com/lovekaur2006/passwordGenerators.git"
    },
    {
      title: "Alpha Intern Internship Projects",
      description: "Developed 6 JavaScript projects: Countdown Timer, Myntra Clone,Portfolio Website, Spotify clone, To do list , unit Convertor",
      image: project4,
      role: "Frontend Developer",
      link: "https://github.com/lovekaur2006/Alpha-Intern-Internship-Program"
    },
  ];

  const handleUpload = async () => {
    if (!file) return alert("Please choose a file.");
    const formData = new FormData();
    formData.append("resume", file); 

    try {
      const response = await axios.post("http://localhost:5000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data", 
        },
      });
      alert(response.data);
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("Upload failed");
    }
  };

  return (
    <div className="min-h-screen w-screen bg-gradient-to-b from-indigo-900 to-indigo-600 text-white font-sans">
      <nav className="flex justify-between items-center px-6 py-4 bg-indigo-950 shadow-lg">
        <h1 className="text-2xl font-bold tracking-widest">Portfolio.</h1>
        <div className="space-x-6">
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#upload" className="hover:underline">Resume</a>
        </div>
      </nav>

      <header className="text-center py-20">
        <motion.h2
          className="text-4xl font-extrabold mb-4"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm Lovepreet Kaur
        </motion.h2>
        <div style={{ display: 'flex', alignItems: 'center', alignContent: 'center', justifyContent: 'center', }}>
          <img src={love} alt="image" style={{ width: '20rem', height: '25rem', borderRadius: '50rem' }} />
        </div>
        <motion.p
          className="text-xl max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Web Developer,Coder,Student
          {<br />}
          Enthusiast to become a skilled web developer to
          create interactive and visually appealing websites!!
        </motion.p>

        <a href="/resume.pdf" download>
          <button className="mt-6 px-6 py-2 bg-indigo-700 hover:bg-indigo-800 rounded-full shadow-xl transition duration-300">
            Download Resume
          </button>
        </a>


      </header>

      <section id="projects" className="py-16 px-6">
        <h3 className="text-3xl font-bold text-center mb-12 underline">Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="bg-white text-gray-800 rounded-xl shadow-2xl p-6 hover:scale-105 transition transform duration-500"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <img src={project.image} alt={project.title} className="rounded-md mb-4 w-full h-48 object-cover" />
              <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
              <p className="text-sm mb-2">{project.description}</p>
              <p className="text-sm font-medium text-indigo-800">Role: {project.role}</p>
              <a href={project.link} target="_blank" rel="noreferrer" className="inline-block mt-3 text-indigo-600 hover:underline">
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="about" className="text-center py-16 px-6 bg-indigo-800">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-3xl font-bold mb-4">About Me</h3>
          <p className="max-w-xl mx-auto text-lg">
            Hello! My name is Lovepreet Kaur, and currently I am persuing BTech. from Maharishi Markandeshwar
            (Deemed To be University).I am diving into the exciting world of web
            development. My focus is on learning front-end development, mastering HTML, CSS, and JavaScript to
            create interactive and visually appealing web pages. Additionally, I am expanding my programming
            skills by learning C++, React.js, Node.js, MySQL,Tailwind CSS,git/GitHub.
            {<br />}
            {<br />}
            Beyond my technical pursuits, I have a passion for dancing and singing, which bring joy and balance
            to my life. I believe that creativity in the arts complements my enthusiasm for coding, helping me
            approach problems with a unique perspective.
            {<br />}
            {<br />}
            I am very hardworking and enthusiastic, always eager to learn and take on new challenges. My goal is
            to continuously grow my skill set and contribute to projects that make a positive impact.
          </p>
        </motion.div>
      </section>

      <section id="upload" className="py-16 px-6 text-center">
        <motion.div
          className="max-w-md mx-auto bg-white text-gray-900 p-8 rounded-lg shadow-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl font-bold mb-4">Upload Resume</h3>
          <input
            type="file"
            className="mb-4"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <button
            onClick={handleUpload}
            className="bg-indigo-700 hover:bg-indigo-800 text-black px-4 py-2 rounded-full shadow-lg transition"
          >
            Upload
          </button>
        </motion.div>
      </section>

      <footer className="text-center py-4 bg-indigo-950">
        <p className="text-sm"> Built with love & Tailwind.</p>
      </footer>
    </div>
  );
}

export default App;