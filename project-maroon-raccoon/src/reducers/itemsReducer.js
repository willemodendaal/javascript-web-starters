// This reducer is only responsible for the { itemsState: ... } property on root state.

import {actionTypes} from "../actions/appActions.js";

const defaultItemsState = {
    items: ['item1', 'item2']
};

function reduce(prevState = defaultItemsState, action) {
    switch (action.type) {
        case actionTypes.popItem:
            return popItem(prevState, action);
        case actionTypes.pushItem:
            return pushItem(prevState, action);
        default:
            //This reducer does not know how to handle the action. Just return
            //  state as-is.
            return prevState;
    }
}

//These functions must return new state, never modify existing state.
//  The ES6 spread (...) operator is useful here to clone collections (note that for more complex items
//    this is insufficient, since we need to do a deep-copy, not a shallow one).
function popItem(prevState, action) {
    const newState = {items: [...prevState.items]};
    newState.items.pop();
    return newState;
}

function pushItem(prevState, action) {
    const newState = {items: [...prevState.items]};
    newState.items.push(`item ${newState.items.length + 1}`);
    return newState;
}

export default reduce;