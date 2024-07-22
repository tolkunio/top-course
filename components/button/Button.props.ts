import {ReactNode} from "react";
import {DetailedHTMLProps} from "react";
import {ButtonHTMLAttributes} from "react";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    appearance: 'primary' | 'ghost',
    children: ReactNode,
    className?: string,
    arrow?: 'right' | 'down' | 'none'
}