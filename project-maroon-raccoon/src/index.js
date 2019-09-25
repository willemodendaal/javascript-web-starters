import "./styles/main.scss";
import AppContainer from "./containers/appContainer";

import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";

//Create our "root" reducer and associated Redux store.
//  The 'store' is the central place where all our app state is stored.
import rootReducer from "./reducers/rootReducer";
const store = createStore(rootReducer);

ReactDOM.render(
    //We wrap our App inside the Redux state store *Provider*, and tell
    //  the provider which store to use. This is what links Redux to our React component.
    <Provider store={store}>
        <AppContainer />
    </Provider>, 
    document.getElementById("app")
);