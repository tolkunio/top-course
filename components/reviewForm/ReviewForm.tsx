import s from './ReviewForm.module.css'
import {ReviewFormProps} from "@/components/reviewForm/ReviewForm.props";
import Input from "@/components/input/Input";
import Rating from "@/components/rating/Rating";
import TextArea from "@/components/textArea/TextArea";
import Button from "@/components/button/Button";
import CloseIcon from '../../public/icons/close.svg'
import {useForm, Controller} from "react-hook-form";
import {IReviewForm} from "@/components/reviewForm/ReviewForm.interface";

const ReviewForm = (props: ReviewFormProps) => {
    const {register, control, handleSubmit} = useForm<IReviewForm>();
    const onSubmit = (data: IReviewForm) => {
        console.log(data);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={s.reviewForm}>
                <Input {...register('name')} placeholder={'Имя'}/>
                <Input {...register('title')} className={s.input} placeholder={'Заголовок отзыва'}/>
                <div className={s.rating}>
                    <span>Оценка:</span>
                    <Controller control={control}
                                render={({field}) => (
                                    <Rating isEditable={true} rating={field.value} setRating={field.onChange}/>
                                )}
                                name={'rating'}/>

                </div>
                <TextArea {...register('desc')} placeholder={'Текст отзыва'} className={s.textarea}/>
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
        </form>

    );
};

export default ReviewForm;
