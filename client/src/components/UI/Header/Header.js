import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestionCircle,
  faExclamationCircle,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import './Header.scss';

const Header = () => {
  return (
    <div className="header">

<div className="headerW">
<div className="logo">
        <img src="https://lh3.googleusercontent.com/zcxdxMXTTKmqyxikX9JbJG7cvOlvJt8UHOdZIWrTeyCYmd_xEu76VQZESbM4ZMCKNgXQ" />
        <span className="help-text">VideoX</span>
      {/* </div> */}
      <div className="action-btn">
        <FontAwesomeIcon className="icon-block" icon={faQuestionCircle} />
        <FontAwesomeIcon className="icon-block" icon={faExclamationCircle} />
        <FontAwesomeIcon className="icon-block" icon={faCog} />
      </div>
      </div>
<div>
<svg className="waves" 
viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
<defs>
<path id="Gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
</defs>
<g className="parallax">
<use href="#Gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
<use href="#Gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
<use href="#Gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
<use href="#Gentle-wave" x="48" y="7" fill="#fff" />
</g>
</svg>
</div>

</div>


      
    </div>
  );
};
export default Header;
