import style from './CartPaymentItem.module.scss';
import formatNumber from '../../utils/formatNumber';
import { useEffect, useRef } from 'react';

export default function CartPaymentItem({
    totalItems,
    totalPrice,
    checkAll,
    handleCheckAll,
    handleCommitOrder,
}) {
    const inputCheckAll = useRef();
    const handleCheck = (e) => {
        handleCheckAll(e);
    };

    const handleClick = () => {
        handleCommitOrder();
    };

    useEffect(() => {
        inputCheckAll.current.checked = checkAll;
    }, [checkAll]);

    return (
        <div className={style.payment_container}>
            <div className={style.payment_info}>
                <label className={style.payment_select_all}>
                    <input type="checkbox" ref={inputCheckAll} onChange={handleCheck} />
                    <span>Chọn tất cả ({totalItems})</span>
                </label>
                <span className={style.payment_info_first}>Tổng thanh toán ({totalItems} Sản phẩm):</span>
                <span className={style.payment_info_second}>{formatNumber.format(totalPrice)}</span>
            </div>
            <button className={style.payment_button} onClick={handleClick}>
                Thanh toán
            </button>
        </div>
    );
}
