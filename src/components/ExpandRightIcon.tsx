import { FunctionComponent, useCallback } from "react";
import "./ExpandRightIcon.css";

const ExpandRightIcon: FunctionComponent = () => {
  const onExpandRightClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameImage']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <img
      className="expand-right-icon"
      loading="lazy"
      alt=""
      src="/expand-right.svg"
      onClick={onExpandRightClick}
    />
  );
};

export default ExpandRightIcon;
