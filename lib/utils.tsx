import { Textarea } from '@/components/ui/textarea';
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Input } from '@/components/ui/input';
import { InputField } from '@/types/form';


const inputStyles = `
  border-0 border-b border-cream-dark rounded-none
  focus-visible:ring-0 focus-visible:border-obsidian
  font-sans text-[13px] px-0 bg-transparent
  placeholder:text-hint transition-colors duration-200
`;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export function renderFormField(field: InputField) {
  if (field.hidden) return null;

  const commonProps = {
    id: field.field,
    name: field.field,
    required: field.required,
    disabled: field.disabled,
    readOnly: field.readOnly,
    defaultValue: field.defaultValue,
    placeholder: field.placeholder,
    className: cn(inputStyles, field.className),
  };

  const renderInput = () => {
    switch (field.type) {
      case "textarea":
        return (
          <Textarea
            {...commonProps}
            rows={field.rows || 4}
          />
        );

      case "email":
      case "password":
      case "number":
      case "tel":
      case "url":
      case "search":
      case "date":
      case "text":
      default:
        return (
          <Input
            type={field.type || "text"}
            {...commonProps}
          />
        );
    }
  };

  return (
    <div
      key={field.field}
      className={cn("space-y-1", field.wrapperClassName)}
    >
      {field.label && (
        <label
          htmlFor={field.field}
          className={cn(
            "block text-sm font-medium text-obsidian/80",
            field.labelClassName
          )}
        >
          {field.label}

          {field.required && (
            <span className="ml-1 text-red-500">*</span>
          )}
        </label>
      )}

      {renderInput()}

      {field.errorMessage && (
        <p className="text-xs text-red-500">
          {field.errorMessage}
        </p>
      )}
    </div>
  );
}
