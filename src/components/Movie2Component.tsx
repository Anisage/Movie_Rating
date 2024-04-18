import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./Movie2Component.css";

export type Movie2ComponentType = {
  /** Style props */
  // propDebugCommit?: CSSProperties["debugCommit"];
};

const Movie2Component: FunctionComponent<Movie2ComponentType> = ({
  // propDebugCommit,
}) => {
  const property1Default1Style: CSSProperties = useMemo(() => {
    return {
      // debugCommit: propDebugCommit,
    };
  }, []);

  return (
    <div className="property-1default1" style={property1Default1Style}>
      <img
        className="property-1default-item"
        alt=""
        src="/rectangle-5@2x.png"
      />
      <div className="lorem-ipsum-dolor9">{` Avengers`}</div>
      <div className="rating">{` 7.9`}</div>
      <div className="duration">{` 2 hours 19 minutes`}</div>
    </div>
  );
};

export default Movie2Component;
