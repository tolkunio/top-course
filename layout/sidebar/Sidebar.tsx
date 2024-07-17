import s from './Sidebar.module.css'
import {SidebarProps} from "@/layout/sidebar/Sidebar.props";
import cn from "classnames";

const Sidebar = ({className, ...props}: SidebarProps) => {
    return <div className={cn(className,s.sidebar)} {...props}>
        sidebar
    </div>
};

export default Sidebar;
