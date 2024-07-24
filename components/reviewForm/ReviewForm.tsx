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
import axios from "axios";
import {IReviewSendResponse} from "@/components/reviewForm/ReviewForm.interface";
import {API} from "@/helpers/api";
import {useState} from "react";

const ReviewForm = ({productId, className, ...rest}: ReviewFormProps) => {
    const {register, control, handleSubmit, formState: {errors},reset} = useForm();
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [error, setError] = useState<string>();

    const onSubmit = async (formData: IReviewForm) => {
        try {
            const {data} = await axios.post<IReviewSendResponse>(API.review.createDemo, {
                ...formData,
                productId
            })
            if (data.message) {
                setIsSuccess(true);
                reset();
            } else {
                setError('Что-то пошло не так');
            }
        } catch (e) {
            setError(e.message)
        }

    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={s.reviewForm} {...rest}>
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
                <TextArea {...register('description', {required: {value: true, message: 'Заполните текст отзыва'}})}
                          placeholder={'Текст отзыва'}
                          className={s.textarea}
                          error={errors.description as FieldError}

                />
                <div className={s.btns}>
                    <Button appearance={'primary'}> Отправить</Button>
                    <span
                        className={s.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
                </div>
            </div>
            {isSuccess && <div className={s.success}>
                <div className={s.successTitle}>
                    Ваш отзыв отправлен
                </div>
                <div>
                    Спасибо, ваш отзыв будет опубликован после проверки
                </div>
                <CloseIcon className={s.close} onClick={()=>setIsSuccess(false)}/>
            </div>}
            {
                error && <div className={s.error}>
                    {error}
                    <CloseIcon className={s.close} onClick={()=>setError(undefined)}/>
                </div>
            }
        </form>

    );
};

export default ReviewForm;
