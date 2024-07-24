import {withLayout} from "@/layout/Layout";
import {MenuItem} from "@/interfaces/menu.interface";
import axios from "axios";
import {GetStaticProps, GetStaticPropsContext, GetStaticPaths} from "next";
import {TopPageModel} from "@/interfaces/page.interface";
import {ParsedUrlQuery} from "querystring";
import {ProductModel} from "@/interfaces/product.interface";
import {firstLevelMenu} from "@/helpers/helpers";
import {TopLevelCategory} from "@/interfaces/page.interface";
import TopPageComponent from "@/page-components/topPageComponent/TopPageComponent";
import {API} from "@/helpers/api";

const TopPage = ({firstCategory, menu, page, products}: TopPageProps) => {
    return <TopPageComponent firstCategory={firstCategory}
                             page={page}
                             products={products}/>
};

export default withLayout(TopPage);

export const getStaticPaths: GetStaticPaths = async () => {
    let paths: string[] = [];
    for (const m of firstLevelMenu) {
        const {data: menu} = await axios.post<MenuItem[]>(API.topPage.find, {
            firstCategory: m.id
        });
        paths = paths.concat(menu.flatMap(s => s.pages.map(p => `/${m.route}/${p.alias}`)));
    }
    return {
        paths,
        fallback: true
    }
}
export const getStaticProps: GetStaticProps<TopPageProps> = async ({params}: GetStaticPropsContext<ParsedUrlQuery>) => {
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
    try {
        const {data: menu} = await axios.post<MenuItem[]>(API.topPage.find, {
            firstCategory: firstCategoryItem.id
        });
        if (menu.length == 0) {
            return {notFound: true}
        }
        const {data: page} = await axios.get<TopPageModel>(API.topPage.byAlias + params.alias);
        const {data: products} = await axios.post<ProductModel>(API.product.find, {
            category: page.category,
            limit: 10
        });
        return {
            props: {
                menu,
                firstCategory: firstCategoryItem.id,
                page,
                products
            }
        }
    } catch {
        return {
            notFound: true
        }
    }

}

interface TopPageProps {
    menu: MenuItem[],
    firstCategory: TopLevelCategory,
    page: TopPageModel,
    products: ProductModel[]
}