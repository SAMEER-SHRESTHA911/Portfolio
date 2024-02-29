import resume from '../../data/Sameer Shrestha -cv.pdf';

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Sameer Shrestha</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            I'm currently studying in Thapathali Engineering Campus.
            <br /> An enthusiast...😁
          </p>
        </div>
        <button className="btn btn-primary">
          <a href=""download ="resume">Download CV
          </a>
        </button>
      </div>
      <div className="hero--section--img">
        <img src="./img/farewell12.jpg" alt="Me" />
      </div>
    </section>
  );
}
