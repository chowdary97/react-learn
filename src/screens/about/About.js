import "./About.css";
import { User } from "../../components";
import { UserClass } from "../../classcomponents";
function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About Me</h1>
      <p className="about-text">
        I am a software engineer with a passion for technology and design.
      </p>
      <div className="user-cards" >
        <User />
        <UserClass name={"Thimma Chowdary"} />
      </div>
    </div>
  );
}

export default About;
