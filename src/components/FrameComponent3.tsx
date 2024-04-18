import { FunctionComponent, useMemo, type CSSProperties } from "react";
import Movie3Component from "./Movie3Component";
import "./FrameComponent3.css";

export type FrameComponent3Type = {
  rectangle4?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propTop?: CSSProperties["top"];
  propBottom?: CSSProperties["bottom"];
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  rectangle4,
  propPadding,
  propTop,
  propBottom,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const loremIpsumDolorStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      bottom: propBottom,
    };
  }, [propTop, propBottom]);

  return (
    <div className="movie-3-component-wrapper" style={frameDivStyle}>
      <Movie3Component
        movie3Component
        propHeight="unset"
        propWidth="unset"
        propAlignSelf="unset"
        propFlexDirection="row"
        propFlex="1"
        // propDebugCommit="unset"
        propPosition="relative"
        propHeight1="230px"
        propWidth1="unset"
        propTop="unset"
        propRight="unset"
        propBottom="unset"
        propLeft="unset"
        propMaxHeight="unset"
        propFlex1="1"
        propLeft1="unset"
        propMargin="0 !important"
        propRight1="-247px"
      />
    </div>
  );
};

export default FrameComponent3;
