import React from "react";
import PropTypes from "prop-types";

const Settings = ({state, toggleSetting}) => {
    return (
        <div className={"settings"}>
            <div onClick={()=> toggleSetting(1)}>Feature 1 enabled? {state.feature1Enabled.toString()}</div>
            <div onClick={()=> toggleSetting(2)}>Feature 2 enabled? {state.feature2Enabled.toString()}</div>
        </div>
    );
};
 
//Be clear about the structure of the props we expect.
//  React will log a warning in the console if we get something else.
Settings.propTypes = {
    state: PropTypes.shape({
        feature1Enabled: PropTypes.bool.isRequired,
        feature2Enabled: PropTypes.bool.isRequired
    }),
    toggleSetting: PropTypes.func.isRequired
};

export default Settings;
