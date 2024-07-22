import s from './Sort.module.css'
import cn from "classnames";
import {SortProps} from "@/components/sort/Sort.props";
import {SortEnum} from "@/components/sort/Sort.props";
import SortIcon from '../../public/icons/sort.svg';

const Sort = ({sort, setSort, className, ...rest}: SortProps) => {
    return (
        <div className={cn(s.sort, className ? className : '')}{...rest}>
            <span onClick={() => setSort(SortEnum.Rating)}
                  className={cn({
                      [s.active]: sort === SortEnum.Rating
                  })}>
                <SortIcon className={s.icon}/> По рейтингу
            </span>
            <span onClick={() => setSort(SortEnum.Price)}
                  className={cn({
                      [s.active]: sort === SortEnum.Price
                  })}>
                <SortIcon className={s.icon}/> По цене
            </span>
        </div>
    );
};

export default Sort;
