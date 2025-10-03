import { useState } from "react";

export const InputField = () => {
  const [value, setValue] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [variant, setVariant] = useState<"filled" | "outlined" | "ghost">("outlined");
  const [size, setSize] = useState<"sm" | "md" | "lg">("md");
  const [showError, setShowError] = useState(false);

  const sizes = {
    sm: "px-2 py-1 text-sm",
    md: "px-3 py-2",
    lg: "px-4 py-3 text-lg",
  };

  const variants = {
    filled: "bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200",
    outlined: "border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200",
    ghost: "border-none bg-transparent focus:border-b focus:border-blue-500",
  };

  return (
    <div className="p-6 border rounded-xl shadow-lg max-w-xl mx-auto">
      <div className="space-y-6">
        <h2 className="font-bold text-xl text-gray-800 border-b pb-2">InputField Controls</h2>
        <div className="flex flex-wrap gap-6">
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-700 mb-1">State</label>
            <select className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" value={`${disabled}-${invalid}-${showError}`} onChange={(e) => {const val = e.target.value;setDisabled(val.includes("disabled"));setInvalid(val.includes("invalid"));setShowError(val.includes("error"));}}>
              <option value="">Normal</option>
              <option value="disabled">Disabled</option>
              <option value="invalid">Invalid</option>
              <option value="error">Invalid + Error</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-700 mb-1">Variant</label>
            <select className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" value={variant} onChange={(e) => setVariant(e.target.value as "filled" | "outlined" | "ghost")}>
              <option value="outlined">Outlined</option>
              <option value="filled">Filled</option>
              <option value="ghost">Ghost</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-700 mb-1">Size</label>
            <select className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" value={size} onChange={(e) => setSize(e.target.value as "sm" | "md" | "lg")}>
              <option value="sm">Small</option>
              <option value="md">Medium</option>
              <option value="lg">Large</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-6">
        <label className="text-sm font-medium text-gray-700">Name</label>
        <div className="relative">
          <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Enter your name" disabled={disabled} className={`w-full rounded-lg transition-shadow border focus:ring-2 focus:ring-blue-200 ${sizes[size]} ${variants[variant]} ${ disabled ? "bg-gray-100 cursor-not-allowed opacity-70" : ""} ${invalid ? "border-red-500 focus:ring-red-200" : ""}`}/>
          {value && !disabled && (
            <button type="button" onClick={() => setValue("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500 hover:text-red-500 transition" title="Clear input">✕</button>
          )}
        </div>
        {(invalid && showError && (<p className="text-xs text-red-500">This is an error message</p>)) || <p className="text-xs text-gray-500">This is a helper text</p>}
      </div>
    </div>
  );
};
