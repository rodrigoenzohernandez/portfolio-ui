// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <body>
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
              Show navigation
            </a>
            <a className="mobile-btn" href="#home" title="Hide navigation">
              Hide navigation
            </a>

            <ul id="nav" className="nav">
              <li className="current">
                <a className="smoothscroll" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#resume">
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">I'm Rodrigo Hernandez.</h1>
              <h3>
                I'm a <span>Software Engineer</span> that loves{" "}
                <span> backend development</span>. Actually I'm working with{" "}
                <span>NodeJS</span> and <span>Express. </span>
                Moreover I have some experience at front end development with
                React. You can scroll and learn more about me.
              </h3>
              <hr />
              <ul className="social">
                <li>
                  <a href="https://www.linkedin.com/in/rodrigoenzohernandez/">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/rodrigoenzohernandez">
                    <i className="fa fa-github"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <p className="scrolldown">
            <a className="smoothscroll" href="#about">
              <i className="icon-down-circle"></i>
            </a>
          </p>
        </header>

        {/* About Section  */}
        <section id="about">
          <div className="row">
            <div className="three columns">
              <img className="profile-pic" src="images/profilepic.jpg" alt="" />
            </div>

            <div className="nine columns main-col">
              <h2>About Me</h2>

              <p>
                Responsible, organized, with the ability to work in a team and
                eager to keep learning.
              </p>

              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>Buenos Aires</span>
                    <br />
                    <span>1123908349</span>
                    <br />
                    <span>rodrigoenzohernandez@gmail.com</span>
                  </p>
                </div>

                <div className="columns download">
                  <p>
                    <a
                      href="https://drive.google.com/file/d/18NRm8Z-XitwlVuH0S1nwI39GIOst4EKO/view?usp=sharing"
                      className="button"
                    >
                      <i className="fa fa-download"></i>Download Resume
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="resume">
        
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Work</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>Endava</h3>
                  <p className="info">
                    Software Developer <span>&bull;</span>{" "}
                    <em className="date">Nov 2021 - Present</em>
                  </p>
                  <p>
                    Techs: NodeJS
                  </p>
                </div>
              </div>

              <div className="row item">
                <div className="twelve columns">
                  <h3>WarnerMedia</h3>
                  <p className="info">
                    Full Stack Developer and Cloud Admin <span>&bull;</span>{" "}
                    <em className="date">May 2021 - Nov 2021</em>
                  </p>
                  <p>
                    Internal web pages development. Techs: NodeJS - Python -
                    React - GitHub - MongoDB
                  </p>
                </div>
              </div>

              <div className="row item">
                <div className="twelve columns">
                  <h3>Euda IT</h3>
                  <p className="info">
                    Software Developer <span>&bull;</span>{" "}
                    <em className="date">Jan 2021 - May 2021</em>
                  </p>

                  <p>
                    Develop new functionalities and fix bugs at different
                    projects. Technologies: NodeJS - Sails.js - Angular -
                    MongoDB - MySQL - Bitbucket
                  </p>
                </div>
              </div>

              <div className="row item">
                <div className="twelve columns">
                  <h3>Telecom Argentina</h3>
                  <p className="info">
                    Implementation Analyst <span>&bull;</span>{" "}
                    <em className="date">Feb 2020 - Jan 2021</em>
                  </p>

                  <p>
                    Implement different technological solutions on Flow
                    platform, such as configurations, upgrades, creation of VMs.
                  </p>
                </div>
              </div>

              <div className="row item">
                <div className="twelve columns">
                  <h3>Telecom Argentina</h3>
                  <p className="info">
                    Process Analyst <span>&bull;</span>{" "}
                    <em className="date">Apr 2019 - February 2020</em>
                  </p>
                  <p>
                    Lead the definition, analysis, implementation, execution and
                    testing of processes, develop functional documents and
                    manage SQL Server databases.
                  </p>
                </div>
              </div>

              <div className="row item">
                <div className="twelve columns">
                  <h3>Telecom Argentina</h3>
                  <p className="info">
                    NOC help desk operator <span>&bull;</span>{" "}
                    <em className="date">Oct 2016 - Apr 2019</em>
                  </p>
                  <p>
                    Analyze problems in the customer network, perform
                    troubleshooting, dispatch and provide support to field
                    technicians, check Cisco and Juniper Routers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>Digital House Coding School</h3>
                  <p className="info">
                    FullStack Web Developer <span>&bull;</span>{" "}
                    <em className="date">Dec 2020</em>
                  </p>
                </div>
              </div>

              <div className="row item">
                <div className="twelve columns">
                  <h3>Universidad Abierta Interamericana</h3>
                  <p className="info">
                    Ingenieria en Sistemas Informaticos <span>&bull;</span>{" "}
                    <em className="date">Mar 2015 Dec 2019</em> 
                  </p>
                </div>
              </div>
            </div>
          </div>

        </section>

        <footer>
          <div className="row">
            <div className="twelve columns">
              <ul className="social-links">
                <li>
                  <a href="https://www.linkedin.com/in/rodrigoenzohernandez/">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/rodrigoenzohernandez">
                    <i className="fa fa-github"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div id="go-top">
              <a className="smoothscroll" title="Back to Top" href="#home">
                <i className="icon-up-open"></i>
              </a>
            </div>
          </div>
        </footer>
      </body>
    </div>
  );
}

export default App;
