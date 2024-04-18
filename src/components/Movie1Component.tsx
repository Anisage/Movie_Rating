import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./Movie1Component.css";

export type Movie1ComponentType = {
  movie1Component?: boolean;

  /** Style props */
  loremIpsumDolorHeight?: CSSProperties["height"];
  loremIpsumDolorWidth?: CSSProperties["width"];
  loremIpsumDolorFlex?: CSSProperties["flex"];
  loremIpsumDolorFlexDirection?: CSSProperties["flexDirection"];
  // loremIpsumDolorDebugCommit?: CSSProperties["debugCommit"];
  propPosition?: CSSProperties["position"];
  propHeight?: CSSProperties["height"];
  propWidth?: CSSProperties["width"];
  propTop?: CSSProperties["top"];
  propRight?: CSSProperties["right"];
  propBottom?: CSSProperties["bottom"];
  propLeft?: CSSProperties["left"];
  propMaxHeight?: CSSProperties["maxHeight"];
  propFlex?: CSSProperties["flex"];
  propTop1?: CSSProperties["top"];
  propLeft1?: CSSProperties["left"];
  propMargin?: CSSProperties["margin"];
  propRight1?: CSSProperties["right"];
  propBottom1?: CSSProperties["bottom"];
};

const Movie1Component: FunctionComponent<Movie1ComponentType> = ({
  movie1Component,
  loremIpsumDolorHeight,
  loremIpsumDolorWidth,
  loremIpsumDolorFlex,
  loremIpsumDolorFlexDirection,
  // loremIpsumDolorDebugCommit,
  propPosition,
  propHeight,
  propWidth,
  propTop,
  propRight,
  propBottom,
  propLeft,
  propMaxHeight,
  propFlex,
  propTop1,
  propLeft1,
  propMargin,
  propRight1,
  propBottom1,
}) => {
  const property1DefaultStyle: CSSProperties = useMemo(() => {
    return {
      height: loremIpsumDolorHeight,
      width: loremIpsumDolorWidth,
      flex: loremIpsumDolorFlex,
      flexDirection: loremIpsumDolorFlexDirection,
      // debugCommit: loremIpsumDolorDebugCommit,
    };
  }, [
    loremIpsumDolorHeight,
    loremIpsumDolorWidth,
    loremIpsumDolorFlex,
    loremIpsumDolorFlexDirection,
    // loremIpsumDolorDebugCommit,
  ]);

  const rectangleIconStyle: CSSProperties = useMemo(() => {
    return {
      position: propPosition,
      height: propHeight,
      width: propWidth,
      top: propTop,
      right: propRight,
      bottom: propBottom,
      left: propLeft,
      maxHeight: propMaxHeight,
      flex: propFlex,
    };
  }, [
    propPosition,
    propHeight,
    propWidth,
    propTop,
    propRight,
    propBottom,
    propLeft,
    propMaxHeight,
    propFlex,
  ]);

  const loremIpsumDolor1Style: CSSProperties = useMemo(() => {
    return {
      top: propTop1,
      left: propLeft1,
      margin: propMargin,
      right: propRight1,
      bottom: propBottom1,
    };
  }, [propTop1, propLeft1, propMargin, propRight1, propBottom1]);

  return movie1Component ? (
      <div className="property-1default" style={property1DefaultStyle}>
        <img
          className="property-1default-child"
          alt=""
          src="/rectangle-4@2x.png"
          style={rectangleIconStyle}
        />
        <div
          className="lorem-ipsum-dolor7"
          style={loremIpsumDolor1Style}
        >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ut sem viverra aliquet. Congue eu consequat ac felis donec et. `}</div>
      </div>
  ) : null;
};

export default Movie1Component;
