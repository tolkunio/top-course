import {ButtonProps} from "@/components/button/Button.props";
import s from './ButtonIcon.module.css';
import cn from "classnames";
import ArrowIcon from './arrow.svg';
import upIcon from '../../public/icons/up.svg';
import closeIcon from '../../public/icons/close.svg';
import menuIcon from '../../public/icons/menu.svg';

export const icons = {
    upIcon,
    closeIcon,
    menuIcon
}
export type IconName = keyof typeof icons;
const ButtonIcon = ({appearance, children, className, ...rest}: ButtonProps) => {
    return (
        <button
            className={cn(s.button, className ?? '', {
                [s.primary]: appearance === 'primary',
                [s.white]: appearance === 'ghost'
            })} {...rest}>
            {children}
            {

            }
        </button>
    );
};

export default ButtonIcon;
