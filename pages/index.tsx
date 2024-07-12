import {Inter} from "next/font/google";
import Button from "@/components/button/Button";
import Tag from "@/components/tag/Tag";
import Rating from "@/components/rating/Rating";
import {useState} from "react";
import {withLayout} from "@/layout/Layout";

const inter = Inter({subsets: ["latin"]});

function Home() {
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