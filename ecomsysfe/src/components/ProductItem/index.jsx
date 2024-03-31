import style from './ProductItem.module.scss';

export default function ProductItem() {
    return (
        <div className={style.product_container}>
            <img
                className={style.product_image}
                src="https://bizweb.dktcdn.net/100/414/728/products/1-7.jpg?v=1704364883197"
            />
            <div className={style.product_infomation}>
                <span className={style.product_type}>JACKETS & VESTS</span>
                <span className={style.product_name}>CLOWNZ CORDUROY HOOD JACKET</span>
                <div className={style.product_price_container}>
                    <span className={style.product_price}>550.000₫</span>
                </div>
                <div className={style.button_container}>
                    <button className={style.button_add_to_cart}>Add to cart</button>
                </div>
            </div>
        </div>
    );
}
