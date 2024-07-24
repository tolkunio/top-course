import s from './Rating.module.css'
import cn from 'classnames';
import {RatingProps} from '@/components/rating/Rating.props';
import StarIcon from './star.svg'
import {useState, JSX, useEffect, KeyboardEvent, forwardRef, ForwardedRef} from 'react';

const Rating = forwardRef(({
                               error,
                               isEditable = false,
                               rating,
                               setRating,
                               className,
                               ...rest
                           }: RatingProps, ref: ForwardedRef<HTMLDivElement>) => {
    const [ratingArr, setRatingArr] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructRating(rating);
    }, [rating]);

    const constructRating = (currentRating: number) => {
        const updatedArr = ratingArr.map((r: JSX.Element, i: number) => {
            return (
                <span className={cn(s.star, {
                    [s.filled]: i < currentRating,
                    [s.editable]: isEditable
                })}
                      onMouseEnter={() => changeDisplay(i + 1)}
                      onMouseLeave={() => changeDisplay(rating)}
                      onClick={() => onRatingClick(i + 1)}>
                    <StarIcon
                        tabIndex={isEditable ? 0 : -1}
                        onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(i + 1, e)}
                    />
                </span>
            )
        })
        setRatingArr(updatedArr);
    }
    const changeDisplay = (i: number) => {
        if (!isEditable) {
            return;
        }
        constructRating(i);
    }
    const onRatingClick = (i: number) => {
        if (!isEditable || !setRating) {
            return;
        }
        setRating(i);
    }
    const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
        if (e.code != 'Space' || !setRating) {
            return;
        }
        setRating(i);
    }
    return (
        <div className={cn(s.ratingWrapper,{
            [s.error]:error
        })} {...rest} ref={ref}>
            {ratingArr.map((r, i) => (<span key={i}>{r}</span>))}
            {error && <span className={s.errorMsg}>{error.message}</span>}
        </div>
    );
});

export default Rating;
