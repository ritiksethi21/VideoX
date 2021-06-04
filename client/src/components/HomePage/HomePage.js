import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faKeyboard } from "@fortawesome/free-solid-svg-icons";
import shortid from "shortid";
import "./HomePage.scss";
import Header from "../UI/Header/Header";

const HomePage = () => {
  const history = useHistory();

  const startCall = () => {
    const uid = shortid.generate();
    history.push(`/${uid}#init`);
  };

  return (
    <div className="home-page">
      <Header />
      <div className="body">
        <div className="left-side">
          <div className="content">
            <h2>Free 1 to 1 video meeting now for everyone🎶</h2>
            <div className="action-btn">
              <button className="btn green" onClick={startCall}>
                <FontAwesomeIcon className="icon-block" icon={faVideo} />
                Start New
              </button>
              <div className="input-block">
                <div className="input-section">
                  <FontAwesomeIcon className="icon-block" icon={faKeyboard} />
                  <input placeholder="Enter a code or link" />
                </div>
                <button className="btn no-bg">Join</button>
              </div>
            </div>
          </div>
          <div className="help-text">
            <a href="https://github.com/ritiksethi21/VideoX" rel=
            "nonreferrer" target="_blank">Discover more</a> about VideoX.
          </div>
        </div>
        <div className="right-side">
          <div className="content">
            <img src="https://img.freepik.com/free-vector/people-meeting-online-via-video-conference-flat-illustration-cartoon-group-colleagues-virtual-collective-chat-during-lockdown_74855-14136.jpg?size=626&ext=jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
