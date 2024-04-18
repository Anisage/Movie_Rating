import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./Movie3Component.css";

export type Movie3ComponentType = {
  movie3Component?: boolean;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propFlexDirection?: CSSProperties["flexDirection"];
  propFlex?: CSSProperties["flex"];
  // propDebugCommit?: CSSProperties["debugCommit"];
  propPosition?: CSSProperties["position"];
  propHeight1?: CSSProperties["height"];
  propWidth1?: CSSProperties["width"];
  propTop?: CSSProperties["top"];
  propRight?: CSSProperties["right"];
  propBottom?: CSSProperties["bottom"];
  propLeft?: CSSProperties["left"];
  propMaxHeight?: CSSProperties["maxHeight"];
  propFlex1?: CSSProperties["flex"];
  propLeft1?: CSSProperties["left"];
  propMargin?: CSSProperties["margin"];
  propRight1?: CSSProperties["right"];
};

const Movie3Component: FunctionComponent<Movie3ComponentType> = ({
  movie3Component,
  propHeight,
  propWidth,
  propAlignSelf,
  propFlexDirection,
  propFlex,
  // propDebugCommit,
  propPosition,
  propHeight1,
  propWidth1,
  propTop,
  propRight,
  propBottom,
  propLeft,
  propMaxHeight,
  propFlex1,
  propLeft1,
  propMargin,
  propRight1,
}) => {
  const property1Default2Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
      alignSelf: propAlignSelf,
      flexDirection: propFlexDirection,
      flex: propFlex,
      // debugCommit: propDebugCommit,
    };
  }, [
    propHeight,
    propWidth,
    propAlignSelf,
    propFlexDirection,
    propFlex,
    // propDebugCommit,
  ]);

  const rectangleIcon1Style: CSSProperties = useMemo(() => {
    return {
      position: propPosition,
      height: propHeight1,
      width: propWidth1,
      top: propTop,
      right: propRight,
      bottom: propBottom,
      left: propLeft,
      maxHeight: propMaxHeight,
      flex: propFlex1,
    };
  }, [
    propPosition,
    propHeight1,
    propWidth1,
    propTop,
    propRight,
    propBottom,
    propLeft,
    propMaxHeight,
    propFlex1,
  ]);

  const loremIpsumDolorStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft1,
      margin: propMargin,
      right: propRight1,
    };
  }, [propLeft1, propMargin, propRight1]);

  return movie3Component ? (
      <div className="property-1default2" style={property1Default2Style}>
        <img
          className="property-1default-inner"
          alt=""
          src="/rectangle-6@2x.png"
          style={rectangleIcon1Style}
        />
        <div
          className="lorem-ipsum-dolor11"
          style={loremIpsumDolorStyle}
        >{`The hunger games`}</div>
        <div
          className="rating"
          style={loremIpsumDolorStyle}
        >{`9.10`}</div>
        <div
          className="duration"
          style={loremIpsumDolorStyle}
        >{`1 hour 42 minutes`}</div>
      </div>
  ) : null ;
};

export default Movie3Component;
