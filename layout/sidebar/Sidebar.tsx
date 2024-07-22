import s from './Sidebar.module.css'
import {SidebarProps} from "@/layout/sidebar/Sidebar.props";
import Menu from "@/layout/sidebar/menu/Menu";
import Logo from '../../public/icons/logo.svg'
import cn from "classnames";
import Search from "@/components/search/Search";

const Sidebar = ({className, ...props}: SidebarProps) => {
    return (
        <div className={cn(className, s.sidebar)} {...props}>
            <Logo className={s.logo}/>
            <Search/>
            <Menu/>
        </div>
    )
};

export default Sidebar;
