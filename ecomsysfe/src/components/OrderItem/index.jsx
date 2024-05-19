import style from './OrderItem.module.scss';
import formatNumber from '../../utils/formatNumber';

export default function OrderItem({ item }) {
    return (
        <div className={style.parent_container}>
            <hr />
            <div className={style.container}>
                <label className={style.product_info_container}>
                    <div className={style.product_info_first}>
                        <img
                            className={style.product_image}
                            src={
                                item?.product_image ||
                                'https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg'
                            }
                        />
                        <div className={style.product_info}>
                            <span className={style.product_name}>{item?.product_name}</span>
                            <span className={style.product_type}>{item?.product_type.toUpperCase()}</span>
                        </div>
                    </div>
                    <span className={style.product_price}>{formatNumber.format(item?.product_price)}</span>
                </label>
                <div className={style.actions_container}>
                    <div className={style.quantity_container}>
                        <span>x{item.quantity}</span>
                    </div>
                    <span className={style.product_total_price}>{formatNumber.format(item.total_price)}</span>
                </div>
            </div>
            <hr />
        </div>
    );
}
