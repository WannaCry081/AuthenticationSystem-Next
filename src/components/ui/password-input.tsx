import { cn } from "@/lib/utils";
import { useState, InputHTMLAttributes } from "react";
import { Input } from "@/components/ui/input";

interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  className?: string;
  placeholder: string;
  field: InputHTMLAttributes<HTMLInputElement>;
}

const PasswordInput = ({
  className = "",
  placeholder,
  field,
  ...props
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className="relative flex items-center">
      <Input
        type={showPassword ? "text" : "password"}
        minLength={8}
        maxLength={101}
        className={cn("rounded-r-none focus-visible:ring-0", className)}
        placeholder={placeholder}
        {...field}
        {...props}
      />
      <span
        onClick={() => setShowPassword((prev) => !prev)}
        className="cursor-pointer px-4 py-2 rounded-r-sm bg-neutral-800 flex place-items-center h-12"
      >
        <p className="underline text-sm">{showPassword ? "hide" : "show"}</p>
      </span>
    </div>
  );
};

export { PasswordInput };
