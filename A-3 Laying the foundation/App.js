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
    <h1 className="main-title">React Playground</h1>
)

//Componenet Composition
const Heading = () => (
    <>
        <Title />
        <div className="title">
            <div className="my-logo">
                <img src={myLogo} alt="mylogo" />
            </div>
            <h1 className="h1-heading"><span>Empower</span> yourself with belief in your ability to create positive change and inspire others</h1>
            <h2 className="h2-heading">Embrace the power within you to uplift and <span>inspire</span> those around you.</h2>
            <h3 className="h3-heading">Unlock your potential to <span>achieve</span> greatness and surpass all expectations</h3>
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
                <div className="seach-container">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="text" name="search" id="search-input" placeholder='Search' />
                </div>
                <i className="login-image fa-solid fa-user" title="LogIn/SignUp"></i>
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
