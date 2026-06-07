import { Textarea } from '@/components/ui/textarea';
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Input } from '@/components/ui/input';
import { InputField } from '@/types/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';


const inputStyles = `
  border-0 border-b border-cream-dark rounded-none
  focus-visible:ring-0 focus-visible:border-obsidian
  font-sans text-[13px] px-0 bg-transparent
  placeholder:text-hint transition-colors duration-200
`;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface RendrerFormFieldType {
  field: InputField;
  formValues: any;
  handleChange: (field: string, value: string) => void
}

export function renderFormField({ field, formValues, handleChange }: RendrerFormFieldType) {
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

  const parentValue =
    field.dependsOn
      ? formValues[field.dependsOn]
      : undefined;
  const options =
    field.dependentOptions && parentValue
      ? field.dependentOptions[parentValue] || []
      : field.options || [];

  const isDisabled = Boolean(
    field.disabled ||
    (field.dependsOn && !parentValue)
  )

  const renderInput = () => {
    switch (field.type) {
      case "textarea":
        return (
          <Textarea
            {...commonProps}
            value={formValues[field.field] ?? ""}
            rows={field.rows || 4}
            onChange={(e) =>
              handleChange(field.field, e.target.value)
            }
          />
        );

      case "select":
        return (
          <Select
            value={formValues[field.field] || ""}
            onValueChange={(value) => {
              handleChange(field.field, value)

              // reset child select
              if (field.field === "serviceType") {
                handleChange("serviceName", "")
              }
            }}
            disabled={isDisabled}
          >
            <SelectTrigger>
              <SelectValue
                placeholder={field.placeholder}
              />
            </SelectTrigger>

            <SelectContent>
              {options.map((option) => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
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
            value={formValues[field.field] ?? ""}
            onChange={(e) => {
              handleChange(field.field, e.target.value);
            }}
          />
        );
    }
  };

  return (
    <div
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
