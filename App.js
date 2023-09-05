/* <div id='parent'>
    <div id='child'>
        <h1>This is h1 tag</h1>
    </div>

    <div id='child2'>
        <h1>This is h2 tag</h1>
    </div>
</div> */

// Example of html in the React

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "This is h1 tag")
  ),
  React.createElement(
    "div",
    { id: "child2" },
    React.createElement("h2", {}, "This is h2 tag")
  ),
]);

const header = React.createElement("h1", {}, "Header");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
