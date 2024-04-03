import style from './Search.module.scss';
import DefaultLayout from '../../components/Layout/DefaultLayout';
import SearchBar from '../../components/SearchBar';
import ProductList from '../../components/ProductList';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Search() {
    const [books, setBooks] = useState([]);
    const [clothes, setClothes] = useState([]);
    const [mobilePhones, setMobilePhones] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/books').then((res) => {
            setBooks(res.data);
        });
        axios.get('http://localhost:8000/api/clothes').then((res) => {
            setClothes(res.data);
        });
        axios.get('http://localhost:8000/api/mobile_phones').then((res) => {
            setMobilePhones(res.data);
        });
    }, []);

    return (
        <DefaultLayout>
            <div className={style.container}>
                <SearchBar className={`${style.search_bar} ${style.search_button}`} />
                <div className={style.product_list_container}>
                    <ProductList products={[...books, ...clothes, ...mobilePhones]} inSearchPage={true} />
                </div>
            </div>
        </DefaultLayout>
    );
}

export default Search;
