import { useEffect, useState } from 'react';
import CartItem from '../../components/CartItem';
import CartPaymentItem from '../../components/CartPaymentItem';
import DefaultLayout from '../../components/Layout/DefaultLayout';
import style from './Cart.module.scss';
import axios from 'axios';

export default function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        axios
            .post('http://localhost:8000/api/cart/', {
                user_id: localStorage.getItem('user_id'),
            })
            .then((response) => {
                if (response.status === 200 && response.data) {
                    console.log(response.data['cart-items']);
                    setCartItems(response.data['cart-items']);
                }
            });
    }, []);

    useEffect(() => {
        let total = 0;
        cartItems.forEach((cartItem) => {
            total += cartItem.total_price;
        });
        setTotalPrice(total);
    }, [cartItems]);

    const handleChange = (e, item) => {
        const type = e.target.name;
        let quantity = item.quantity;
        switch (type) {
            case 'increase':
                quantity += 1;
                break;
            case 'decrease':
                quantity -= 1;
                break;
        }
        axios
            .post('http://localhost:8000/api/cart/', {
                action: 'update',
                user_id: localStorage.getItem('user_id'),
                cart_item_id: item.id,
                quantity: quantity,
            })
            .then((response) => {
                if (response.status === 200 && response.data) {
                    setCartItems(response.data['cart-items']);
                }
            });
    };

    const handleDelete = (item) => {
        axios
            .post('http://localhost:8000/api/cart/', {
                action: 'delete',
                user_id: localStorage.getItem('user_id'),
                cart_item_id: item.id,
            })
            .then((response) => {
                setCartItems(response.data['cart-items']);
            });
    };

    return (
        <DefaultLayout>
            <div className={style.body_container}>
                <div className={style.container}>
                    <div className={style.title_container}>
                        <span className={style.title}>Cart</span>
                    </div>
                    <div className={style.cart_items_container}>
                        {cartItems.map((cartItem, index) => {
                            return (
                                <CartItem
                                    key={index}
                                    item={cartItem}
                                    handleChange={handleChange}
                                    handleDelete={handleDelete}
                                />
                            );
                        })}
                    </div>
                    <CartPaymentItem totalItems={cartItems.length} totalPrice={totalPrice} />
                </div>
            </div>
        </DefaultLayout>
    );
}
