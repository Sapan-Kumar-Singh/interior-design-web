type InputType = "text" | "email" | "password" | "number" | "tel" | "url" | "search" | "date" | "textarea";
export interface InputField {
  label?: string;
  field: string;
  type?: InputType;

  required?: boolean;
  placeholder?: string;
  defaultValue?: string | number;

  disabled?: boolean;
  readOnly?: boolean;
  hidden?: boolean;

  errorMessage?: string;

  className?: string;
  wrapperClassName?: string;
  labelClassName?: string;

  rows?: number;
  flex?: number;
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