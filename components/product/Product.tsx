import s from './Product.module.css'
import cn from "classnames";
import {ProductProps} from "@/components/product/Product.props";
import Card from "@/components/card/Card";
import Rating from "@/components/rating/Rating";
import Tag from "@/components/tag/Tag";
import Button from "@/components/button/Button";
import {priceRu} from "@/helpers/helpers";
import Divider from "@/components/divider/Divider";
import Image from "next/image";
import {useState} from "react";
import Review from "@/components/review/Review";
import ReviewForm from "@/components/reviewForm/ReviewForm";

const Product = ({product, className, ...rest}: ProductProps) => {
    const [isReviewOpen, setIsReviewOpen] = useState<boolean>(false);
    return (
        <>
            <Card className={s.product} {...rest}>
                <div className={s.logo}>
                    <Image src={product.image} alt={product.title} width={70} height={70}/>
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
                <div className={s.desc}>
                    {product.description}
                </div>
                <div className={s.features}>
                    {product.characteristics.map(c => (
                        <div key={c.name} className={s.characteristic}>
                            <span className={s.characteristicName}>{c.name}</span>
                            <span className={s.characteristicDots}></span>
                            <span className={s.characteristicValue}>{c.value}</span>
                        </div>
                    ))}
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
                <Divider className={cn(s.hr, s.hr2)}/>
                <div className={s.actions}>
                    <Button appearance={'primary'}>Узнать подробнее</Button>
                    <Button appearance={'ghost'}
                            onClick={() => setIsReviewOpen(!isReviewOpen)}
                            arrow={isReviewOpen ? 'down' : 'right'}
                            className={s.reviewBtn}>
                        Читать отзывы
                    </Button>
                </div>
            </Card>
            <Card color={'blue'} className={cn(s.review, {
                [s.reviewOpened]: isReviewOpen,
                [s.reviewClosed]: !isReviewOpen
            })}>
                <>
                    {product.reviews.map(review => <div key={review._id}>
                            <Review review={review}/>
                            <Divider/>
                        </div>
                    )}
                    <ReviewForm productId={product._id}/>
                </>
            </Card>
        </>
    );
};

export default Product;
