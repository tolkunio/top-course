import {ButtonProps} from "@/components/button/Button.props";
import s from './Button.module.css';
import cn from "classnames";
import ArrowIcon from './arrow.svg';

const Button = ({appearance, children, arrow = 'none', className, ...rest}: ButtonProps) => {
    return (
        <button
            className={cn(s.button, className, {
                [s.primary]: appearance === 'primary',
                [s.ghost]: appearance === 'ghost'
            })} {...rest}>
            {children}
            {
                arrow != 'none' && <span className={cn(s.arrow, {
                    [s.down]: arrow == 'down',
                    [s.right]: arrow == 'right'
                })}>
                <ArrowIcon/>
                </span>
            }
        </button>
    );
};

export default Button;
