// const heading = React.createElement("h1" , {id : "hehe"}, "sare duniya jala dhunga...");

{/* <div id = "parent">
    <div id = "child">
        <h1>hii h1</h1>
        <h2>hii h2</h2>
    </div>
    <div id = "child2">
        <h1>bye h1</h1>
        <h2>bye h2</h2>
    </div>
</div> */}

const parent = React.createElement(
    "div",
    {id: "parent"},
    [React.createElement("div",{id : "child"},
    [React.createElement("h1", {}, "hii, h1"),
    React.createElement("h2", {}, "hii, h2")]),
    
    React.createElement("div",{id : "child2"},
    [React.createElement("h1", {}, "bye, h1"),
    React.createElement("h2", {}, "bye, h2")])]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);