import React from "react";
import { GITHUB_URL } from "../utils/constants";

class UserClass extends React.Component {
  // const [name,setName] = useState('');

  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      user: {},
    };
    console.log("constructor"); // first this is called  (first)
  }
  async componentDidMount() {
    console.log("componentDidMount"); // this is called after render (third)
    const userData = await fetch(GITHUB_URL);
    const data = await userData.json();
    console.log(data);
    this.setState({ ...data, user: data });
    this.timer = setInterval(() => {
      console.log("interval"); // this is called after render (
    }, 1000);
  }

  componentDidUpdate() {
    console.log("this is updated component");
  }

  componentWillUnmount() {
    console.log("component is unmounted");
    clearInterval(this.timer); // clearing interval on unmount (fourth)
  }

  render() {
    console.log("render"); // this is called after calling constructor (second)

    // const { name } = this.props;  -> destructing props;
    // const { count } = this.state; -> destructing state in classbased components
    return (
      <div className="user-card">
        <h2>User Profile</h2>
        <h3>Count : {this.state.count}</h3>
        <button
          onClick={() => {
            // Never update state variables in class based components directly.
            // this.state.count = this.state.count+1  (wrong way)
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Increment
        </button>
        <p>Name: {this.state.user.name}</p>
        <p>User Id: {this.state.user.login}</p>
        <p>Phone: 123-456-7890</p>
        <button>Edit</button>
      </div>
    );
  }
}

export default UserClass;
