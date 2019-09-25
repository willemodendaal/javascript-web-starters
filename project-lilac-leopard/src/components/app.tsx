import React from "react";

import Items from "./items.tsx";
import Settings from "./settings.tsx";
import ItemsState from "./model/itemsState.ts";
import SettingsState from "./model/settingsState.ts";

const App = (props:{itemsState: ItemsState, settingsState: SettingsState, pushItem, popItem, toggleSetting}) => {
    return (
        <div className={"app"}>
            <Settings state={props.settingsState} toggleSetting={props.toggleSetting} />
            <hr/>
            <Items state={props.itemsState} pushItem={props.pushItem} popItem={props.popItem} />
        </div>
    );
};

export default App;
