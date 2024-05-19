import axios from 'axios';
import style from './ProductItem.module.scss';
import formatNumber from '../../utils/formatNumber';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function ProductItem({ item }) {
    const navigate = useNavigate();

    const handleAddToCart = () => {
        if (!localStorage.getItem('user_id')) {
            navigate('/login');
        }
        axios.post('http://localhost:8005/api/cart/', {
            action: 'add',
            user_id: localStorage.getItem('user_id'),
            product_id: item.id,
            product_price: item.price,
        }).then((response) => { console.log(response); });
    };

    const handleProductDetail = () => {
        navigate(`/product/${item.id}`, { state: item });
    };

    console.log(item)

    return (
        <div className={style.product_container}>
            <button className={style.product_image_container} onClick={handleProductDetail}>
                <img
                    className={style.product_image}
                    src={
                        item.image ||
                        'https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg'
                    }
                />
            </button>
            <div className={style.product_infomation}>
                <span className={style.product_type}>{item.type.toUpperCase()}</span>
                <span className={style.product_name}>{item.name}</span>
                <div className={style.product_price_container}>
                    Price:
                    <span className={style.product_price}>
                        {' '}
                        {` ${formatNumber.format(item.price)}`}
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
