import s from './HhData.module.css'
import {HhDataProps} from "@/page-components/hhData/HhData.props";
import Card from "@/components/card/Card";
import RateIcon from '../../public/icons/rate.svg';

const HhData = ({count,juniorSalary,middleSalary,seniorSalary}: HhDataProps) => {
    return (
        <div className={s.hh}>
            <Card className={s.count}>
                <div className={s.title}>Всего вакансий</div>
                <div className={s.hhCount}>{count}</div>
            </Card>
            <Card className={s.salary}>
                <div>
                    <div className={s.salaryTitle}>Начальный</div>
                    <div className={s.salaryCount}>{juniorSalary}</div>
                    <div className={s.rating}>
                        <RateIcon className={s.ratingFilled}/>
                        <RateIcon/>
                        <RateIcon/>
                    </div>
                </div>
                <div>
                    <div className={s.title}>Средний</div>
                    <div className={s.salaryCount}>{middleSalary}</div>
                    <div className={s.rating}>
                        <RateIcon className={s.ratingFilled}/>
                        <RateIcon className={s.ratingFilled}/>
                        <RateIcon/>
                    </div>
                </div>
                <div>
                    <div className={s.salaryTitle}>Профессионал</div>
                    <div className={s.salaryCount}>{seniorSalary}</div>
                    <div className={s.rating}>
                        <RateIcon className={s.ratingFilled}/>
                        <RateIcon className={s.ratingFilled}/>
                        <RateIcon className={s.ratingFilled}/>
                    </div>
                </div>

            </Card>
        </div>
    );
};

export default HhData;
