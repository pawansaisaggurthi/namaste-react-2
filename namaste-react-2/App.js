const headingReact = React.createElement(
    "h1", 
    { id: "reactHeading", "data-xyz": "abc" },
    "Hello Reactee"
);

console.log('headingReact',headingReact)

const reactRoot = ReactDOM.createRoot(document.getElementById("reactroot"));
reactRoot.render(headingReact);