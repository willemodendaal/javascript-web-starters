import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.scss";

const App = () => {
    return (
        <div className={"container"}>
            <div>Item1</div>
            <div>Item2</div>
            <div>Item3</div>
            <div>Item4</div>
        </div>
    );
};

export default App;

ReactDOM.render(<App/>, document.getElementById("app"));