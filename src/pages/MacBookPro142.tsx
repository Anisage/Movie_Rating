import { FunctionComponent } from "react";
import LogInForm from "../components/LogInForm";
import "./MacBookPro142.css";

const MacBookPro142: FunctionComponent = () => {
  return (
    <div className="log-in-page-1">
      <img className="background-image-icon1" alt="" src="/dune.jpg" />
      <section className="overlay2" />
      <LogInForm />
    </div>
  );
};

export default MacBookPro142;
