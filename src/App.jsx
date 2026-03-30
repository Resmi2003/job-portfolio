import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      
      {/* Navbar */}
      <nav className="bg-white shadow p-4 flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-lg md:text-xl font-bold">Resmi R Menon</h1>
        <div className="space-x-4 mt-2 md:mt-0">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-10 md:py-16 bg-blue-500 text-white px-4">
        <h2 className="text-2xl md:text-4xl font-bold">
          MERN Stack Developer (Fresher)
        </h2>
        <p className="mt-3 md:mt-4 text-lg font-semibold">B.Tech CSE | CGPA: 7.29</p>
      </section>

      {/* About */}
      <section id="about" className="p-4 md:p-8">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">About Me</h2>
        <p>
          I am a Computer Science and Engineering graduate with strong knowledge
          in HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, and React. I am
          currently learning MongoDB, Express, and Node.js to strengthen my MERN
          stack skills.
        </p>
      </section>

      {/* Skills */}
      <section className="p-4 md:p-8 bg-white">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Skills</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Bootstrap</li>
          <li>Tailwind CSS</li>
          <li>REST API Integration</li>
          <li>JSON Server</li>
          <li>Redux</li>
          <li>Responsive Web Design</li>
          <li>State Management</li>
          <li>Hooks</li>
          <li>React Router</li>
          <li>Fetch API</li>
          <li>Async/Await</li>
          <li>Promises</li>
          <li>MongoDB, Express.js, Node.js (Basic Knowledge)</li>
        </ul>
      </section>

      {/* Projects */}
      <section id="projects" className="p-4 md:p-8">
        <h2 className="text-xl md:text-2xl font-semibold mb-6">Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 shadow rounded">
            <h3 className="font-bold">Todo App</h3>
            <p>CRUD operations using React.</p>
          </div>

          <div className="bg-white p-4 shadow rounded">
            <h3 className="font-bold">Smart Wallet</h3>
            <p>Budget calculator with expense tracking.</p>
          </div>

          <div className="bg-white p-4 shadow rounded">
            <h3 className="font-bold">Movie Search</h3>
            <p>React app using API integration.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="p-4 md:p-8 bg-white mt-40">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Contact</h2>
        <p>Email: resmirmenonrrm@gmail.com</p>
        <p>Phone: +91 7593006927</p>
        <p>GitHub: https://github.com/Resmi2003</p>
        <p>LinkedIn: https://www.linkedin.com/in/resmi-r-menon</p>
      </section>

    </div>
  );
}