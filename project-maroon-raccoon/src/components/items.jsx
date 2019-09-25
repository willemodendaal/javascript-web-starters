import React from "react";
import PropTypes from "prop-types";

const Items = ({state, pushItem, popItem}) => {

    const items = state.items.map((i) => <div key={i}>{i}</div>);

    return (
        <div>
            <div className={"container"}>
                {items}
            </div>
            <div>
                <button onClick={pushItem}>Push</button>
                <button onClick={popItem}>Pop</button>
            </div>
        </div>
    );
};

//Be clear about the structure of the props we expect.
//  React will log a warning in the console if we get something else.
Items.propTypes = {
    state: PropTypes.shape({
        items: PropTypes.arrayOf(PropTypes.string.isRequired)
    }),
    pushItem: PropTypes.func.isRequired,
    popItem: PropTypes.func.isRequired
};

export default Items;
