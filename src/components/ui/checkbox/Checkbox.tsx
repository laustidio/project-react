import React from "react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string
}

const Checkbox: React.FC<CheckboxProps> = ({ label, ...props }) => {
    return (
        <label className="flex items-center space-x-2 cursor-pointer">
            <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-cyan-400 border-gray-300 rounded focus: ring-cyan-400"
                {...props}
            />
            <span className="text-white">{label}</span>
        </label>
    )
}

export default Checkbox