import style from './CartItem.module.scss';

export default function CartItem() {
    return (
        <div className={style.parent_container}>
            <hr />
            <div className={style.container}>
                <label className={style.product_info_container}>
                    <div className={style.product_info_first}>
                        <input type="checkbox" />
                        <img
                            className={style.product_image}
                            src="https://bizweb.dktcdn.net/100/414/728/products/1-7.jpg?v=1704364883197"
                        />
                        <div className={style.product_info}>
                            <span className={style.product_name}>CLOWNZ CORDUROY HOOD JACKET</span>
                            <span className={style.product_type}>JACKETS & VESTS</span>
                        </div>
                    </div>
                    <span className={style.product_price}>550.000₫</span>
                </label>
                <div className={style.actions_container}>
                    <div className={style.quantity_container}>
                        <button className={style.quantity_change}>-</button>
                        <input className={style.quantity_input} type="text" />
                        <button className={style.quantity_change}>+</button>
                    </div>
                    <span className={style.product_total_price}>550.000₫</span>
                    <button className={style.delete_button}>Xóa</button>
                </div>
            </div>
            <hr />
        </div>
    );
}
