import s from './Menu.module.css';
import {useContext} from "react";
import {AppContext} from "@/context/app.context";

const Menu = () => {
    const {menu, setMenu, firstCategory} = useContext(AppContext);
    return (
        <div>
            <ul>
                {menu.map(el => <li key={el._id.secondCategory}>{el._id.secondCategory}</li>)}
            </ul>
        </div>
    );
};

export default Menu;
