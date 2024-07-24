import s from './Card.module.css'
import cn from "classnames";
import {CardProps} from "@/components/card/Card.props";
import {forwardRef} from "react";
import {ForwardedRef} from "react";

const Card = forwardRef(({color, children, className, ...rest}: CardProps, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <div className={cn(s.card, className ? className : '',
            {
                [s.blue]: color == 'blue'
            })}
             ref={ref}
             {...rest}>
            {children}
        </div>
    );
});

export default Card;
