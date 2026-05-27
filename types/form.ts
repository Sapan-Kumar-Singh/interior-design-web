type InputType = "text" | "email" | "password" | "number" | "tel" | "url" | "search" | "date" | "textarea" | "select";
export interface InputField {
  label?: string;
  field: string;
  type?: InputType;

  required?: boolean;
  placeholder?: string;

  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;

  errorMessage?: string;

  className?: string;
  wrapperClassName?: string;
  labelClassName?: string;

  rows?: number;
  flex?: number;
  defaultValue?: string;

  options?: {
    label: string;
    value: string;
  }[];
  dependsOn?: string;
  dependentOptions?: {
    [key: string]: {
      label: string;    
      value: string;
    }[];
  };
}


export interface InputFormConfig {
    title: string;
    description?: string;

    inputFields: InputField[];

    submitButtonText?: string;

    footer?: React.ReactNode;

    onSubmit?: (e: any) => void;

    className?: string;
}