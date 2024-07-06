//Hello World using javascript
// const h1 = document.createElement('h1');
// h1.innerText = "Hello, World using javascript!"
// const render = document.getElementById("root");
// render.append(h1)

//Hello World using react
// const h1 = React.createElement("h1", {}, "Hello, world using React!");
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(h1);

//Creating nested react element
/*
<div className="container">
    <div className="sub-container">
        <img src="" alt="" />
        <h1>Creating nested react elements! </h1>
    </div>
</div>
*/


const container = React.createElement("div", { className: "container" },
    React.createElement("div", { className: "sub-container" },
        React.createElement("img", { src: "#" ,alt: "image"}),
        React.createElement("h1", {}, "Creating nested react elements!")))

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);




