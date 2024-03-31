import style from './CartPaymentItem.module.scss';

export default function CartPaymentItem() {
    return (
        <div className={style.payment_container}>
            <div className={style.payment_info}>
                <label className={style.payment_select_all}>
                    <input type="checkbox" />
                    <span>Chọn tất cả (5)</span>
                </label>
                <span className={style.payment_info_first}>Tổng thanh toán (3 Sản phẩm):</span>
                <span className={style.payment_info_second}>1.000.000đ</span>
            </div>
            <button className={style.payment_button}>Thanh toán</button>
        </div>
    );
}
