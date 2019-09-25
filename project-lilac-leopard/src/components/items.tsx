import React from "react";
import ItemsState from "./model/itemsState.ts";

const Items = (props: {state: ItemsState, pushItem: Function, popItem: Function}) => {

    const items = props.state.items.map((i) => <div key={i}>{i}</div>);

    return (
        <div>
            <div className={"container"}>
                {items}
            </div>
            <div>
                <button onClick={props.pushItem}>Push</button>
                <button onClick={props.popItem}>Pop</button>
            </div>
        </div>
    );
};

export default Items;
