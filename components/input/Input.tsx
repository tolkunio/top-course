import s from './Input.module.css'
import cn from "classnames";
import {InputProps} from "@/components/input/Input.props";
import {forwardRef, ForwardedRef} from "react";

const Input = forwardRef(({error, className, ...rest}: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
        <div className={s.inputWrapper}>
            <input className={cn(className ?? '', s.input,{
                [s.error]:error
            })} ref={ref} {...rest}/>
            {error && <span className={s.errorMsg}>{error.message}</span>}
        </div>
    );
});

export default Input;
