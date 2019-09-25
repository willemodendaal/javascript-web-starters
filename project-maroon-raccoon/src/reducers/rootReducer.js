
    
//combineReducers is used when we do 'reducer composition', to let different functions manage different parts of the state.
//  Good for maintainability.
import {combineReducers} from "redux";

//These reducers both manage their own "part" of state ('itemsState' and 'settingsState' respectively).
import handleItemActions from "./itemsReducer";
import handleSettingActions from "./settingsReducer";

//Our application state is split in two, to illustrate how to 
//  "scale out" state in a complex application.
//  We have state for "Items" and state for "Settings", two parts of our react application.
//  The combined, overall application state will be as follows:
//  {
//    itemsState: { items: [] },
//    settingsState: {...}
//  }
const rootReducer = combineReducers({
    itemsState: handleItemActions,
    settingsState: handleSettingActions
});

export default rootReducer;