//This container connects <App/> to the Redux state store.
//  It's a good practice to separate this "connecting-to-redux" logic into it's component/container, 
//  like we've done here. And to keep the React component (i.e. the real <App/> component) free
//  of Redux logic.

import { connect } from "react-redux";
import App from "../components/app.jsx";
import { pushItem, popItem, toggleSetting } from "../actions/appActions";

//These functions will be passed to the <App/> component as props.
//  <App/> can call them to dispatch an action.
//  These functions call Redux's "dispatch" method which sends actions to the reducers, which in 
//  turn updates the store, which then updates state (see mapStateToProps below).
const mapDispatchToProps = dispatch => {
    return {
        pushItem: () => dispatch(pushItem()),
        popItem: () => dispatch(popItem()),
        toggleSetting: (settingNrToToggle) => dispatch(toggleSetting(settingNrToToggle))
    }
};

//itemsState and settingsState will be passed as props to <App/>.
//  When the Redux store state changes (via actions), these will refresh
//  and cause React to re-render its components. 
const mapStateToProps = state => {
    return {
        itemsState: state.itemsState,
        settingsState: state.settingsState
    }
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppContainer; 