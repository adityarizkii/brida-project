import React from "react";

const InputForm = (props: any) => {
  const { icon, children, type, id, label } = props;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <div className="flex items-center rounded-md border bg-[#F8F9FB] pl-3">
        {icon}
        <input
          type={type}
          id={id}
          className="w-full bg-transparent p-3 outline-none"
          placeholder={children}
          name={id}
        />
      </div>
    </div>
  );
};

export default InputForm;
