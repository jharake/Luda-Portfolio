import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { isMobile } from "react-device-detect";
import "./App.css";
import bfIcon from "./assets/bf1.svg";
import {
  Animator,
  Fade,
  MoveIn,
  MoveOut,
  ScrollContainer,
  ScrollPage,
  Sticky,
  Zoom,
  ZoomIn,
  ZoomOut,
  batch,
} from "react-scroll-motion";
import ProjectDetails from "./ProjectDetails";

export const projects = [
  {
    name: "residential",
    name2: "ARCHITECT’S RESIDENTIAL ONE FLOOR HOUSE",
    date: "2022",
    images: [
      "/imgs/res1.png",
      "/imgs/res2.png",
      "/imgs/res3.png",
      "/imgs/res4.png",
      "/imgs/res5.png",
      "/imgs/res6.png",
    ],
  },
  {
    name: "church",
    name2: "RELEVE OF MAR ELIAS CHURCH IN HADATH",
    date: "2022",
    images: [
      "/imgs/church1.png",
      "/imgs/church2.png",
      "/imgs/church3.png",
      "/imgs/church4.png",
      "/imgs/church5.png",
      "/imgs/church6.png",
    ],
  },
  {
    name: "kiosk",
    name2: "KIOSK IN SANAYA PARK IN BEIRUT",
    date: "2022",
    images: [
      "/imgs/kiosk1.png",
      "/imgs/kiosk2.png",
      "/imgs/kiosk3.png",
      "/imgs/kiosk4.png",
    ],
  },
  {
    name: "dance-studio",
    name2: "RESEDENTIAL HOUSE WITH A DANCE STUDIO BUSINESS",
    date: "2022",
    images: [
      "/imgs/dance1.png",
      "/imgs/dance2.png",
      "/imgs/dance3.png",
      "/imgs/dance4.png",
    ],
  },
  {
    name: "fine-arts-school",
    name2: "nater your input",
    date: "2022",
    images: ["/imgs/FAS1.png", "/imgs/FAS2.png", "/imgs/FAS3.png"],
  },
  {
    name: "AMIR FAKHERDINNE’S PALACE",
    name2: "nater your input",
    date: "2022",
    images: [
      "/imgs/Adap1.png",
      "/imgs/Adap2.png",
      "/imgs/Adap3.png",
      "/imgs/Adap4.png",
    ],
  },
  {
    name: "museum",
    name2: "nater your input",
    date: "2022",
    images: [
      "/imgs/museum1.png",
      "/imgs/museum2.png",
      "/imgs/museum3.png",
      "/imgs/museum4.png",
      "/imgs/museum5.png",
    ],
  },
  {
    name: "dormitory",
    name2: "nater your input",
    date: "2022",
    images: [
      "/imgs/dorm1.png",
      "/imgs/dorm2.png",
      "/imgs/dorm3.png",
      "/imgs/dorm4.png",
    ],
  },
];

