import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartItem from '../../components/CartItem';
import Loading from '../../assets/icons/loading.svg?react';
import CartPaymentItem from '../../components/CartPaymentItem';
import DefaultLayout from '../../components/Layout/DefaultLayout';
import style from './Cart.module.scss';
import axios from 'axios';

export default function Cart() {
    const navigate = useNavigate();

    const [cartItems, setCartItems] = useState([]);
    const [orderItems, setOrderItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [checkAll, setCheckAll] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        axios
            .post('http://localhost:8005/api/cart/', {
                user_id: localStorage.getItem('user_id'),
            })
            .then((response) => {
                setLoading(false);
                console.log(response.data);
                if (response.status === 200 && response.data) {
                    setCartItems(response.data['cart_items']);
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

    useEffect(() => {
        if (cartItems.length !== 0) {
            if (orderItems.length === cartItems.length) {
                setCheckAll(true);
            } else {
                setCheckAll(false);
            }
        }
    }, [orderItems]);

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
        setLoading(true);
        axios
            .post('http://localhost:8005/api/cart/', {
                action: 'update',
                user_id: localStorage.getItem('user_id'),
                cart_item_id: item.id,
                quantity: quantity,
            })
            .then((response) => {
                setLoading(false);
                if (response.status === 200 && response.data) {
                    setCartItems(response.data['cart_items']);
                }
            });
    };

    const handleDelete = (item) => {
        axios
            .post('http://localhost:8005/api/cart/', {
                action: 'delete',
                user_id: localStorage.getItem('user_id'),
                cart_item_id: item.id,
            })
            .then((response) => {
                setCartItems(response.data['cart_items']);
            });
    };

    const handleCreateOrder = (e) => {
        const key = parseInt(e.target.value);
        if (e.target.checked) {
            if (!orderItems.includes(key)) {
                setOrderItems((items) => [...items, key]);
            }
        } else {
            if (orderItems.includes(key)) {
                setOrderItems((items) => items.filter((item) => item !== key));
            }
        }
    };

    const handleCheckAll = (e) => {
        const checkAll = e.target.checked;
        if (checkAll) {
            setOrderItems(() => cartItems.map((item) => item.id));
        } else {
            setOrderItems([]);
        }
        setCheckAll(checkAll);
    };

    const handleCommitOrder = () => {
        navigate('/order', { state: { order_item_ids: orderItems } });
    };

    return (
        <DefaultLayout>
            <div className={style.body_container}>
                <div className={style.container}>
                    <div className={style.title_container}>
                        <span className={style.title}>Cart</span>
                    </div>
                    {loading === true ? <></> :
                        <div className={style.cart_items_container}>
                            {cartItems.map((cartItem, index) => {
                                return (
                                    <CartItem
                                        key={index}
                                        item={cartItem}
                                        orderItems={orderItems}
                                        handleChange={handleChange}
                                        handleDelete={handleDelete}
                                        handleCreateOrder={handleCreateOrder}
                                    />
                                );
                            })}
                        </div>
                    }
                    {loading === true ?
                        (<div className={style.icon_container}>
                            <Loading className={style.icon_loading} />
                        </div>) : (
                            cartItems.length !== 0 ? (
                                <CartPaymentItem
                                    totalItems={cartItems.length}
                                    totalPrice={totalPrice}
                                    checkAll={checkAll}
                                    handleCheckAll={handleCheckAll}
                                    handleCommitOrder={handleCommitOrder}
                                />
                            ) : (
                                <span className={style.no_items}>You have no items</span>
                            )
                        )
                    }
                </div>
            </div>
        </DefaultLayout>
    );
}
