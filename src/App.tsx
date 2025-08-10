import React from "react";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <AboutMe
          name="Nyunt Sein"
          bio="I’m a detail-oriented Frontend Developer with over 2 years of hands-on experience building responsive, accessible, and high-performance web applications. Skilled in React, JavaScript, TypeScript, and CSS, I aim to create seamless user experiences and collaborate with teams to deliver impactful products.
"
        />
      </main>
    </div>
  );
};

export default App;
