import s from './Search.module.css'
import {SearchProps} from "@/components/search/Search.props";
import cn from "classnames";
import Input from "@/components/input/Input";
import Button from "@/components/button/Button";
import {useState} from "react";
import SearchIcon from '../../public/icons/search.svg';
import {useRouter} from "next/router";

const Search = ({className, ...props}: SearchProps) => {
    const [search, setSearch] = useState<string>('');
    const router = useRouter();
    const goToSearch = () => {
        router.push({
            pathname: '/',
            query: {
                q: search
            }
        })
    }
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            goToSearch();
        }
    }
    return (
        <div className={cn(className ?? '', s.search)}{...props}>
            <Input placeholder={'Поиск'}
                   value={search}
                   onChange={(e) => setSearch(e.target.value)}
                   onKeyDown={(e) => handleKeyDown(e)}
                   className={s.input}/>
            <Button appearance={'primary'}
                    className={s.button}
                    onClick={goToSearch}
            >
                <SearchIcon/>
            </Button>

        </div>
    );
};

export default Search;
