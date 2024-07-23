import s from './ReviewForm.module.css'
import {ReviewFormProps} from "@/components/reviewForm/ReviewForm.props";
import Input from "@/components/input/Input";
import Rating from "@/components/rating/Rating";
import TextArea from "@/components/textArea/TextArea";
import Button from "@/components/button/Button";
import CloseIcon from '../../public/icons/close.svg'
const ReviewForm = (props: ReviewFormProps) => {
    return (
        <>
            <div className={s.reviewForm}>
                <Input placeholder={'Имя'}/>
                <Input className={s.input} placeholder={'Заголовок отзыва'}/>
                <div className={s.rating}>
                    <span>Оценка:</span>
                    <Rating rating={0}/>
                </div>
                <TextArea placeholder={'Текст отзыва'} className={s.textarea}/>
                <div className={s.btns}>
                    <Button appearance={'primary'}> Отправить</Button>
                    <span
                        className={s.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
                </div>
            </div>
            <div className={s.success}>
                <div className={s.successTitle}>
                    Ваш отзыв отправлен
                </div>
                <div>
                    Спасибо, ваш отзыв будет опубликован после проверки
                </div>
                <CloseIcon className={s.close}/>
            </div>
        </>

    );
};

export default ReviewForm;
