import { FunctionComponent } from "react";
import Review from "./Review";
import "./FrameComponent.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <div className="review-wrapper">
      <Review propWidth="unset" propFlex="1" propAlignSelf="unset" />
    </div>
  );
};

export default FrameComponent;
