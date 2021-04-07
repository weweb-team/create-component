import React from "react";

export default (props) => {
    const style = { color: props.content && props.content.textColor };

    return (
        <div class="my-section">
        <h1 style={style}>My Title</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
        </p>
    </div>
    );
};
