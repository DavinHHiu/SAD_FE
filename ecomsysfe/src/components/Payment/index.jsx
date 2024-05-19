import formatNumber from '../../utils/formatNumber';
import ComboBox from '../ComboBox';
import style from './Payment.module.scss';
import { useState, useEffect } from 'react';

export default function Payment({ shipping_fee, goods_price, payment, paymentMethods, handlePurchase, handlePaymentInfo }) {
    const [paymentCom, setPaymentCom] = useState(payment);

    const handleSelectItem = (e) => {
        console.log(e.target.value)
        setPaymentCom((prePayment) => ({
            ...prePayment,
            payment_method: e.target.value,
        }))
    };

    const handleClick = () => {
        handlePurchase();
    };

    useEffect(() => {
        handlePaymentInfo(paymentCom);
    }, [paymentCom])

    useEffect(() => {
        setPaymentCom(payment);
    }, [payment]);

    return (
        <div className={style.payment_container}>
            <div className={style.payment_method}>
                <span>Phương thức thanh toán:</span>
                <ComboBox
                    name="payment_method"
                    selected={paymentCom.payment_method || payment.payment_method}
                    options={paymentMethods}
                    handleSelectItem={handleSelectItem}
                />
            </div>
            <div className={style.total_container}>
                <div className={style.total}>
                    <div className={style.total_title}>
                        <span>Tổng tiền hàng</span>
                        <span>Phí vận chuyển</span>
                        <span>Tổng thanh toán</span>
                    </div>
                    <div className={style.total_price}>
                        <span>{goods_price && formatNumber.format(goods_price)}</span>
                        <span>{shipping_fee && formatNumber.format(shipping_fee)}</span>
                        <span className={style.price}>
                            {(shipping_fee && goods_price) &&
                                formatNumber.format(goods_price + shipping_fee)}
                        </span>
                    </div>
                </div>
            </div>
            <div className={style.button_container}>
                <button className={style.confirm_button} onClick={handleClick}>
                    Đặt hàng
                </button>
            </div>
        </div>
    );
}
