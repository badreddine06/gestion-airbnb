import React from "react";

const FormInput = ({name, type="text", value, setValue, placeholder, islisting=false}) => {
  return (
  <input 
    type={type} 
    value={value}
    name={name}
    placeholder={placeholder}
    onChange={(e) => 
      islisting ? setValue(name, e.target.value): setValue(e.target.value)
    }
    className="boeder border-gray-300 px-2 py-4 rounded-md w-full"
  />
  );
};

export default FormInput;
