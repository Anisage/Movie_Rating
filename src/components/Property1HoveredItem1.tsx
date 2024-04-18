import { FunctionComponent } from "react";
import "./Property1HoveredItem1.css";

const Property1HoveredItem1: FunctionComponent = () => {
  return (
    <div className="property-1hovered-item1">
      <img
        className="property-1hovered-item-inner"
        alt=""
        src="/rectangle-5@2x.png"
      />
      <div className="lorem-ipsum-dolor10">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ut sem viverra aliquet. Congue eu consequat ac felis donec et. `}</div>
      <div className="property-1hovered-item-child1" />
    </div>
  );
};

export default Property1HoveredItem1;
