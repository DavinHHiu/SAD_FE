import CartItem from '../../components/CartItem';
import CartPaymentItem from '../../components/CartPaymentItem';
import DefaultLayout from '../../components/Layout/DefaultLayout';
import style from './Cart.module.scss';

export default function Cart() {
    return (
        <DefaultLayout>
            <div className={style.body_container}>
                <div className={style.container}>
                    <div className={style.title_container}>
                        <span className={style.title}>Cart</span>
                    </div>
                    <div className={style.cart_items_container}>
                        <CartItem />
                        <CartItem />
                        <CartItem />
                        <CartItem />
                        <CartItem />
                        <CartItem />
                        <CartItem />
                        <CartItem />
                        <CartItem />
                    </div>
                    <CartPaymentItem />
                    <div className={style.cart_items_container}>
                        <CartItem />
                        <CartItem />
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}
