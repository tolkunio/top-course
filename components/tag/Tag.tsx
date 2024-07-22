import s from './Tag.module.css'
import {TagProps} from "@/components/tag/Tag.props";
import cn from "classnames";

const Tag = ({size, children, color, href, className, ...rest}: TagProps) => {
    return (
        <div className={cn(s.tag,className??'', {
            [s.s]: size == 's',
            [s.m]: size == 'm',
            [s.primary]: color == 'primary',
            [s.ghost]: color == 'ghost',
            [s.gray]: color == 'gray',
            [s.green]: color == 'green',
            [s.red]: color == 'red'
        })}{...rest}>{
            href ? <a href={href}>{children}</a> : <>{children}</>
        }
        </div>
    );
};

export default Tag;
