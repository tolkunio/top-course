import {DetailedHTMLProps} from "react";
import {HTMLAttributes} from "react";
import {ReactNode} from "react";

export interface ParagraphProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    size?: 's' | 'm' | 'l',
    children: ReactNode
}