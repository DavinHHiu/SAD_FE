import ProductItem from '../ProductItem';
import style from './ProductList.module.scss';

export default function ProductList({ inSearchPage }) {
    return (
        <div className={style.container}>
            {!inSearchPage && <span className={style.product_type}>Clothes</span>}
            <div className={style.product_list_container}>
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </div>
        </div>
    );
}
