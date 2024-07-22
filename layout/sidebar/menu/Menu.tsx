import {useContext} from "react";
import {AppContext} from "@/context/app.context";
import {FirstLevelMenuItem} from "@/interfaces/menu.interface";
import s from './Menu.module.css';
import cn from "classnames";
import {PageItem} from "@/interfaces/menu.interface";
import Link from "next/link";
import {useRouter} from "next/router";
import {firstLevelMenu} from "@/helpers/helpers";



const Menu = () => {
    const {menu, setMenu, firstCategory} = useContext(AppContext);
    const router = useRouter();
    const openSecondLevel = (secondCategory : string) => {
        setMenu && setMenu(menu.map(m => {
            if (m._id.secondCategory === secondCategory) {
                m.isOpened = !m.isOpened
            }
            return m;
        }))
    }
    const buildFirstLevel = () => {
        return (
            <>
                {firstLevelMenu.map((menu) => (
                    <div key={menu.route}>
                        <Link href={`${menu.route}`}>
                            <div className={cn(s.firstLevel, {
                                [s.firstLevelActive]: menu.id === firstCategory
                            })}>
                                {menu.icon}
                                <span>{menu.name}</span>
                            </div>
                        </Link>
                        {menu.id === firstCategory && buildSecondLevel(menu)}
                    </div>
                ))}
            </>
        )
    }
    const buildSecondLevel = (firstLevelMenu: FirstLevelMenuItem) => {
        return (
            <div className={s.secondBlock}>
                {
                    menu.map(m => {
                            if (m.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
                                m.isOpened = true;
                            }
                            return (
                                <div key={m._id.secondCategory}>
                                    <div className={s.secondLevel} onClick={() => openSecondLevel(m._id.secondCategory)}>
                                        {m._id.secondCategory}
                                    </div>
                                    <div className={cn(s.secondLevelBlock, {
                                        [s.secondLevelBlockOpen]: m.isOpened
                                    })}>
                                        {buildThirdLevel(m.pages, firstLevelMenu.route)}
                                    </div>
                                </div>
                            )
                        }
                    )}
            </div>
        )

    }
    const buildThirdLevel = (pages: PageItem[], route: string) => {
        return (
            pages.map(p => (
                <Link href={`/${route}/${p.alias}`} className={cn(s.thirdLevel, {
                    [s.thirdLevelActive]: `/${route}/${p.alias}` == router.asPath
                })}>
                    {p.category}
                </Link>
            ))
        )
    }
    return (
        <div className={s.menu}>
            {buildFirstLevel()}
        </div>
    );
};

export default Menu;