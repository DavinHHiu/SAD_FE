import axios from 'axios';
import style from './ProductItem.module.scss';
import formatNumber from '../../utils/formatNumber';

export default function ProductItem({ item }) {
    const handleAddToCart = () => {
        axios
            .post('http://localhost:8000/api/cart/', {
                action: 'add',
                user_id: localStorage.getItem('user_id'),
                product_id: item.product.id,
            })
            .then((response) => {
                console.log(response);
            });
    };

    return (
        <div className={style.product_container}>
            <img className={style.product_image} src={item.image} />
            <div className={style.product_infomation}>
                <span className={style.product_type}>{item.author || item.brand}</span>
                <span className={style.product_name}>{item.product.name}</span>
                <div className={style.product_price_container}>
                    Price:
                    <span className={style.product_price}>
                        {' '}
                        {` ${formatNumber.format(item.product.price)}`}
                    </span>
                </div>
                <div className={style.button_container}>
                    <button className={style.button_add_to_cart} onClick={handleAddToCart}>
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
}
