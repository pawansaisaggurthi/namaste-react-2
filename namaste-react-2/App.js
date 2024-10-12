
{/* <div id="parent">
    <div id="child1">
        <h1>Im h1 tag</h1>
        <h2>Im h1 tag</h2>
    </div>
    <div id="child2">
        <h1>Im h1 tag</h1>
        <h2>Im h1 tag</h2>
    </div>
</div> */}


//Same using react



const heading2 = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child1" },
        [React.createElement("h1", {}, "Im h1 tag"), React.createElement("h2", {}, "Im h2 tag")]),
    React.createElement("div", { id: "child2" }, [React.createElement("h1", {}, "Im h1 tag"), React.createElement("h2", {}, "Im h2 tag")])]
);



const reactRoot = ReactDOM.createRoot(document.getElementById("reactroot"));
reactRoot.render(heading2);