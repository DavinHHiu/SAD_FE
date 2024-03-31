import style from './SearchBar.module.scss';

export default function SearchBar({ className }) {
    return (
        <div className={`${style.search_container}`}>
            <input type="text" className={style.search_input} placeholder="Nhập từ khóa tìm kiếm..." />
            <button className={style.button_search}>Search</button>
        </div>
    );
}
