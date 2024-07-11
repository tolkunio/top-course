import {DetailedHTMLProps} from "react";
import {HTMLAttributes} from "react";
import {ReactNode} from "react";

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode,
    size?: 's' | 'm',
    color?: 'primary' | 'ghost' | 'red' | 'gray' | 'green',
    href?:string
}