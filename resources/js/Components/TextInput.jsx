import { forwardRef, useEffect, useRef } from "react";
import PropTypes from "prop-types";

forwardRef.propTypes = {
    type: PropTypes.oneOf(["text", "email", "number", "file"]),
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    variant: PropTypes.oneOf(["primary", 'error', 'primary-outline']),
    autoComplete: PropTypes.string,
    required: PropTypes.bool,
    isFocused: PropTypes.bool, // Diubah dari PropTypes.func
    handleChange: PropTypes.func, // Diubah dari PropTypes.string
    placeholder: PropTypes.string,
    isError: PropTypes.bool
};

export default forwardRef(function TextInput(
    {
        type = "text",
        className = "",
        isFocused = false,
        autoComplete,
        variant = "primary",
        defaultValue,
        placeholder,
        handleChange,
        required,
        isError,
        value,
        onChange,
        ...props
    },
    ref
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            value={value}
            handleChange={handleChange}
            defaultValue={defaultValue}
            className={`rounded-2xl bg-form-bg py-[13px] px-7 w-full ${isError} input-${variant}  ${className}`}
            ref={input}
            autoComplete={autoComplete}
            required={required}
            onChange={onChange} // Menggunakan onChange yang benar
            placeholder={placeholder}
        />
    );
});
