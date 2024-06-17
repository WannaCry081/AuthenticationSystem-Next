import { useState } from "react";
import { Input } from "@/components/ui/input";


interface PasswordInputProps {
  className : string,
  placeholder : string,
  field : Object
};

const PasswordInput = ({ className, placeholder, field } : PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className="relative flex items-center">
      <Input 
        minLength={8}
        maxLength={101}
        type={(showPassword) ? "text" : "password"}
        className={`${className} rounded-r-none focus-visible:ring-0`}
        placeholder={placeholder}
        {...field} />

        <span
          onClick={() => setShowPassword(prev => !prev)}
          className="cursor-pointer h-12 px-4 py-2 rounded-r-sm bg-neutral-800 flex place-items-center">
          <p className="underline text-sm">show</p>
        </span>
    </div>
  );
}


export { PasswordInput };