import { FunctionComponent } from "react";
import FrameComponent3 from "./FrameComponent3";
import Movie2Component from "./Movie2Component";
import Movie3Component from "./Movie3Component";
import "./FrameComponent2.css";
import Movie1Component from "./Movie1Component";
import Movie2Component1 from "./Movie2Component1";


const FrameComponent2: FunctionComponent = () => {
  return (
    <div className="tree-explorer-parent">
      <FrameComponent3
        rectangle4="/rectangle-4@2x.png"
        propPadding="0px var(--padding-11xs) 0px 0px"
        propTop="unset"
        propBottom="45px"
      />
      {/* <Movie2Component propDebugCommit="unset" /> */}
      <FrameComponent3 rectangle4="/rectangle-6@2x.png" />
      <FrameComponent3
        rectangle4="/rectangle-4@2x.png"
        propPadding="0px 0px var(--padding-sm)"
        propTop="unset"
        propBottom="45px"
      />
      <FrameComponent3
        rectangle4="/rectangle-5@2x.png"
        propPadding="0px 0px var(--padding-2xs)"
        propTop="calc(50% - 58px)"
        propBottom="unset"
      />
      <FrameComponent3
        rectangle4="/rectangle-6@2x.png"
        propPadding="0px 0px var(--padding-7xs)"
        propTop="51px"
        propBottom="unset"
      />
      <FrameComponent3
        rectangle4="/rectangle-4@2x.png"
        propPadding="0px 0px var(--padding-mini)"
        propTop="unset"
        propBottom="45px"
      />
      <div className="movie-2-component-parent">
        {/* <Movie2Component propDebugCommit="unset" /> */}
        <Movie3Component
          movie3Component
          propHeight="unset"
          propWidth="unset"
          propAlignSelf="stretch"
          propFlexDirection="row"
          propFlex="unset"
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

        <Movie2Component/>
        {/* <Movie1Component/> */}
      </div>
    </div>
  );
};

export default FrameComponent2;