const MainPage = () => {
  const navigate = useNavigate();

  const handleSeeMoreClick = (projectName) => {
    const project = projects.find((proj) => proj.name === projectName);
    if (project) {
      localStorage.setItem("scrollPosition", window.scrollY);
      navigate(`/project/${projectName}`);
    }
  };

  useEffect(() => {
    const savedPosition = localStorage.getItem("scrollPosition");
    if (savedPosition) {
      window.scrollTo(0, parseInt(savedPosition, 10));
      localStorage.removeItem("scrollPosition");
    }
  }, []);

  return (
    <>
      <ScrollContainer snap={isMobile ? "mandatory" : "proximity"}>
        <ScrollPage>
          <div className="container">
            <Animator animation={batch(Fade(), MoveOut(0, -1000))}>
              <h1 className="fade-in">
                {" "}
                Ludm
                <span className="icon-container">
                  i<img src={bfIcon} className="icon" alt="bf1" />
                </span>
                la Semaan
              </h1>
              <div className="fade-in" id="imgCont">
                <img src="./imgs/luda0.png" alt="Ludmila Semaan" />
              </div>
            </Animator>
            <Animator animation={batch(Fade(), MoveOut(0, 0))}>
              <h2 className="fade-in">PORTFOLIO</h2>
              <h3 className="fade-in">ARCHITECT</h3>
              {/* <div>
                <button className="scroll">V V V</button>
              </div> */}
            </Animator>
          </div>
        </ScrollPage>
        <ScrollPage>
          <div id="aboutmeContainer">
            <Animator animation={batch(Fade(), MoveIn(1000, 300))}>
              <div id="imgblockAboutme"
                style={{ display: "flex", flexDirection: "column", gap: "5vh" }}
              >
                <img
                  className="bw"
                  style={{
                    rotate: "2deg",
                    maxHeight: "36vh",

                  }}
                  src="./imgs/luda2.jpg"
                  alt="aboutMe"
                />
                <img
                  className="bw"
                  style={{
                    rotate: "-7deg",

                  }}
                  src="./imgs/luda3.jpg"
                  alt="aboutMe"
                />
              </div>
            </Animator>
            <div id="textblockAboutme">
              <Animator animation={batch(MoveIn(-600, 200))}>
                <h2 id="aboutMe">
                  A LITTLE ABOUT{" "}
                  <span style={{ fontFamily: "Arsenic", fontWeight: "900" }}>
                    {" "}
                    ME{" "}
                  </span>
                </h2>
              </Animator>
              <Animator animation={batch(MoveIn(0, 800))}>
                <p>
                  A multi-tasking adult passionate about life and my work, I am
                  dedicated to everything I engage in, with excellent
                  communication and organizational skills. I have a proactive
                  attitude, able to work under any circumstances, and find
                  positive ways to stimulate and engage with people. I began my
                  journey in an interesting but ultimately unsuitable field for
                  me, but I eventually discovered my true passion, and here I
                  am.
                </p>
              </Animator>
            </div>
            <img
              className="bw"
              style={{
                rotate: "-7deg",
                maxHeight: "60%",
              }}
              src="./imgs/luda1.png"
              alt="aboutMe"
            />
          </div>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={batch(Fade())}>
            <h1 className="title">My Projects</h1>
          </Animator>
        </ScrollPage>
        <ScrollPage key={projects[0].name}>
          <Animator animation={batch(Fade(), MoveIn(800, 0))}>
            <img
              style={{
                float: "right",
                width: "50%",
                margin: "0",
                marginRight: "0%",
                marginTop: "5%",
              }}
              src={projects[0].images[1]} // Displaying the first image of the project
              alt={`${projects[0].name}1`} // Example alt text, adjust as needed
            />
          </Animator>
          <Animator animation={batch(MoveIn(-1000, 0))}>
            <div style={{ marginTop: "-5%", textAlign: "center" }}>
              <p
                style={{
                  float: "left",
                  marginLeft: "35px",
                  marginBottom: "-50%",
                  letterSpacing: "1em",
                  verticalAlign: "text-top",
                }}
              >
                2022{" "}
                <span
                  style={{
                    letterSpacing: "0.05em",
                    fontSize: "0.7em",
                    marginLeft: "100px",
                  }}
                >
                  {projects[0].name2}
                </span>{" "}
              </p>
              <h2>{projects[0].name.toUpperCase()}</h2>
              <button
                className="seeMore"
                onClick={() => handleSeeMoreClick(projects[0].name)}
              >
                See More
              </button>
            </div>
          </Animator>
          <Animator animation={batch(Fade(), MoveIn(-800, 0))}>
            <img
              style={{
                position: "absolute",
                marginTop: "5%",
                marginLeft: "-2%",
                width: "50%",
              }}
              src={projects[0].images[0]}
              alt={`${projects[0].name}2`}
            />
          </Animator>
        </ScrollPage>

        <ScrollPage key={projects[1].name}>
          <Animator animation={batch(Fade())}>
            <img
              className="fade-in"
              style={{
                position: "relative",
                zIndex: "-1",
                float: "right",
                width: "40%",
                margin: "0",
                marginRight: "5%",
                marginTop: "5%",
              }}
              src={projects[1].images[1]}
              alt={`${projects[1].name}1`}
            />
          </Animator>
          <Animator
            style={{ position: "relative", zIndex: "1" }}
            animation={batch(Fade(), MoveIn(0, 1000))}
          >
            <div
              style={{
                marginTop: "-7%",
                marginLeft: "-5%",
                textAlign: "center",
                paddingBottom: "10px",
              }}
            >
              <p
                style={{
                  float: "left",
                  marginLeft: "13%",
                  marginBottom: "-50%",
                  letterSpacing: "1em",
                }}
              >
                {projects[1].date}
                <span
                  style={{
                    letterSpacing: "0.05em",
                    fontSize: "0.65em",
                    marginLeft: "10px",
                  }}
                >
                  {projects[1].name2}{" "}
                </span>
              </p>
              <h2>{projects[1].name.toUpperCase()}</h2>
              <button
                style={{ marginLeft: "15.5%" }}
                className="seeMore"
                onClick={() => handleSeeMoreClick(projects[1].name)}
              >
                See More
              </button>
            </div>
          </Animator>
          <Animator animation={batch(Fade())}>
            <img
              className="fade-in"
              style={{
                position: "relative",
                zIndex: "-2",
                width: "45%",
                marginTop: "-1%",
                marginRight: "5%",
              }}
              src={projects[1].images[0]}
              alt={`${projects[1].name}2`}
            />
          </Animator>
        </ScrollPage>

        <ScrollPage key={projects[2].name}>
          <Animator animation={batch(Fade())}>
            <img
              className="fade-in"
              style={{
                position: "relative",
                zIndex: "-1",
                float: "right",
                width: "38%",
                margin: "0",
                marginRight: "4%",
                marginTop: "0%",
              }}
              src={projects[2].images[0]}
              alt={`${projects[2].name}1`}
            />
          </Animator>
          <Animator animation={batch(MoveIn(-1000, 0))}>
            <div
              style={{
                marginTop: "0",
                marginLeft: "10%",
                paddingLeft: "20px",
                paddingBottom: "20px",
                width: "fit-content",
              }}
            >
              <p
                style={{
                  float: "left",
                  marginBottom: "-50%",
                  letterSpacing: "1em",
                }}
              >
                {projects[2].date}
                <span
                  style={{
                    letterSpacing: "0.05em",
                    fontSize: "0.65em",
                    marginLeft: "10px",
                  }}
                >
                  {projects[2].name2}{" "}
                </span>
              </p>
              <h2 style={{ letterSpacing: "0.2em", textAlign: "left" }}>
                {projects[2].name.toUpperCase()}
              </h2>
              <div style={{ textAlign: "center", marginTop: "-5%" }}>
                <button
                  style={{ marginTop: "-40%" }}
                  className="seeMore"
                  onClick={() => {
                    handleSeeMoreClick(projects[2].name);
                  }}
                >
                  See More
                </button>
              </div>
            </div>
          </Animator>
          <Animator animation={batch(Fade())}>
            <img
              className="fade-in"
              style={{
                position: "relative",
                zIndex: "-2",
                width: "45%",
                marginTop: "-1%",
                marginRight: "5%",
              }}
              src={projects[2].images[1]}
              alt={`${projects[2].name}2`}
            />
          </Animator>
        </ScrollPage>

        <ScrollPage key={projects[3].name}>
          <Animator animation={batch(Fade())}>
            <img
              className="fade-in"
              style={{
                position: "relative",
                zIndex: "-1",
                float: "right",
                width: "46%",
                margin: "0",
                marginRight: "-3%",
                marginTop: "0%",
              }}
              src={projects[3].images[1]}
              alt={`${projects[3].name}1`}
            />
          </Animator>
          <Animator
            style={{ position: "relative", zIndex: "1" }}
            animation={batch(MoveIn(1000, 0))}
          >
            <div
              style={{
                zIndex: "1",
                position: "relative",
                marginTop: "-3%",
                marginLeft: "0%",
                paddingLeft: "10px",
                paddingBottom: "13px",
                width: "fit-content",
              }}
            >
              <p
                style={{
                  float: "left",
                  marginBottom: "-50%",
                  letterSpacing: "1em",
                }}
              >
                {projects[3].date}
                <span
                  style={{
                    letterSpacing: "0.05em",
                    fontSize: "0.65em",
                    marginLeft: "210px",
                  }}
                >
                  {projects[3].name2}
                </span>
              </p>
              <h2 style={{ textAlign: "left" }}>
                {projects[3].name.toUpperCase()}
              </h2>
              <div style={{ textAlign: "center", marginTop: "-2%" }}>
                <button
                  className="seeMore"
                  onClick={() => handleSeeMoreClick(projects[3].name)}
                >
                  See More
                </button>
              </div>
            </div>
          </Animator>
          <Animator animation={batch(Fade())}>
            <img
              className="fade-in"
              style={{
                position: "absolute",
                zIndex: "-1",
                width: "64%",
                translate: "30px -130px",
              }}
              src={projects[3].images[0]}
              alt={`${projects[3].name}2`}
            />
          </Animator>
        </ScrollPage>

        <ScrollPage key={projects[4].name}>
          <Animator animation={batch(Fade())}>
            <img
              className="fade-in"
              style={{
                position: "relative",
                zIndex: "-1",
                float: "right",
                width: "28%",
                margin: "0",
                marginRight: "6%",
                marginTop: "1%",
              }}
              src={projects[4].images[0]}
              alt={`${projects[4].name}1`}
            />
          </Animator>
          <Animator
            style={{ position: "relative", zIndex: "1" }}
            animation={batch(MoveIn(1000, 0))}
          >
            <div
              style={{
                zIndex: "1",
                position: "relative",
                marginTop: "-3%",
                marginLeft: "0%",
                paddingLeft: "10px",
                paddingBottom: "13px",
                width: "fit-content",
              }}
            >
              <p
                style={{
                  float: "left",
                  paddingLeft: "10px",
                  marginBottom: "-50%",
                  letterSpacing: "1em",
                }}
              >
                {projects[4].date}
                <span
                  style={{
                    letterSpacing: "0.05em",
                    fontSize: "0.65em",
                    marginLeft: "210px",
                  }}
                >
                  {projects[4].name2}
                </span>
              </p>
              <h2 style={{ textAlign: "left" }}>
                {projects[4].name.toUpperCase()}
              </h2>
              <div style={{ textAlign: "center", marginTop: "-2%" }}>
                <button
                  className="seeMore"
                  onClick={() => handleSeeMoreClick(projects[4].name)}
                >
                  See More
                </button>
              </div>
            </div>
          </Animator>
          <Animator animation={batch(Fade())}>
            <img
              className="fade-in"
              style={{
                position: "absolute",
                zIndex: "-1",
                width: "58%",
                translate: "30px 0px",
              }}
              src={projects[4].images[1]}
              alt={`${projects[4].name}1`}
            />
          </Animator>
        </ScrollPage>

        <ScrollPage key={projects[5].name}>
          <Animator animation={batch(Fade())}>
            <img
              className="fade-in"
              style={{
                position: "relative",
                zIndex: "-1",
                float: "right",
                width: "40%",
              }}
              src={projects[5].images[1]}
              alt={`${projects[5].name}1`}
            />
          </Animator>
          <Animator
            style={{ position: "relative", zIndex: "1" }}
            animation={batch(MoveIn(1000, 0))}
          >
            <div
              style={{
                zIndex: "1",
                position: "relative",
                marginTop: "-4%",
                marginLeft: "0%",
                paddingLeft: "10px",
                paddingBottom: "13px",
                width: "fit-content",
              }}
            >
              <p
                style={{
                  float: "left",
                  paddingLeft: "10px",
                  marginBottom: "-20%",
                  letterSpacing: "1em",
                }}
              >
                {projects[5].date}
                <span
                  style={{
                    letterSpacing: "0.05em",
                    fontSize: "0.65em",
                    marginLeft: "210px",
                  }}
                >
                  {projects[5].name2}
                </span>
              </p>
              <h2
                style={{
                  textAlign: "left",
                  fontSize: "4em",
                  lineHeight: "1em",
                  paddingTop: "2%",
                }}
              >
                {projects[5].name.toUpperCase()}
              </h2>
              <div style={{ textAlign: "center", marginTop: "-4%" }}>
                <button
                  className="seeMore"
                  onClick={() => handleSeeMoreClick(projects[5].name)}
                >
                  See More
                </button>
              </div>
            </div>
          </Animator>
          <Animator animation={batch(Fade())}>
            <img
              className="fade-in"
              style={{
                position: "absolute",
                zIndex: "-1",
                width: "50%",
                translate: "30px 20px",
              }}
              src={projects[5].images[0]}
              alt={`${projects[5].name}2`}
            />
          </Animator>
        </ScrollPage>

        <ScrollPage key={projects[6].name}>
          <Animator animation={batch(Fade())}>
            <img
              className="fade-in"
              style={{
                position: "relative",
                zIndex: "-1",
                float: "right",
                width: "50%",
                marginTop: "8%",
              }}
              src={projects[6].images[0]}
              alt={`${projects[6].name}1`}
            />
          </Animator>
          <Animator
            style={{ position: "relative", zIndex: "1" }}
            animation={batch(MoveIn(1000, 0))}
          >
            <div
              style={{
                zIndex: "1",
                position: "relative",
                marginTop: "4%",
                marginLeft: "10%",
                paddingLeft: "10px",
                paddingBottom: "13px",
                width: "fit-content",
              }}
            >
              <p
                style={{
                  float: "left",
                  paddingLeft: "10px",
                  marginBottom: "-20%",
                  letterSpacing: "1em",
                }}
              >
                {projects[6].date}
                <span
                  style={{
                    letterSpacing: "0.05em",
                    fontSize: "0.65em",
                    marginLeft: "160px",
                  }}
                >
                  {projects[6].name2}
                </span>
              </p>
              <h2 style={{ textAlign: "left" }}>
                {" "}
                {projects[6].name.toUpperCase()}{" "}
              </h2>
              <div style={{ textAlign: "center", marginTop: "-4%" }}>
                <button
                  className="seeMore"
                  onClick={() => handleSeeMoreClick(projects[6].name)}
                >
                  See More
                </button>
              </div>
            </div>
          </Animator>
          <Animator animation={batch(Fade())}>
            <img
              className="fade-in"
              style={{
                position: "absolute",
                zIndex: "-1",
                width: "50%",
                translate: "10px 10px",
              }}
              src={projects[6].images[1]}
              alt={`${projects[6].name}2`}
            />
          </Animator>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={batch(Fade())}>
            <img
              className="fade-in"
              style={{
                position: "relative",
                zIndex: "-1",
                float: "right",
                width: "35%",
                marginTop: "2.25%",
                marginRight: "3%",
              }}
              src={projects[7].images[1]}
              alt={`${projects[7].name}1`}
            />
          </Animator>
          <Animator
            style={{ position: "relative", zIndex: "1" }}
            animation={batch(MoveIn(1000, 0))}
          >
            <div
              style={{
                zIndex: "1",
                position: "relative",
                marginTop: "-2%",
                marginLeft: "6%",
                paddingLeft: "10px",
                paddingBottom: "13px",
                width: "fit-content",
              }}
            >
              <p
                style={{
                  float: "left",
                  paddingLeft: "10px",
                  marginBottom: "-20%",
                  letterSpacing: "1em",
                }}
              >
                {projects[7].date}
                <span
                  style={{
                    letterSpacing: "0.05em",
                    fontSize: "0.65em",
                    marginLeft: "160px",
                  }}
                >
                  {projects[7].name2}
                </span>
              </p>
              <h2 style={{ textAlign: "left" }}>
                {projects[7].name.toUpperCase()}
              </h2>
              <div style={{ textAlign: "center", marginTop: "-4%" }}>
                <button
                  className="seeMore"
                  onClick={() => handleSeeMoreClick(projects[7].name)}
                >
                  See More
                </button>
              </div>
            </div>
          </Animator>
          <Animator animation={batch(Fade())}>
            <img
              className="fade-in"
              style={{
                position: "absolute",
                zIndex: "-1",
                width: "60%",
                translate: "-30px 0px",
              }}
              src={projects[7].images[0]}
              alt={`${projects[7].name}1`}
            />
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/project/:project" element={<ProjectDetails />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
