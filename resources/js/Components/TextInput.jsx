import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function TextInput(
    {
        type = "text",
        className = "",
        isFocused = false,
        defaultValue,
        autoComplete,
        variant = "primary",
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
            className={className}
            ref={input}
            autoComplete={autoComplete}
            required={required}
            onChange={(e) => handleChange(e)}
            placeholder={placeholder}
        />
    );
});
