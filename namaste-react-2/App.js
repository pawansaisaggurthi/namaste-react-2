
import React from "react";
import ReactDOM from "react-dom/client";


const heading = React.createElement(
    "h1",
    {id:"heading"},
    "namaste react"
);



const title = (
<h1>Pawan2</h1>
)

const HeadingComponent2 = () => (
    <div id="container">
                {title}
        <h1>Namste HeadingComponent2</h1>
    </div>
    )

const HeadingComponent = () => (
    <div id="container">
        <HeadingComponent2/>
                {title}
        <h1>Namste</h1>
    </div>
    )




const reactRoot = ReactDOM.createRoot(document.getElementById("reactroot"));
reactRoot.render(<HeadingComponent/>);