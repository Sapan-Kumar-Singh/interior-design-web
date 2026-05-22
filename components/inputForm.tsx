import React from "react";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card";

import { Button } from "./ui/button";

import { ArrowUpRight } from "lucide-react";

import { renderFormField } from "@/lib/utils";
import { InputFormConfig } from "@/types/form";


const InputForm = (formConfig: InputFormConfig) => {
    const {
        title,
        description,
        inputFields,
        submitButtonText = "Save",
        footer,
        onSubmit,
        className,
    } = formConfig;

    return (
        <Card
            className={`
                w-full
                bg-white/96
                backdrop-blur-md
                border border-white/20
                rounded-xl
                p-4 sm:p-6
                shadow-[0_4px_30px_rgba(0,0,0,0.08)]
                ${className ?? ""}
             `}
            >
            <form onSubmit={onSubmit}>
                <CardHeader className="pb-4 px-0">
                    <CardTitle
                        className="font-semibold text-xl sm:text-2xl text-obsidian">
                        {title}
                    </CardTitle>

                    {description && (
                        <CardDescription
                            className="text-sm text-obsidian/80 leading-relaxed mt-2">
                            {description}
                        </CardDescription>
                    )}
                </CardHeader>

                <CardContent
                    className="pt-2 px-0 flex flex-wrap gap-4">
                    {inputFields.map((field) => {

                        return (
                            <div key={field.field}
                                style={{
                                    width: `calc(${(field.flex ?? 1) * 100}% - 8px)`,
                                }}
                                className="w-full md:min-w-0">
                                {renderFormField(field)}
                            </div>
                        );
                    })}
                </CardContent>

                <CardFooter
                    className=" px-0 pt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 bg-inherit">
                    <Button
                        type="submit"
                        className="w-full sm:w-full">
                        {submitButtonText ?? "Save"}
                        <ArrowUpRight size={14} />
                    </Button>
                    {footer}
                </CardFooter>
            </form>
        </Card>
    );
};

export default InputForm;