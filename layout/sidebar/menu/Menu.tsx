import {useContext} from "react";
import {AppContext} from "@/context/app.context";
import {FirstLevelMenuItem} from "@/interfaces/menu.interface";
import s from './Menu.module.css';
import cn from "classnames";
import {PageItem} from "@/interfaces/menu.interface";
import Link from "next/link";
import {useRouter} from "next/router";
import {firstLevelMenu} from "@/helpers/helpers";
import {motion} from "framer-motion"
import {Variants} from "framer-motion";


const Menu = () => {
    const {menu, setMenu, firstCategory} = useContext(AppContext);
    const router = useRouter();
    const variants = {
        visible: {
            marginBottom: 20,
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.1
            }
        },
        hidden: {
            marginBottom: 0
        }
    }
    const variantsChildren = {
        visible: {
            opacity: 1,
            height: 29
        },
        hidden: {
            opacity: 0,
            height: 0
        }
    }
    const openSecondLevel = (secondCategory: string) => {
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
                                    <motion.div
                                        layout
                                        variants={variants as Variants}
                                        initial={'hidden'}
                                        animate={m.isOpened ? 'visible' : 'hidden'}
                                        className={cn(s.secondLevelBlock)}>
                                        {buildThirdLevel(m.pages, firstLevelMenu.route)}
                                    </motion.div>
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
                <motion.div key={p._id} variants={variantsChildren}>
                    <Link href={`/${route}/${p.alias}`} className={cn(s.thirdLevel, {
                        [s.thirdLevelActive]: `/${route}/${p.alias}` == router.asPath
                    })}>
                        {p.category}
                    </Link>
                </motion.div>

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
