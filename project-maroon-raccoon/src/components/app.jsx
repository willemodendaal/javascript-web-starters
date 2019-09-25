import React from "react";
import PropTypes from "prop-types";

import Items from "./items.jsx";
import Settings from "./settings.jsx";

const App = ({itemsState, settingsState, pushItem, popItem, toggleSetting}) => {
    return (
        <div className={"app"}>
            <Settings state={settingsState} toggleSetting={toggleSetting} />
            <hr/>
            <Items state={itemsState} pushItem={pushItem} popItem={popItem} />
        </div>
    );
};

//Specify what structure we expect the input props to be.
//  Passed from AppContainer.js
App.propTypes = {
    settingsState: PropTypes.shape({
        feature1Enabled: PropTypes.bool.isRequired,
        feature2Enabled: PropTypes.bool.isRequired
    }),
    itemsState: PropTypes.shape({
        items: PropTypes.arrayOf(PropTypes.string.isRequired)
    }),
    
    pushItem: PropTypes.func.isRequired,
    popItem: PropTypes.func.isRequired
};

export default App;
