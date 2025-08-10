import React from "react";
import "./AboutMe.css";

// Step 1: Define the props shape (TypeScript)

type AboutMeProps = {
  name: string;
  bio: string;
};

const AboutMe: React.FC<AboutMeProps> = ({ name, bio }) => {
  return (
    <section className="about">
      <h2>About Me</h2>
      <p>
        <strong>{name}</strong>
      </p>
      <p>{bio}</p>
    </section>
  );
};
export default AboutMe;
