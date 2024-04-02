import { useEffect, useState } from 'react';
import DefaultLayout from '../../components/Layout/DefaultLayout';
import ProductList from '../../components/ProductList';
import SearchBar from '../../components/SearchBar';
import style from './HomePage.module.scss';
import request from '../../utils/request';
import axios from 'axios';

function Home() {
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
            <div>
                <div className={style.background_container}>
                    <span className={style.corporate_name}>Price Tag</span>
                    <SearchBar />
                </div>
                <div className={style.product_list_container}>
                    <ProductList products={books} type={'Books'} />
                </div>
                <div className={style.product_list_container}>
                    <ProductList products={clothes} type={'Clothes'} />
                </div>
                <div className={style.product_list_container}>
                    <ProductList products={mobilePhones} type={'Mobile Phones'} />
                </div>
            </div>
        </DefaultLayout>
    );
}

export default Home;
