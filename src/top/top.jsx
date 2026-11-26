import react from "react";
import "./top.css";
const TopComponent = (props) => {
  return (
    <div className="topParent">
      <div className="topChild">
        <h1>{props?.data?.heading}</h1>
        <h2>{props?.data?.title}</h2>
        <p>{props?.data?.description}</p>
        <button className="firstBtn">{props?.data?.box1}</button>
        <button className="secondBtn">{props?.data?.box2}</button>
      </div>
    </div>
  );
};
export default TopComponent;
