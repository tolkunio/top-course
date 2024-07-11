import Head from "next/head";
import {Inter} from "next/font/google";
import Htag from "@/components/htag/Htag";
import Button from "@/components/button/Button";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
    return (
        <>
            <Button appearance={'primary'} arrow={'right'}>hello</Button>
            <Button appearance={'ghost'} arrow={'right'}>world</Button>
        </>
    )
}
