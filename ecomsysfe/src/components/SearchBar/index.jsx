import { useEffect, useState } from 'react';
import style from './SearchBar.module.scss';

export default function SearchBar({ handleSearch, handleEnterSearch, className, keys = '' }) {
    const [keyword, setKeyword] = useState(keys);

    const handleChange = (e) => {
        setKeyword(e.target.value);
    };

    const handleSearchKeyword = () => {
        handleSearch(keyword);
    };

    const handleKeyDown = (e) => {
        handleEnterSearch(e, keyword);
    };

    return (
        <div className={`${style.search_container}`}>
            <input
                type="text"
                className={style.search_input}
                value={keyword}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder="Nhập từ khóa tìm kiếm..."
            />
            <button className={style.button_search} onClick={handleSearchKeyword}>
                Search
            </button>
        </div>
    );
}
