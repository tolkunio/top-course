import {Inter} from "next/font/google";
import Button from "@/components/button/Button";
import Tag from "@/components/tag/Tag";
import Rating from "@/components/rating/Rating";
import {useState} from "react";
import {withLayout} from "@/layout/Layout";
import {GetStaticProps} from "next";
import axios from "axios";
import {MenuItem} from "@/interfaces/menu.interface";

const inter = Inter({subsets: ["latin"]});

function Home({menu, firstCategory}: HomeProps) {
    const [rating, setRating] = useState<number>(4);
    return (
        <>
            <Button appearance={'primary'} arrow={'right'}>hello</Button>
            <Button appearance={'ghost'} arrow={'right'}>world</Button>
            <Tag size={'s'} color={'gray'}>Графический дизайн</Tag>
            <Rating rating={rating} isEditable={true} setRating={setRating}/>


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