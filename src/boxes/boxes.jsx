import react from "react";
import "./boxes.css";
const BoxComponent = (props) => {
  return (
    <div className="parent">
      <div className="child">
        {/* <div className="value">100+</div> <div className="detail">Colleges</div> */}
        <div className="value">{props?.data?.d1}</div>
        <div className="detail">{props?.data?.d2}</div>
      </div>
      <div className="child">
        {/* <div className="value">150</div>{" "}
        <div className="detail">professional trainers </div> */}
        <div className="value">{props?.data?.d3}</div>
        <div className="detail">{props?.data?.d4}</div>
      </div>
      <div className="child">
        {/* <div className="value">1000+</div>{" "}
        <div className="detail">study materials</div> */}
        <div className="value">{props?.data?.d5}</div>
        <div className="detail">{props?.data?.d6}</div>
      </div>
      <div className="child">
        {/* <div className="value">10000</div>{" "}
        <div className="detail">students</div> */}
        <div className="value">{props?.data?.d7}</div>
        <div className="detail">{props?.data?.d8}</div>
      </div>
    </div>
  );
};
export default BoxComponent;
