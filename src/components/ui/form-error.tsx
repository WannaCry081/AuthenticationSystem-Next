import { cn } from "@/lib/utils";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { InputHTMLAttributes } from "react";

interface FormErrorProps {
  className?: string;
  message?: string;
}

const FormError = ({ className, message }: FormErrorProps) => {
  if (!message) {
    return null;
  }

  return (
    <div
      className={cn(
        "bg-destructive/15 p-4 rounded-md flex items-center gap-x-2 text-sm text-destructive",
        className
      )}
    >
      <ExclamationTriangleIcon className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};

export { FormError };
