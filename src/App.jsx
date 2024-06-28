import React from "react";
import "./App.css";
import bfIcon from './assets/bf1.svg';
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

function App() {
  return (
    <>
      <ScrollContainer snap="proximity">
        <ScrollPage>
          <div className="container">
            <Animator animation={batch(Fade(), MoveOut(0, -1000))}>
              <h1 className="fade-in"> Ludm<span className="icon-container">i<img src={bfIcon} className="icon" alt="bf1" /></span>la Semaan</h1>
              <div className="fade-in" id="imgCont">
                <img src="./imgs/luda0.png" alt="Ludmila Semaan" />
              </div>
            </Animator>
            <Animator animation={batch(Fade(), MoveOut(0, 0))}>
              <h2 className="fade-in">PORTFOLIO</h2>
              <h3 className="fade-in">ARCHITECT</h3>
              <div>
                <button className="scroll">V V V</button>
              </div>
            </Animator>
          </div>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(Fade(), MoveIn(1000, 300))}>
            <div
              style={{ margin: "0px", float: "right", width: "fit-content" }}
            >
              <img
                className="bw"
                style={{
                  rotate: "2deg",
                  display: "block",
                  margin: "auto",
                  marginTop: "60px",
                  width: "400px",
                }}
                src="./imgs/luda2.jpg"
                alt="aboutMe"
              />
              <img
                className="bw"
                style={{
                  rotate: "-7deg",
                  display: "block",
                  width: "250px",
                  marginLeft: "30px",
                  marginTop: "60px",
                }}
                src="./imgs/luda3.jpg"
                alt="aboutMe"
              />
            </div>
            <img
              className="bw"
              style={{
                rotate: "7deg",
                float: "right",
                width: "300px",
                marginTop: "80px",
                marginRight: "80px",
              }}
              src="./imgs/luda1.png"
              alt="aboutMe"
            />
          </Animator>
          <div>
            <Animator animation={batch(MoveIn(-600, 200))}>
              <h2 id="aboutMe">A LITTLE ABOUT ME</h2>
            </Animator>
            <Animator animation={batch(MoveIn(0, 800))}>
              <p
                style={{
                  width: "60%",
                  fontWeight: "100",
                  marginLeft: "6%",
                  marginTop: "10%",
                }}
              >
                Multi-tasked adult, passionate about life and what I do. I’m
                Dedicated to everything I get engage with, with an excellent
                communicational and organizational skills. I have a proactive
                attitude which I can work under any circumstances and find
                positive ways to stimulate and engage with people. I started my
                journey in an interesting but wrong field for me but then I
                found what I was passionate about and here I am.
              </p>
            </Animator>
          </div>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(Fade())}>
            <h1 className="title">My Projects</h1>
          </Animator>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={batch(Fade(), MoveIn(800, 0))}>
            <img
              style={{
                float: "right",
                width: "50%",
                margin: "0",
                marginRight: "0%",
                marginTop: "5%",
              }}
              src="./imgs/res2.png"
              alt="res2"
            />
          </Animator>
          <Animator animation={batch(MoveIn(-1000, 0))}>
            <div style={{marginTop:"-5%", textAlign: "center" }}>
              <p style={{float:"left",marginLeft:"35px",marginBottom:"-50%",letterSpacing:"1em",verticalAlign:"text-top"}}>2022 <span style={{letterSpacing:"0.05em",fontSize:"0.7em",marginLeft:"100px"}}>ARCHITECT’S RESIDENTIAL ONE FLOOR HOUSE</span> </p>
              <h2>RESIDENTIAL</h2>
              <button className="seeMore">See More</button>
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
              src="./imgs/res1.png"
              alt="res1"
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
                width: "45%",
                margin: "0",
                marginRight: "5%",
                marginTop: "5%",
              }}
              src="./imgs/church2.png"
              alt="church2"
            />
          </Animator>
          <Animator style={{position:"relative",zIndex:"1"}} animation={batch(Fade() ,MoveIn(0, 1000))}>
            <div style={{marginTop:"-7%",marginLeft:"-5%", textAlign: "center",paddingBottom:'10px' }}>
              <p style={{float:"left",marginLeft:"13%",marginBottom:"-50%",letterSpacing:"1em"}}>2022<span style={{letterSpacing:"0.05em",fontSize:"0.65em",marginLeft:"10px"}}>RELEVE OF MAR ELIAS CHURCH IN HADATH </span></p>
              <h2>CHURCH</h2>
              <button style={{marginLeft:'15.5%'}} className="seeMore">See More</button>
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
              src="./imgs/church1.png"
              alt="church1"
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
                width: "42%",
                margin: "0",
                marginRight: "0%",
                marginTop: "0%",
              }}
              src="./imgs/kiosk1.png"
              alt="kiosk1"
            />
          </Animator>
          <Animator animation={batch(MoveIn(-1000, 0))}>
            <div style={{marginTop:"0",marginLeft:"10%",paddingLeft: "20px",paddingBottom:'20px',width:"fit-content" }}>
              <p style={{float:"left",marginBottom:"-50%",letterSpacing:"1em"}}>2022<span style={{letterSpacing:"0.05em",fontSize:"0.65em",marginLeft:"10px"}}>KIOSK IN SANAYA PARK IN BEIRUT </span></p>
              <h2 style={{letterSpacing:"0.2em",textAlign:"left"}}>KIOSK</h2>
              <div style={{textAlign:"center",marginTop:"-5%"}}>
                <button style={{marginTop:"-40%"}} className="seeMore">See More</button>
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
              src="./imgs/kiosk2.png"
              alt="kiosk12"
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
                width: "46%",
                margin: "0",
                marginRight: "-3%",
                marginTop: "0%",
              }}
              src="./imgs/dance2.png"
              alt="dance2"
            />
          </Animator>
          <Animator style={{position:"relative",zIndex:"1"}} animation={batch(MoveIn(1000, 0))}>
            <div style={{zIndex:"1",position:"relative",marginTop:"-3%",marginLeft:"0%",paddingLeft: "10px",paddingBottom:'13px',width:"fit-content" }}>
              <p style={{float:"left",marginBottom:"-50%",letterSpacing:"1em"}}>2022<span style={{letterSpacing:"0.05em",fontSize:"0.65em",marginLeft:"210px"}}>RESEDENTIAL HOUSE WITH A DANCE STUDIO BUSINESS</span></p>
              <h2 style={{textAlign:"left"}}>DANCE STUDIO</h2>
              <div style={{textAlign:"center",marginTop:"-2%"}}>
                <button className="seeMore">See More</button>
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
                translate: "30px -130px"
              }}
              src="./imgs/dance1.png"
              alt="dance1"
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
                width: "30%",
                margin: "0",
                marginRight: "6%",
                marginTop: "0%",
              }}
              src="./imgs/FAS1.png"
              alt="dance2"
            />
          </Animator>
          <Animator style={{position:"relative",zIndex:"1"}} animation={batch(MoveIn(1000, 0))}>
            <div style={{zIndex:"1",position:"relative",marginTop:"-3%",marginLeft:"0%",paddingLeft: "10px",paddingBottom:'13px',width:"fit-content" }}>
              <p style={{float:"left",paddingLeft:"10px",marginBottom:"-50%",letterSpacing:"1em"}}>2022<span style={{letterSpacing:"0.05em",fontSize:"0.65em",marginLeft:"210px"}}>nater your input</span></p>
              <h2 style={{textAlign:"left"}}>FINE ARTS SCHOOL</h2>
              <div style={{textAlign:"center",marginTop:"-2%"}}>
                <button className="seeMore">See More</button>
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
                translate: "30px 0px"
              }}
              src="./imgs/FAS2.png"
              alt="dance1"
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
                width: "30%",
                margin: "0",
                marginRight: "6%",
                marginTop: "0%",
              }}
              src="./imgs/FAS1.png"
              alt="dance2"
            />
          </Animator>
          <Animator style={{position:"relative",zIndex:"1"}} animation={batch(MoveIn(1000, 0))}>
            <div style={{zIndex:"1",position:"relative",marginTop:"-3%",marginLeft:"0%",paddingLeft: "10px",paddingBottom:'13px',width:"fit-content" }}>
              <p style={{float:"left",paddingLeft:"10px",marginBottom:"-50%",letterSpacing:"1em"}}>2022<span style={{letterSpacing:"0.05em",fontSize:"0.65em",marginLeft:"210px"}}>nater your input</span></p>
              <h2 style={{textAlign:"left"}}>FINE ARTS SCHOOL</h2>
              <div style={{textAlign:"center",marginTop:"-2%"}}>
                <button className="seeMore">See More</button>
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
                translate: "30px 0px"
              }}
              src="./imgs/FAS2.png"
              alt="dance1"
            />
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </>
  );
}

export default App;
