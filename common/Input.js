import React from "react";

const Input = ({
    type,
    error,
    value,
    onBlur,
    name,
    maxLength,
    minLength,
    required,
    className1,
    disabled,
    placeholder,
    classBox,
    onChange,
}) => {
    const handleChange = (e) => {
        if (onChange) {
            onChange(e);
        }
    };

    return (
        <div className={`relative ${classBox} rounded-lg`}>
            <input
                type={type}
                name={name}
                value={value} // Controlled component
                id={name}
                onBlur={onBlur}
                minLength={minLength}
                pattern={type === "number" ? "[0-9]*" : undefined}
                maxLength={maxLength}
                className={`block px-4 py-4  w-full text-base outline-none font-medium rounded-lg bg-[#FDF4F0] appearance-none peer ${className1} ${error ? "border-[red]" : ""
                    } placeholder-[#4E4D69] text-[#4E4D69]`}
                onChange={handleChange} // Use the handleChange function
                disabled={disabled}
                required={required}
                placeholder={placeholder}
                onWheel={(e) => e.target.blur()}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        e.preventDefault();
                    }
                }}
            />
        </div>
    );
};

export default Input;
