import style from './Search.module.scss';
import DefaultLayout from '../../components/Layout/DefaultLayout';
import SearchBar from '../../components/SearchBar';
import ProductList from '../../components/ProductList';

function Search() {
    return (
        <DefaultLayout>
            <div className={style.container}>
                <SearchBar className={`${style.search_bar} ${style.search_button}`} />
                <div className={style.product_list_container}>
                    <ProductList inSearchPage={true} />
                </div>
            </div>
        </DefaultLayout>
    );
}

export default Search;
