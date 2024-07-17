import s from './Sidebar.module.css'
import {SidebarProps} from "@/layout/sidebar/Sidebar.props";
import Menu from "@/layout/sidebar/menu/Menu";

const Sidebar = ({...props}: SidebarProps) => {
    return (
        <div{...props}>
            <Menu/>
        </div>
    )
};

export default Sidebar;
