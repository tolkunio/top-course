import React from 'react';
import {withLayout} from "@/layout/Layout";
import {GetStaticPaths} from "next";
import {firstLevelMenu} from "@/helpers/helpers";

const Type = () => {
    return (
        <div>
            type
        </div>
    );
};

export default withLayout(Type);
export const getStaticPaths:GetStaticPaths=async ()=>{
    return{
        paths:firstLevelMenu.map(m=>'/'+m.route),
        fallback:true
    }
}
