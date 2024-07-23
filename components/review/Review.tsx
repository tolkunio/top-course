import s from './Review.module.css'
import cn from "classnames";
import {ReviewProps} from "@/components/review/Review.props";
import UserIcon from '../../public/icons/user.svg';
import {format} from "date-fns";
import {ru} from "date-fns/locale";
import Rating from "@/components/rating/Rating";

const Review = ({review, className, ...rest}: ReviewProps) => {
    const {name, title, description, createdAt, rating} = review;
    return (
        <div className={cn(s.review, className ?? '')}{...rest}>
            <UserIcon className={s.userIcon}/>
            <div className={s.info}>
                <span className={s.name}>{name}:</span>&nbsp;&nbsp;
                <span className={s.title}>{title}?</span>
            </div>
            <div className={s.date}>
                {format(new Date(createdAt), 'dd MMMM yyyyy', {locale: ru})}
            </div>
            <div className={s.rating}>
                <Rating rating={rating}/>
            </div>
            <div className={s.desc}>
                {description}
            </div>

        </div>
    );
};

export default Review;
