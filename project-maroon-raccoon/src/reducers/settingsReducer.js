// This reducer is only responsible for the { settingsState: ... } property on root state.

import {actionTypes} from "../actions/appActions.js";

const defaultSettingsState = {
    feature1Enabled: true,
    feature2Enabled: false
};

function reduce(prevState = defaultSettingsState, action) {
    switch (action.type) {
        case actionTypes.toggleSetting:
            return toggleSetting(prevState, action);
        default:
            //This reducer does not know how to handle the action. Just return
            //  state as-is.
            return prevState;
    }
}

function toggleSetting(prevState, action) {
    const newState = {...prevState};
    
    switch(action.settingNrToToggle) {
        case 1:
            newState.feature1Enabled = !newState.feature1Enabled; 
            break;
        case 2:
            newState.feature2Enabled = !newState.feature2Enabled;
            break; 
    }
    return newState;
}

export default reduce;