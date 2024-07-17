import s from './Header.module.css'
import {HeaderProps} from "@/layout/header/Header.props";
import cn from "classnames";

const Header = ({className,...props}: HeaderProps) => {
    return (
        <header className={cn(className,s.header)} {...props}>
            header
        </header>
    );
};

export default Header;
