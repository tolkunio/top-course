import s from './Paragraph.module.css'
import {ParagraphProps} from "@/components/paragraph/Paragraph.props";
import cn from "classnames";

const Paragraph = ({size = 'm', children, className, ...rest}: ParagraphProps) => {
    return (
        <p className={cn(s.p, className ? className : '',
            {
                [s.s]: size == 's',
                [s.m]: size == 'm',
                [s.l]: size == 'l'
            })}{...rest}>
            {children}
        </p>
    );
};

export default Paragraph;
