import React from "react";
import SettingsState from "./model/settingsState.ts";

const Settings = (props: {state: SettingsState, toggleSetting: Function}) => {
    return (
        <div className={"settings"}>
            <div onClick={()=> props.toggleSetting(1)}>Feature 1 enabled? {props.state.feature1Enabled.toString()}</div>
            <div onClick={()=> props.toggleSetting(2)}>Feature 2 enabled? {props.state.feature2Enabled.toString()}</div>
        </div>
    );
};
 
export default Settings;
