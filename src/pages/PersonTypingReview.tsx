import { FunctionComponent } from "react";
import "./PersonTypingReview.css";

const PersonTypingReview: FunctionComponent = () => {
  return (
    <div className="person-typing-review">
      <section className="person-typing-review1" />
      <div className="person-typing-review-inner">
        <div className="review-star-parent">
          <div className="review-star">
            <div className="review-star-inner">
              <div className="ellipse-parent">
                <div className="frame-child" />
                <div className="dt">DT</div>
              </div>
            </div>
            <div className="debi-teloori">Debi Teloori</div>
          </div>
          <div className="frame-wrapper">
            <div className="review-star-group">
              <img
                className="review-star-icon"
                loading="lazy"
                alt=""
                src="/review-star.svg"
              />
              <img
                className="review-star-icon1"
                loading="lazy"
                alt=""
                src="/review-star.svg"
              />
              <div className="three-stars">
                <img
                  className="review-star-icon2"
                  loading="lazy"
                  alt=""
                  src="/review-star.svg"
                />
                <img
                  className="review-star-icon3"
                  loading="lazy"
                  alt=""
                  src="/review-star.svg"
                />
                <img
                  className="review-star-icon4"
                  loading="lazy"
                  alt=""
                  src="/review-star.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="input-area">
        <div className="type-a-message">Type a message...</div>
        <div className="message-field">
          <div className="union-symbol" />
          <div className="message-field-child" />
          <img
            className="union-1-icon"
            loading="lazy"
            alt=""
            src="/union1.svg"
          />
        </div>
      </section>
    </div>
  );
};

export default PersonTypingReview;
