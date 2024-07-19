import {TopPageComponentProps} from "@/page-components/topPageComponent/TopPageComponent.props";
import Htag from "@/components/htag/Htag";
import Tag from "@/components/tag/Tag";
import s from './TopPageComponent.module.css';
import HhData from "@/page-components/hhData/HhData";
import {TopLevelCategory} from "@/interfaces/page.interface";
import Paragraph from "@/components/paragraph/Paragraph";
import Advantage from "@/page-components/advantage/Advantage";

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
            {firstCategory == TopLevelCategory.Courses && page.hh && <HhData {...page.hh}/>}
            {
                page.advantages && page.advantages.length > 0 && <div className={s.advantageSection}>
                    <Htag tag={'h2'}>Преимущества</Htag>
                    <Advantage advantages={page.advantages}/>
                </div>
            }
            {
                page.seoText && <div className={s.seo} dangerouslySetInnerHTML={{__html:page.seoText}}/>
            }
            <Htag tag={'h2'}>Получаемые навыки</Htag>
            {
                page.tags.map(tag=><Tag size={'m'} color={'primary'}>{tag}</Tag>)
            }

        </div>
    );
};
export default TopPageComponent;
