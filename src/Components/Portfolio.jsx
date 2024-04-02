/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/schreibtisch.jpg";

const imageAltText = "Schreibtisch mit vielen Utensilien";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Build a new data center from scratch",
    description:
      "In my first internship I helped to build a new data center from scratch at a small company called Geneart AG, now better known as Thermo Fisher.",
    url: "https://www.thermofisher.com/de/de/home.html",
  },
  {
    title: "Use of AI- and ML-Tools to forecast products",
    description:
      "As project manager I lead a diverse team of five people, who realizes a forecast solution for the whole product range of Brita Vivreau.",
    url: "https://www.brita.de/wasserspender",
  },
  {
    title: "Deliver trainings througout Germany",
    description:
      "As a trainer and facilitator I deliver several topics like leadership, sales, PowerPoint, Excel and PowerBI trainings to students.",
    url: "https://bdsu.de/trainerakademie/",
  },
  {
    title: "Development of a mobile app for a train company",
    description:
      "As project leader I was responsible for an IT team of four people, who developed a mobile app for dispatchers to a regional train company.",
    url: "https://www.agilis.de/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover", animation: "1s ease-out 0s 1 slideInLeft" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
