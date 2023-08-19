import React from "react";

const IconButton = ({ children, onClick, ...allyProps }) => {
    <button
        type="dutton"
        onClick={onClick} {...allyProps}>{children}</button>
}

IconButton.defaultProps = {
    onClick: null,
    children: null
}

IconButton.defaultProps = {
    onClick: PropTypes.func,
    children: PropTypes.node,
    'aria-label': PropTypes.string.isRequired
}

export default IconButton;