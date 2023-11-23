import React from "react";
import PropTypes from "prop-types";
PrimaryButton.propTypes = {
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    className: PropTypes.string,
    variant: PropTypes.oneOf([
        "primary",
        "alerange",
        "warning",
        "danger",
        "light-outline",
        "white-outline",
    ]),
    processing: PropTypes.bool,
    children: PropTypes.node
};

export default function PrimaryButton({
    className = "",
    variant = "",
    processing,
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `rounded-2xl py-[13px] text-center w-full  ${
                    processing && "opacity-30"
                } bg-${variant} ${className}`
            }
            disabled={processing}
        >
            {children}
        </button>
    );
}
