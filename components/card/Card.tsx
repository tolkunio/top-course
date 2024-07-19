import s from './Card.module.css'
import cn from "classnames";
import {CardProps} from "@/components/card/Card.props";

const Card = ({color, children, className, ...rest}: CardProps) => {
    return (
        <div className={cn(s.card, className ? className : '',
            {
                [s.blue]: color == 'blue'
            })}{...rest}>
            {children}
        </div>
    );
};

export default Card;
