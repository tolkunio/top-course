import s from './Product.module.css'
import cn from "classnames";
import {ProductProps} from "@/components/product/Product.props";
import Card from "@/components/card/Card";
import Rating from "@/components/rating/Rating";
import Tag from "@/components/tag/Tag";
import Button from "@/components/button/Button";
import {priceRu} from "@/helpers/helpers";
import Divider from "@/components/divider/Divider";

const Product = ({product, className, ...rest}: ProductProps) => {
    return (
        <Card className={s.productCard} {...rest}>
            <div className={s.logo}>
                <img src={product.image} alt={product.title}/>
            </div>
            <div className={s.title}>
                {product.title}
            </div>
            <div className={s.price}>
                {priceRu(product.price)}
                {product.oldPrice && <Tag color={'green'} size={'s'}>{(product.price - product.oldPrice)}</Tag>}
            </div>
            <div className={s.credit}>
                {priceRu(product.credit)}/<span className={s.month}>в месяц</span>
            </div>
            <div className={s.rating}>
                <Rating rating={product.reviewAvg ?? product.initialRating}/>
            </div>
            <div className={s.tags}>
                {product.categories.map(category => <Tag className={s.tag} color={'ghost'}>
                    {category}
                </Tag>)}
            </div>
            <div className={s.priceTitle}>Цена</div>
            <div className={s.creditTitle}>в кредит</div>
            <div className={s.ratingTitle}>{product.reviewCount} отзывов</div>
            <Divider/>
            <div className={s.desc}>
                {product.description}
            </div>
            <div className={s.features}>
                фичи
            </div>
            <div className={s.advBlock}>
                {
                    product.advantages && <div className={s.advantages}>
                        <span>Преимущества</span>
                        <div>
                            {product.advantages}
                        </div>
                    </div>
                }

                {
                    product.disadvantages &&
                    <div className={s.disadvantages}>
                        <span>Недостатки</span>
                        <div>
                            {product.disadvantages}
                        </div>
                    </div>
                }
            </div>
            <Divider/>
            <div className={s.actions}>
                <Button appearance={'primary'}>Узнать подробнее</Button>
                <Button appearance={'ghost'} arrow={'right'} className={s.reviewBtn}>Читать отзывы</Button>
            </div>
        </Card>
    );
};

export default Product;
