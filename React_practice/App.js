import React from 'react';
import ReactDOM from 'react-dom/client';


//React Element
const heading = (<h1>
    Welcome To react, World!
</h1>)

/*
React Component-two ways of components 
 1. Class Based Components -old
 2. Functional Components-new

 1.Functional Components-
    - name should be start with capital letter.
    - A function which returns a peice of JSX called as funtional component.

    Q. What is Componenet Composition
    one componenet inside another called as componenet composition.
 */

const HeadingComponents = () => {
    return <h1 className='heading'> Welcome To react, World! with Functional Componenets</h1>
};
//Another way useing curly brackets
// const Title = () => {
//     return (
//         <h1>This title is for react</h1>)
// }

const Title = () => (
    <h1>This title is for react</h1>)

const Title2 = () => (
    <h1>This title is calling Title() for react</h1>)

const HeadingComponents2 = () => (
    <div className="container">
        {/* How to render functional componenet */}
        <Title />
        {Title2()}
        <Title></Title>
        {/* How to use react element */}
        {heading}
        <h1 className='heading'> Welcome To react, World! with Functional Componenets</h1>
    </div>)

const root = ReactDOM.createRoot(document.getElementById("root"));
//How to render react element
//root.render(heading);
//How to render functional componenet
root.render(<HeadingComponents2 />);




