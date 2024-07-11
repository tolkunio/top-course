import s from './Paragraph.module.css'
import {ParagraphProps} from "@/components/paragraph/Paragraph.props";
import cn from "classnames";

const Paragraph = ({size, children, className = 'm', ...rest}: ParagraphProps) => {
    return (
        <p className={cn(s.p, className ? className : '',
            {
                [s.s]: size == 's',
                [s.m]: s == 'm',
                [s.l]: s == 'l'
            })}{...rest}>
            {children}
        </p>
    );
};

export default Paragraph;
