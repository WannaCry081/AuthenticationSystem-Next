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
        type={(showPassword) ? "text" : "password"}
        className={`${className} rounded-r-none focus-visible:ring-0`}
        placeholder={placeholder}
        {...field} />

        <p 
          onClick={() => setShowPassword(prev => !prev)}
          className={`cursor-pointer h-10 px-4 py-2 text-sm underline rounded-r-sm bg-neutral-800 align-middle`}>
          show
        </p>
    </div>
  );
}


export { PasswordInput };