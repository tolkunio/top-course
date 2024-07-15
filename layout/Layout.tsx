import React, {FunctionComponent} from 'react';
import {LayoutProps} from "@/layout/Layout.props";
import Header from "@/layout/header/Header";
import Sidebar from "@/layout/sidebar/Sidebar";
import Footer from "@/layout/footer/Footer";
import s from './Layout.module.css';

const Layout = ({children}: LayoutProps) => {
    return (
        <div className={s.wrapper}>
            <Header className={s.header}/>
            <Sidebar className={s.sidebar}/>
            <div className={s.body}>
                {children}
            </div>
            <Footer className={s.footer}/>
        </div>
    );
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T) {
        return (
            <Layout>
                <Component {...props}/>
            </Layout>
        )
    }
}