import s from './Product.module.css'
import cn from "classnames";
import {ProductProps} from "@/components/product/Product.props";

const Product = ({product, className, ...rest}: ProductProps) => {
    return (
        <div>
            {product.title}
        </div>
    );
};

export default Product;
