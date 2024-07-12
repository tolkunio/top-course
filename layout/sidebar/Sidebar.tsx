import s from './Sidebar.module.css'
import {SidebarProps} from "@/layout/sidebar/Sidebar.props";

const Sidebar = ({...props}: SidebarProps) => {
    return <div {...props}>
        sidebar
    </div>
};

export default Sidebar;
