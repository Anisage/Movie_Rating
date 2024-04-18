import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./LogInForm.css";

const LogInForm: FunctionComponent = () => {
  const navigate = useNavigate();

  const onConnectButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="log-in-form7">
      <div className="log-in-form8" />
      <div className="logo-holder">
        <div className="log-in-frame">
          <div className="log-in3">Log In</div>
        </div>
        <div className="lorem-ipsum-dolor-container5">
          <p className="lorem-ipsum-dolor4">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ut sem viverra aliquet. Congue eu consequat ac felis donec et. `}</p>
          <p className="blank-line8">&nbsp;</p>
          <p className="convallis-convallis-tellus4">{`Convallis convallis tellus id interdum velit laoreet id donec. Faucibus vitae aliquet nec ullamcorper sit amet risus. Facilisis mauris sit amet massa vitae tortor. Purus gravida quis blandit turpis cursus. `}</p>
          <p className="blank-line9">&nbsp;</p>
          <p className="malesuada-fames-ac4">
            Malesuada fames ac turpis egestas. Habitasse platea dictumst
            vestibulum rhoncus est pellentesque elit ullamcorper. Sed augue
            lacus viverra vitae. Dui id ornare arcu odio. Eu sem integer vitae
            justo eget magna.
          </p>
        </div>
      </div>
      <div className="log-in-form-child">
        <div className="connect-button-parent1">
          <div className="connect-button3" onClick={onConnectButtonClick} />
          <div className="connect-to-wallet4">Connect to Wallet</div>
        </div>
      </div>
    </div>
  );
};

export default LogInForm;
