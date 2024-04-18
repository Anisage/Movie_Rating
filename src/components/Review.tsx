import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./Review.css";

export type ReviewType = {
  /** Style props */
  propWidth?: CSSProperties["width"];
  propFlex?: CSSProperties["flex"];
  propAlignSelf?: CSSProperties["alignSelf"];
};

const Review: FunctionComponent<ReviewType> = ({
  propWidth,
  propFlex,
  propAlignSelf,
}) => {
  const reviewStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propFlex, propAlignSelf]);

  return (
    <div className="review1" style={reviewStyle}>
      <div className="rectangle-div" />
      <div className="review-inner1">
        <div className="frame-parent2">
          <div className="frame-parent3">
            <div className="ellipse-group">
              <div className="ellipse-div" />
              <div className="dt2">DT</div>
            </div>
            <div className="debi-teloori-wrapper">
              <div className="debi-teloori2">Debi Teloori</div>
            </div>
          </div>
          <div className="frame-wrapper1">
            <div className="frame-parent4">
              <div className="frame-parent5">
                <div className="star-wrapper">
                  <img className="frame-child2" alt="" src="/star-1.svg" />
                </div>
                <div className="star-container">
                  <img className="frame-child3" alt="" src="/star-1.svg" />
                </div>
                <img className="frame-child4" alt="" src="/star-1.svg" />
                <img className="frame-child5" alt="" src="/star-1.svg" />
                <img className="frame-child6" alt="" src="/star-5.svg" />
              </div>
              <div className="hr-ago-wrapper">
                <div className="hr-ago1">1 hr ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lorem-ipsum-dolor-container6">
        <span>
          <p className="lorem-ipsum-dolor5">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ut sem viverra aliquet. Congue eu consequat ac felis donec et. `}</p>
          <p className="blank-line10">&nbsp;</p>
          <p className="convallis-convallis-tellus5">{`Convallis convallis tellus id interdum velit laoreet id donec. Faucibus vitae aliquet nec ullamcorper sit amet risus. Facilisis mauris sit amet massa vitae tortor. Purus gravida quis blandit turpis cursus. `}</p>
          <p className="blank-line11">&nbsp;</p>
          <p className="malesuada-fames-ac5">
            Malesuada fames ac turpis egestas. Habitasse platea dictumst
            vestibulum rhoncus est pellentesque elit ullamcorper. Sed augue
            lacus viverra vitae. Dui id ornare arcu odio. Eu sem integer vitae
            justo eget magna.
          </p>
        </span>
      </div>
    </div>
  );
};

export default Review;
