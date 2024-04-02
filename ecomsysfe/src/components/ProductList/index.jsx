import ProductItem from '../ProductItem';
import style from './ProductList.module.scss';

export default function ProductList({ products, type, inSearchPage }) {
    console.log(products);
    return (
        <div className={style.container}>
            {!inSearchPage && <span className={style.product_type}>{type}</span>}
            <div className={style.product_list_container}>
                {products && products.map((product, index) => <ProductItem key={index} item={product} />)}
            </div>
        </div>
    );
}
