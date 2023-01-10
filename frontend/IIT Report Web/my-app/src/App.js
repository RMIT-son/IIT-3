import React from "react"
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills_jobs";
import Outcome from "./components/outcome";
import Reflect from "./components/reflection";
import Profile from "./components/profile";
import Tools from "./components/tools";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Profile />
      <About />
      <Skills />
      <Outcome />
      <Reflect />
      <Tools />
    </div>
  );
}

export default App;
