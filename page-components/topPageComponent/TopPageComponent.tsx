import {TopPageComponentProps} from "@/page-components/topPageComponent/TopPageComponent.props";
import Htag from "@/components/htag/Htag";
import Tag from "@/components/tag/Tag";
import s from './TopPageComponent.module.css';
import HhData from "@/page-components/hhData/HhData";
import {TopLevelCategory} from "@/interfaces/page.interface";

const TopPageComponent = ({firstCategory, page, products}: TopPageComponentProps) => {
    return (
        <div className={s.topPageWrapper}>
            <div className={s.title}>
                <Htag tag={'h1'}>{page.title}</Htag>
                {products && <Tag color={'gray'} size={'m'}>{products.length}</Tag>}
                <span>Сортировка</span>
            </div>
            <div>
                {products && products.map(p => <div key={p._id}>{p.title}</div>)}
            </div>
            <div className={s.secondTitle}>
                <Htag tag={'h2'}>Вакансии - {page.category}</Htag>
                <Tag color={'red'} size={'m'}>hh.ru</Tag>
            </div>
            {firstCategory == TopLevelCategory.Courses && <HhData {...page.hh}/>}

        </div>
    );
};

export default TopPageComponent;
