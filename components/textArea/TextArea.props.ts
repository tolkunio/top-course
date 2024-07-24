import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";
import {FieldError} from "react-hook-form";

export interface TextAreaProps extends DetailedHTMLProps<HTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    children?: ReactNode,
    className?: string,
    error?:FieldError
}