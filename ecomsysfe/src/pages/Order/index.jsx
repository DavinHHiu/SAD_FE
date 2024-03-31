import style from './Order.module.scss';
import DefaultLayout from '../../components/Layout/DefaultLayout';
import Form from '../../components/Form';

export default function Order() {
    return (
        <DefaultLayout>
            <div className={style.order_container}>
                <Form className={style.form}>
                    <span className={style.title}>Order</span>
                    <div className={style.input_container}>
                        <input className={style.input} type="text" placeholder="Email" />
                        <input className={style.input} type="text" placeholder="Username" />
                        <input className={style.input} type="text" placeholder="Password" />
                    </div>
                    <span className={style.subtitle}>Shipment</span>
                    <div className={style.input_container}>
                        <input className={style.input} type="text" placeholder="Email" />
                        <input className={style.input} type="text" placeholder="Username" />
                        <input className={style.input} type="text" placeholder="Password" />
                    </div>
                    <span className={style.subtitle}>Payment</span>
                    <div className={style.input_container}>
                        <input className={style.input} type="text" placeholder="Email" />
                        <input className={style.input} type="text" placeholder="Username" />
                        <input className={style.input} type="text" placeholder="Password" />
                    </div>
                    <div className={style.button_container}>
                        <button className={style.button_cancel}>Hủy</button>
                        <button className={style.button_submit}>Xác nhận</button>
                    </div>
                </Form>
            </div>
        </DefaultLayout>
    );
}
