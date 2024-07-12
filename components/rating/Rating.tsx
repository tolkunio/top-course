import s from './Rating.module.css'
import cn from 'classnames';
import {RatingProps} from '@/components/rating/Rating.props';
import StarIcon from './star.svg'
import {useState, JSX, useEffect, KeyboardEvent} from 'react';

const Rating = ({isEditable = false, rating, setRating, className, ...rest}: RatingProps) => {
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
        <div {...rest}>
            {ratingArr.map((r, i) => (<span key={i}>{r}</span>))}
        </div>
    );
};

export default Rating;
