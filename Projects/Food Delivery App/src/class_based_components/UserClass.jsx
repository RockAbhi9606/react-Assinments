import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
      userInfo: {},
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/RockAbhi9606");
    const json = await data.json();
    this.setState({ userInfo: json });
  }

  render() {
    const { name, location, avatar_url, company } = this.state.userInfo;
    const { count } = this.state;
    return (
      <div className="owner-info">
        <h1>Count={count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          click me
        </button>
        <h3>This is Class Component</h3>
        <img src={avatar_url} alt="" style={{ width: "12%" }} />
        <p>Name:{name} </p>
        <p>Location: {location} </p>
        <p>Email: abhishek@gmail.com</p>
        <p>Company: {company}</p>
      </div>
    );
  }
}

export default UserClass;
