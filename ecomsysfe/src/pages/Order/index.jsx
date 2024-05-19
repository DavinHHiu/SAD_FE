import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import style from './Order.module.scss';
import DefaultLayout from '../../components/Layout/DefaultLayout';
import OrderItem from '../../components/OrderItem';
import { Shipment } from '../../components/Shipment';
import Payment from '../../components/Payment';

export default function Order() {
    const location = useLocation();
    const navigate = useNavigate();

    const orderItemIds = location.state?.order_item_ids;
    const [orderItems, setOrderItems] = useState([]);
    const [order, setOrder] = useState({});
    const [shipment, setShipment] = useState({});
    const [payment, setPayment] = useState({});
    const [paymentMethods, setPaymentMethods] = useState([]);
    const [shippingDetails, setShippingDetails] = useState([]);

    useEffect(() => {
        if (orderItemIds && orderItemIds.length > 0) {
            axios
                .post("http://localhost:8005/api/cart/", {
                    action: 'listByIds',
                    order_item_ids: orderItemIds,
                }).then((response) => {
                    console.log(response.data);
                    setOrderItems(response.data.cart_items);
                });
            axios.
                get("http://localhost:8008/api/payment/")
                .then((response => {
                    setPaymentMethods(response.data.payment_methods);
                }));
            axios.
                get("http://localhost:8009/api/shipment/")
                .then((response => {
                    setShippingDetails(response.data.shipping_details);
                }));
        } else {
            navigate('/');
        }
    }, [orderItemIds]);

    useEffect(() => {
        if (orderItems && orderItems.length > 0) {
            const total_price = orderItems.reduce(
                (accumulator, currentItem) => {
                    return accumulator + currentItem.total_price;
                }, 0);
            console.log(total_price);
            axios
                .post('http://localhost:8006/api/order/', {
                    user_id: localStorage.getItem('user_id'),
                    order_id: localStorage.getItem('order_id'),
                    total_price: total_price,
                }).then((response) => {
                    console.log(response.data);
                    setOrder(response.data.order);
                    setShipment(response.data.shipment);
                    setPayment(response.data.payment)
                    localStorage.setItem('order_id', response.data.order.id);
                })
        }
    }, [orderItems]);

    const handleShippingInfo = (shipment) => {
        setShipment(shipment);
    };

    const handlePaymentInfo = (payment) => {
        setPayment(payment);
    }

    const handlePurchase = () => {
        if (!shipment.shipping_address) {
            alert('Vui lòng nhập địa chỉ giao hàng!');
            return;
        }
        axios.put('http://localhost:8005/api/cart/', {
            action: "paid",
            cart_item_ids: orderItemIds,
            order_id: localStorage.getItem('order_id'),
        });
        axios.put('http://localhost:8008/api/payment/', {
            payment_id: payment.id,
            total_price: order.total_price + shipment.shipping_fee,
            payment_method: payment.payment_method,
        })
        axios.put('http://localhost:8009/api/shipment/', {
            shipment_id: shipment.id,
            shipping_address: shipment.shipping_address,
            shipping_method: shipment.shipping_method,
        })

        setTimeout(() => {
            navigate('/');
            localStorage.removeItem('order_id');
        }, 3000);
        alert('Đặt hàng thành công! Xin chúc mừng!');
    };

    console.log(payment, shipment);

    return (
        <DefaultLayout>
            <div className={style.body_container}>
                <div className={style.container}>
                    <div className={style.title_container}>
                        <span className={style.title}>Order</span>
                    </div>
                    <div className={style.order_items_container}>
                        {orderItems.map((orderItem, index) => {
                            return <OrderItem key={index} item={orderItem} />;
                        })}
                    </div>
                    <Shipment
                        shipment={shipment}
                        shippingDetails={shippingDetails}
                        handleShippingInfo={handleShippingInfo}
                    />
                    <Payment
                        shipping_fee={shipment?.shipping_fee}
                        goods_price={order?.total_price}
                        payment={payment}
                        paymentMethods={paymentMethods}
                        handlePurchase={handlePurchase}
                        handlePaymentInfo={handlePaymentInfo}
                    />
                </div>
            </div>
        </DefaultLayout>
    );
}
