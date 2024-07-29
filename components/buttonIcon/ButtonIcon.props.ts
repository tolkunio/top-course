import {ReactNode} from "react";
import {DetailedHTMLProps} from "react";
import {ButtonHTMLAttributes} from "react";

export interface ButtonIconProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    appearance: 'primary' | 'white',
    icon: string,
}