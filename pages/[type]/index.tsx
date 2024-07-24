import React from 'react';
import {withLayout} from "@/layout/Layout";
import {GetStaticPaths,GetStaticProps,GetStaticPropsContext} from "next";
import {firstLevelMenu} from "@/helpers/helpers";
import axios from "axios";
import {MenuItem} from "@/interfaces/menu.interface";
import {ParsedUrlQuery} from "querystring";
import {API} from "@/helpers/api";

const Type = ({firstCategory}: TypeProps) => {
    return (
        <div>
            type:{firstCategory}
        </div>
    );
};

export default withLayout(Type);

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: firstLevelMenu.map(m => '/' + m.route),
        fallback: true
    }
}
export const getStaticProps: GetStaticProps<TypeProps> = async ({params}: GetStaticPropsContext<ParsedUrlQuery>) => {
    if (!params) {
        return {
            notFound: true
        };
    }
    const firstCategoryItem = firstLevelMenu.find(m => m.route == params.type);
    if (!firstCategoryItem) {
        return {
            notFound: true
        }
    }
    const {data: menu} = await axios.post<MenuItem[]>(API.topPage.find, {
        firstCategory: firstCategoryItem.id
    });
    return {
        props: {
            menu,
            firstCategory: firstCategoryItem.id
        }
    }
}

interface TypeProps extends Record<string, unknown> {
    menu: MenuItem[];
    firstCategory: number
}
