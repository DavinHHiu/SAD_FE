import Form from '../../components/Form';
import DefaultLayout from '../../components/Layout/DefaultLayout';
import style from './Profile.module.scss';

export default function Profile() {
    return (
        <DefaultLayout>
            <div className={style.profile_container}>
                <Form className={style.form}>
                    <span className={style.title}>User profile</span>
                    <div className={style.input_container}>
                        <input className={style.input} type="text" placeholder="Email" />
                        <input className={style.input} type="text" placeholder="Username" />
                        <input className={style.input} type="text" placeholder="Password" />
                    </div>
                    <button className={style.button}>Update</button>
                </Form>
            </div>
        </DefaultLayout>
    );
}
