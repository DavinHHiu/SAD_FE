import { useEffect, useState } from 'react';
import DefaultLayout from '../../components/Layout/DefaultLayout';
import style from './ProductDetail.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import formatNumber from '../../utils/formatNumber';
import axios from 'axios';

export default function ProductDetail() {
    const location = useLocation();
    const navigate = useNavigate();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const product = location.state;
        console.log(product.id);
        axios
            .get(`http://localhost:8001/api/products/${product.id}`)
            .then((res) => {
                console.log({ ...res.data });
                setProduct({ ...res.data });
            });
    }, [location]);

    const handleAddToCart = () => {
        console.log(1);
        if (!localStorage.getItem('user_id')) {
            navigate('/login');
        }
        axios
            .post('http://localhost:8000/api/cart/', {
                action: 'add',
                user_id: localStorage.getItem('user_id'),
                product_id: product.id,
            })
            .then(() => {
                setTimeout(() => {
                    navigate('/');
                }, 1000);
                alert('Sản phẩm đã được thêm vào giỏ hàng');
            });
    };

    return (
        <DefaultLayout>
            <div className={style.background_container}></div>
            <div className={style.container}>
                <div className={style.image_container}>
                    <img className={style.product_image} src={product.product?.image} />
                </div>
                <div className={style.info_container}>
                    <span className={style.product_name}>{product.product?.name}</span>
                    <span className={style.product_brand}>{product.brand?.name || product.author?.name}</span>
                    <div className={style.add_to_cart_container}>
                        <span className={style.product_price}>{formatNumber.format(product.product?.price)}</span>
                        <button className={style.add_to_cart_btn} onClick={handleAddToCart}>
                            Add to cart
                        </button>
                    </div>
                    <div className={style.product_type_container}>
                        <span className={style.product_type_label}>Type:</span>
                        <span className={style.product_type}>{product.product?.type?.toUpperCase()}</span>
                    </div>
                    <span className={style.product_description}>
                        {product.product?.description?.split('\r\n\r\n').map((sentence, index) => (
                            <span key={index}>{sentence}</span>
                        ))}
                    </span>
                </div>
            </div>
        </DefaultLayout>
    );
}
