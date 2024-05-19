import { useEffect, useState } from 'react';
import Cart from '../../assets/icons/cart.svg?react';
import style from './CartIcon.module.scss';
import axios from 'axios';

export default function CartIcon({ addToCart }) {
    const [cartItems, setCartItems] = useState([]);
    // console.log(addToCart);

    // useEffect(() => {
    //     axios
    //         .post('http://localhost:8000/api/cart/', {
    //             user_id: localStorage.getItem('user_id'),
    //         })
    //         .then((response) => {
    //             // console.log(response.data['cart-items']);
    //             setCartItems(response.data['cart-items']);
    //         });
    // }, [addToCart]);

    return (
        <div className={style.container}>
            <Cart className={style.header_links_item} />
            <div className={style.cart_quantity}>{cartItems && cartItems.length}</div>
        </div>
    );
}
