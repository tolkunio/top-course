import s from './Divider.module.css'
import cn from "classnames";
import {DividerProps} from "@/components/divider/Divider.props";

const Divider = ({className, ...rest}: DividerProps) => {
    return (
        <hr className={cn(className ?? '', s.hr)}{...rest}/>
    );
};

export default Divider;
