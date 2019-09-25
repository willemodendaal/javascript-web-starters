// This reducer is only responsible for the { settingsState: ... } property on root state.

import {actionTypes} from "../actions/appActions.ts";
import SettingsState from "../model/settingsState.ts";

const defaultSettingsState = new SettingsState(true, false);

function reduce(prevState: SettingsState = defaultSettingsState, action) {
    switch (action.type) {
        case actionTypes.toggleSetting:
            return toggleSetting(prevState, action);
        default:
            //This reducer does not know how to handle the action. Just return
            //  state as-is.
            return prevState;
    }
}

function toggleSetting(prevState: SettingsState, action) {
    const newState = prevState.clone();
    newState.toggleSetting(action.settingNrToToggle);    
    return newState;
}

export default reduce;