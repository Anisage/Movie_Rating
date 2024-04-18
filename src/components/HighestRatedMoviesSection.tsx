import { FunctionComponent } from "react";
import FrameComponent2 from "./FrameComponent2";
import "./HighestRatedMoviesSection.css";

const HighestRatedMoviesSection: FunctionComponent = () => {
  return (
    <div className="highest-rated-movies-section">
      <div className="highest-rated-movies-section-child" />
      <div className="highest-rated-movies">Highest Rated Movies</div>
      <FrameComponent2 />
    </div>
  );
};

export default HighestRatedMoviesSection;
