import s from './Input.module.css'
import cn from "classnames";
import {InputProps} from "@/components/input/Input.props";

const Input = ({className, ...rest}: InputProps) => {
    return (
        <input className={cn(className ?? '', s.input)}{...rest}/>
    );
};

export default Input;
