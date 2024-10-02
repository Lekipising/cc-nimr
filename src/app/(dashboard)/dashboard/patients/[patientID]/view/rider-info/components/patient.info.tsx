import React from "react";

export function PatientInfo({
  title,
  value,
  type = "text",
  customCss,
  selectOptions,
}: {
  title: string;
  value: string;
  type?: string;
  customCss?: string;
  selectOptions?: string[];
}) {
  return (
    <div
      className={`w-full bg-[#EFEFEF] border-[1px] border-[#808080] p-2 flex flex-col gap-1 ${customCss}`}
    >
      <label className="text-[#676767]">{title}</label>
      {type === "select" && selectOptions ? (
        <select
          value={value}
          disabled
          className="text-[#2A2A2A] text-lg font-semibold bg-transparent border-none cursor-default"
        >
          {selectOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          value={value}
          disabled
          className="text-[#2A2A2A] text-lg font-semibold bg-transparent border-none cursor-default"
        />
      )}
    </div>
  );
}
