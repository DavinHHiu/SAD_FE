import { useEffect } from 'react';
import DefaultLayout from '../../components/Layout/DefaultLayout';
import ProductList from '../../components/ProductList';
import SearchBar from '../../components/SearchBar';
import style from './HomePage.module.scss';
import request from '../../utils/request';
import axios from 'axios';

function Home() {
    useEffect(() => {
        axios.get('http://localhost:8000/api/mobile_phones').then((res) => {
            console.log(res);
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
                    <ProductList />
                </div>
            </div>
        </DefaultLayout>
    );
}

export default Home;
