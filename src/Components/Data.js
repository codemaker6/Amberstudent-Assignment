import React, { useState } from "react";
// import { useEffect } from "react";
import Userdata from "./Userdata";
import Details from "./Details";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
const Data = () => {
  const [flag, setFlag] = useState(true);
  // useEffect(() => {
  //     UserApi();
  //   }, []);
  // const [data, setData] = useState([]);
  // const UserApi = () => {
  //   fetch("https://testimonialapi.toolcarton.com/api")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       console.log(json);
  //       setData(json);

  //     });
  // };
  const userclick1 = () => {
    setFlag(false);
  };
  const userclick = () => {
    setFlag(true);
  };

  return (
    <>
      <div className="write-block">
        <p className="para1">TESTIMONIALS</p>
        {flag ? <Userdata></Userdata> : <Details></Details>}
        <p className="para2">READ FULL STORY</p>
        <div className="image">
          <img src="https://testimonialapi.toolcarton.com/avatar/1.jpg" />
          <img src="https://testimonialapi.toolcarton.com/avatar/3.jpg" />
          <img
            className="myimg"
            onClick={userclick}
            src="https://testimonialapi.toolcarton.com/avatar/4.jpg"
          />
          <img
            className="myimg1"
            onClick={userclick1}
            src="https://testimonialapi.toolcarton.com/avatar/5.jpg"
          />
          <img src="https://testimonialapi.toolcarton.com/avatar/6.jpg" />
          <img src="https://testimonialapi.toolcarton.com/avatar/4.jpg" />
          <img src="https://testimonialapi.toolcarton.com/avatar/7.jpg" />
          <div className="arrowbutton">
            <button className="button mybtn" onClick={userclick}>
              <ArrowBackIcon></ArrowBackIcon>
            </button>
            <button className="button" onClick={userclick1}>
              <ArrowForwardIcon></ArrowForwardIcon>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Data;
