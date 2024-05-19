import style from './CartItem.module.scss';
import formatNumber from '../../utils/formatNumber';
import { useEffect, useRef } from 'react';

export default function CartItem({ item, orderItems = [], handleChange, handleDelete, handleCreateOrder }) {
    const handleChangeQuantity = (event) => {
        handleChange(event, item);
    };

    const handleDeleteItem = () => {
        handleDelete(item);
    };

    const handleCheckItem = (e) => {
        handleCreateOrder(e);
    };

    const inputCheckbox = useRef();

    useEffect(() => {
        if (orderItems.includes(item.id)) {
            inputCheckbox.current.checked = true;
        } else {
            inputCheckbox.current.checked = false;
        }
    }, [orderItems]);

    return (
        <div className={style.parent_container}>
            <hr />
            <div className={style.container}>
                <label className={style.product_info_container}>
                    <div className={style.product_info_first}>
                        <input
                            type="checkbox"
                            ref={inputCheckbox}
                            value={item?.id}
                            onChange={handleCheckItem}
                        />
                        <img className={style.product_image} src={item?.product_image} />
                        <div className={style.product_info}>
                            <span className={style.product_name}>{item?.product_name}</span>
                            <span className={style.product_type}>{item?.product_type.toUpperCase()}</span>
                        </div>
                    </div>
                    <span className={style.product_price}>{formatNumber.format(item?.product_price)}</span>
                </label>
                <div className={style.actions_container}>
                    <div className={style.quantity_container}>
                        <button
                            className={style.quantity_change}
                            name="decrease"
                            onClick={handleChangeQuantity}
                        >
                            -
                        </button>
                        <input
                            className={style.quantity_input}
                            type="text"
                            name="quantity"
                            defaultValue={item.quantity}
                            onChange={handleChangeQuantity}
                        />
                        <button
                            className={style.quantity_change}
                            name="increase"
                            onClick={handleChangeQuantity}
                        >
                            +
                        </button>
                    </div>
                    <span className={style.product_total_price}>{formatNumber.format(item.total_price)}</span>
                    <button className={style.delete_button} onClick={handleDeleteItem}>
                        Xóa
                    </button>
                </div>
            </div>
            <hr />
        </div>
    );
}
