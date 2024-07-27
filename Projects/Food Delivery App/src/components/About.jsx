import UserClass from "../class_based_components/UserClass";
import UserContext from "../utils/useContext";

const About = () => {
  return (
    <div>
      <h1>This is About Page</h1>
      <UserClass />

      <div>
        User Name:-
        <UserContext.Consumer>
          {({loggedInUser}) => <span>{loggedInUser}</span>}
        </UserContext.Consumer>
      </div>
    </div>
  );
};

export default About;
