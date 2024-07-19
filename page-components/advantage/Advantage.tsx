import s from './Advantage.module.css'
import AdvantageIcon from "@/public/icons/advantage.svg";
import {AdvantageProps} from "@/page-components/advantage/Advantage.props";

const Advantage = ({advantages}: AdvantageProps) => {
    return (
        <>
            {advantages.map(a => (
                <div key={a._id} className={s.advantage}>
                    <AdvantageIcon/>
                    <div className={s.title}>{a.title}</div>
                    <div className={s.vline}></div>
                    <div className={s.description}>
                        {a.description}
                    </div>
                </div>
            ))}
        </>
    );
};

export default Advantage;
