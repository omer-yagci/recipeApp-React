import React from "react";
import coding from "../../assets/coding.svg";
import classes from "../About/about.module.scss";

const About = () => {
  return (
    <section className={classes.container}>
      <img src={coding} alt="coding" />

      <h2>
        About Software Developer
        <span className={classes.name}> Ömer Kağan YAĞCI</span>
      </h2>
      <article className={classes.article}>
        <h1>I'm Ömer</h1>
        <p>I'm currently learning Full-Stack Development Languages.</p>
        <p>I've already known JS,ReactJS,HTML,Css,Sass,Booststrap5</p>
        <p>
          <span className={classes.email}>Send email : </span>
          omeryagci3295@gmail.com
        </p>
      </article>
    </section>
  );
};

export default About;
