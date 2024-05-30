import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        I am Harshith, currently doing an internship at Smartail Pvt Ltd. As part of my learning journey, I have completed a project website using React.js. This project was developed following a comprehensive Udemy course by Brad Traversy. The website has been successfully hosted on the Vercel platform, ensuring high performance and reliability.

This project showcases various React.js features and best practices learned during the course. It includes dynamic content, interactive elements, and a responsive design. The development process involved state management, API integration, and component-based architecture. Completing this project has significantly enhanced my skills in React.js and modern web development.

The website features a clean and intuitive user interface, leveraging React's capabilities for seamless navigation and user experience. I implemented Redux for efficient state management and used Axios for handling API requests. Additionally, I employed React Router for dynamic routing and integrated CSS modules for modular and maintainable styling.

Throughout the development, I focused on writing clean, maintainable code and following industry-standard practices. I also utilized Git for version control and collaborated with peers for code reviews and feedback.

Completing this project has given me hands-on experience in full-stack development, and I am excited to apply these skills in real-world applications and future projects at Smartail Pvt Ltd. This project has not only solidified my understanding of React.js but also equipped me with the confidence to tackle more complex web development challenges.
        </p>
      </div>
    </div>
  );
}

export default About;
