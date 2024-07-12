import s from './Header.module.css'
import {HeaderProps} from "@/layout/header/Header.props";

const Header = ({...props}: HeaderProps) => {
    return (
        <div{...props}>
            header
        </div>
    );
};

export default Header;
