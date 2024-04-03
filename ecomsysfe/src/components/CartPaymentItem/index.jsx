import style from './CartPaymentItem.module.scss';
import formatNumber from '../../utils/formatNumber';

export default function CartPaymentItem({ totalItems, totalPrice }) {
    return (
        <div className={style.payment_container}>
            <div className={style.payment_info}>
                <label className={style.payment_select_all}>
                    <input type="checkbox" />
                    <span>Chọn tất cả ({totalItems})</span>
                </label>
                <span className={style.payment_info_first}>Tổng thanh toán ({totalItems} Sản phẩm):</span>
                <span className={style.payment_info_second}>{formatNumber.format(totalPrice)}</span>
            </div>
            <button className={style.payment_button}>Thanh toán</button>
        </div>
    );
}
