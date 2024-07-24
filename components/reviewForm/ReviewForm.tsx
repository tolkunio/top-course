import s from './ReviewForm.module.css'
import {ReviewFormProps} from "@/components/reviewForm/ReviewForm.props";
import Input from "@/components/input/Input";
import Rating from "@/components/rating/Rating";
import TextArea from "@/components/textArea/TextArea";
import Button from "@/components/button/Button";
import CloseIcon from '../../public/icons/close.svg'
import {useForm, Controller} from "react-hook-form";
import {IReviewForm} from "@/components/reviewForm/ReviewForm.interface";
import {FieldError} from "react-hook-form";

const ReviewForm = (props: ReviewFormProps) => {
    const {register, control, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = (data: IReviewForm) => {
        console.log(data);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={s.reviewForm}>
                <Input {...register('name', {required: {value: true, message: 'Заполните имя'}})}
                       placeholder={'Имя'}
                       error={errors.name as FieldError}
                />
                <Input {...register('title', {required: {value: true, message: 'Заполните заголовок отзыва'}})}
                       className={s.input}
                       placeholder={'Заголовок отзыва'}
                       error={errors.title as FieldError}
                />
                <div className={s.rating}>
                    <span>Оценка:</span>
                    <Controller control={control}
                                name='rating'
                                rules={{required: {value: true, message: 'Заполните рейтинг'}}}
                                render={({field}) => (
                                    <Rating isEditable={true} rating={field.value}
                                            ref={field.ref}
                                            setRating={field.onChange}
                                            error={errors.rating as FieldError}/>
                                )}
                    />

                </div>
                <TextArea {...register('desc', {required: {value: true, message: 'Заполните текст отзыва'}})}
                          placeholder={'Текст отзыва'}
                          className={s.textarea}
                          error={errors.desc as FieldError}

                />
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
