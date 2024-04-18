import { FunctionComponent } from "react";
import SearchBar from "../components/SearchBar";
import ExpandLeftIcon from "../components/ExpandLeftIcon";
import ExpandRightIcon from "../components/ExpandRightIcon";
import Review from "../components/Review";
import FrameComponent from "../components/FrameComponent";
import HighestRatedMoviesSection from "../components/HighestRatedMoviesSection";
import Movie1Component from "../components/Movie1Component";
import Property1HoveredItem2 from "../components/Property1HoveredItem2";
import Movie2Component from "../components/Movie2Component";
import Property1HoveredItem1 from "../components/Property1HoveredItem1";
import Movie3Component from "../components/Movie3Component";
import Property1HoveredItem from "../components/Property1HoveredItem";
import "./MacBookPro144.css";

const MacBookPro144: FunctionComponent = () => {
  return (
    <div className="home-page">
      <img className="search-alt-icon" alt="" src="/search-alt.svg" />
      <div className="review">
        <div className="review-child" />
        <div className="review-item" />
        <div className="dt1">DT</div>
        <div className="debi-teloori1">Debi Teloori</div>
        <div className="hr-ago">1 hr ago</div>
        <div className="lorem-ipsum-dolor-container3">
          <span className="lorem-ipsum-dolor-container4">
            <p className="lorem-ipsum-dolor3">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ut sem viverra aliquet. Congue eu consequat ac felis donec et. `}</p>
            <p className="blank-line6">&nbsp;</p>
            <p className="convallis-convallis-tellus3">{`Convallis convallis tellus id interdum velit laoreet id donec. Faucibus vitae aliquet nec ullamcorper sit amet risus. Facilisis mauris sit amet massa vitae tortor. Purus gravida quis blandit turpis cursus. `}</p>
            <p className="blank-line7">&nbsp;</p>
            <p className="malesuada-fames-ac3">
              Malesuada fames ac turpis egestas. Habitasse platea dictumst
              vestibulum rhoncus est pellentesque elit ullamcorper. Sed augue
              lacus viverra vitae. Dui id ornare arcu odio. Eu sem integer vitae
              justo eget magna.
            </p>
          </span>
        </div>
        <img className="review-inner" alt="" src="/star-1.svg" />
        <img className="star-icon" alt="" src="/star-1.svg" />
        <img className="review-child1" alt="" src="/star-1.svg" />
        <img className="review-child2" alt="" src="/star-1.svg" />
        <img className="review-child3" alt="" src="/star-5.svg" />
      </div>
      <img className="home-page-child" alt="" src="/rectangle-3@2x.png" />
      <img className="home-page-item" alt="" src="/rectangle-61@2x.png" />
      <img className="home-page-inner" alt="" src="/rectangle-41@2x.png" />
      <img
        className="frame-icon"
        alt=""
        src="/frame-2@2x.png"
        data-scroll-to="frameImage"
      />
      <div className="frame-div">
        <div className="search-bar-parent">
          <SearchBar />
          <div className="frame-container">
            <div className="frame-parent1">
              <img className="frame-item" alt="" src="/frame-1@2x.png" />
              <ExpandLeftIcon />
              <ExpandRightIcon />
            </div>
          </div>
          <div className="review-section">
            <div className="expression-parser" />
            <div className="data-filter">
              <div className="data-merger">
                <div className="tree-branch">
                  <div className="reviews">Reviews</div>
                  <div className="data-validator">
                    <img
                      className="message-add-icon"
                      alt=""
                      src="/messageadd.svg"
                    />
                  </div>
                </div>
                <Review
                  propWidth="unset"
                  propFlex="unset"
                  propAlignSelf="stretch"
                />
              </div>
            </div>
            <FrameComponent />
            <FrameComponent />
            <Review propWidth="781px" propFlex="unset" propAlignSelf="unset" />
            <Review />
          </div>
        </div>
      </div>
      <HighestRatedMoviesSection />
      <div className="movie-1-component">
        <Movie1Component movie1Component />
        <Property1HoveredItem2 />
      </div>
      <div className="movie-2-component">
        <Movie2Component />
        <Property1HoveredItem1 />
      </div>
      <div className="movie-3-component">
        <Movie3Component movie3Component />
        <Property1HoveredItem />
      </div>
    </div>
  );
};

export default MacBookPro144;
