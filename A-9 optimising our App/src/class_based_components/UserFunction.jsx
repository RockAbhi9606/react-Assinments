import { useState } from "react";
import "../class_based_css/userInfo.css";

const UserFunction = ({ name, location }) => {
  const [count,setCount] = useState(1);

  return (
    <div className="owner-info">
      <h1>Count={count}</h1>
      <button onClick={()=>{
        setCount(count + 1);
      }}>Click me</button>
      <h3>This is function Component</h3>
      <p>Name:{name} from function</p>
      <p>Location: {location} from function</p>
      <p>Email: abhishek@gmail.com</p>
    </div>
  );
};

export default UserFunction;
