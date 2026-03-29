import React from "react";

export default function Portfolio() { return ( <div className="min-h-screen bg-gray-100 text-gray-800"> {/* Navbar */} <nav className="bg-white shadow p-4 flex justify-between"> <h1 className="text-xl font-bold">Resmi R Menon</h1> <div className="space-x-4"> <a href="#about">About</a> <a href="#projects">Projects</a> <a href="#contact">Contact</a> </div> </nav>

{/* Hero Section */}
  <section className="text-center py-16 bg-blue-500 text-white">
    <h2 className="text-3xl font-bold">MERN Stack Developer (Fresher)</h2>
    <p className="mt-4">B.Tech CSE | CGPA: 7.29</p>
  </section>

  {/* About */}
  <section id="about" className="p-8">
    <h2 className="text-2xl font-semibold mb-4">About Me</h2>
    <p>
      I am a Computer Science and Engineering graduate with strong knowledge in HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, and React. I am currently learning MongoDB, Express, and
      Node.js to strengthen my MERN stack skills.
    </p>
  </section>

  {/* Skills */}
  <section className="p-8 bg-white">
    <h2 className="text-2xl font-semibold mb-4">Skills</h2>
    <ul className="grid grid-cols-2 gap-4">
      <li className="font-medium">HTML5</li>
      <li className="font-medium">CSS3</li>
      <li className="font-medium">JavaScript</li>
      <li className="font-medium">React.js</li>
      <li className="font-medium">Bootstrap</li>
      <li className="font-medium">Tailwind CSS</li>
      <li className="font-medium">REST API Integration</li>
      <li className="font-medium">JSON Server</li>
      <li className="font-medium">Redux</li>
      <li className="font-medium">Responsive Web Design</li>
      <li className="font-medium">State Management</li>
      <li className="font-medium">Components</li>
      <li className="font-medium">Hooks</li>
      <li className="font-medium">React Router</li>
      <li className="font-medium">Fetch API</li>
      <li className="font-medium">Async/Await</li>
      <li className="font-medium">Promises</li>
      <li className="font-medium">MongoDB, Express.js, Node.js (Basic Knowledge)</li>
    </ul>
  </section>

  {/* Projects */}
  <section id="projects" className="p-8">
    <h2 className="text-2xl font-semibold mb-6">Projects</h2>

    <div className="grid md:grid-cols-3 gap-6">
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
  <section id="contact" className="p-8 bg-white">
    <h2 className="text-2xl font-semibold mb-4">Contact</h2>
    <p>Email: resmirmenonrrm@gmail.com</p>
    <p>Phone: +91 7593006927</p>
    <p>GitHub: https://github.com/Resmi2003</p>
    <p>LinkedIn: https://www.linkedin.com/in/resmi-r-menon</p>
  </section>
</div>

); }