import s from './Input.module.css'
import cn from "classnames";
import {InputProps} from "@/components/input/Input.props";
import {forwardRef, ForwardedRef} from "react";

const Input = forwardRef(({className, ...rest}: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
        <input className={cn(className ?? '', s.input)} ref={ref} {...rest}/>
    );
});

export default Input;
