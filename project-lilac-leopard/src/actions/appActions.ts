export const actionTypes = {
    pushItem: 'Items_PushItem',
    popItem: 'Items_PopItem',
    toggleSetting: 'Settings_ToggleSetting'
};

//Actions describe "what happened" (not how state changes).
//They are passed to reducers, which update the application state.

export function pushItem() {
    return {
        type: actionTypes.pushItem
    };
}

export function popItem() {
    return {
        type: actionTypes.popItem
    };
}

export function toggleSetting(settingNrToToggle) {
    return {
        type: actionTypes.toggleSetting,
        settingNrToToggle: settingNrToToggle
    };
}