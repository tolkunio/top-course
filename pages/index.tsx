import {Inter} from "next/font/google";
import {useState} from "react";
import {withLayout} from "@/layout/Layout";
import {GetStaticProps} from "next";
import axios from "axios";
import {MenuItem} from "@/interfaces/menu.interface";
import TextArea from "@/components/textArea/TextArea";

const inter = Inter({subsets: ["latin"]});

function Home({menu, firstCategory}: HomeProps) {
    const [rating, setRating] = useState<number>(4);
    return (
        <>
        </>
    )
}

export default withLayout(Home);
export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;
    const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory
    });
    return {
        props: {
            menu,
            firstCategory
        }
    }
}

export interface HomeProps {
    menu: MenuItem[],
    firstCategory: number
}