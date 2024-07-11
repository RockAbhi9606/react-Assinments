import React from 'react';
import ReactDOM from 'react-dom/client';
import myLogo from './images/my-logo-transparent.png'
import "./index.css"

/*Question:

<div className="title">
    <h1>This is h1</h1>
    <h2>This is h2</h2>
    <h3>This is h3</h3>
</div>

*/

//Using React
// const heading = React.createElement("div", { className: "title" },
//                     React.createElement('h1', {}, "This is h1"),
//                     React.createElement('h2', {}, "This is h2"),
//                     React.createElement('h3', {}, "This is h3"))

//Using JSX
// const heading = (<div className="title">
//     <h1>This is h1</h1>
//     <h2>This is h2</h2>
//     <h3>This is h3</h3>
// </div>)

//Creating functional component for the same

const Title = () => (
    <h1 className="main-title">Main Heading</h1>
)

//Componenet Composition
const Heading = () => (
    <>
        <Title />
        <div className="title">
            <h1 className="h1-heading">This is h1</h1>
            <h2 className="h2-heading">This is h2</h2>
            <h3 className="h3-heading">This is h3</h3>
        </div>
    </>
)

const Header = () => (
    <>
        <div className="header-container">
            <img className='img-responsive' src={myLogo} alt="myLogo" />
            <div className="left-side">
                <span>Home</span>
                <span>About</span>
                <span>Contact</span>
            </div>
            <div className="right-side">
                <i class="login-image fa-solid fa-user"></i>
            </div>
        </div>
        <Heading />
    </>
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />)

//Use of react element
// root.render(heading);

//Use of react component
//root.render(<Heading />) 
