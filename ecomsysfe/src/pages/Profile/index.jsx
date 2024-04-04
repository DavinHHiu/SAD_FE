import { useEffect, useState } from 'react';
import Form from '../../components/Form';
import DefaultLayout from '../../components/Layout/DefaultLayout';
import style from './Profile.module.scss';
import axios from 'axios';

export default function Profile() {
    const user_id = localStorage.getItem('user_id');
    const [user, setUser] = useState({
        email: '',
        username: '',
        password: '',
    });
    const [newPassword, setNewPassword] = useState('');
    const [newPasswordRetype, setNewPasswordRetype] = useState('');

    useEffect(() => {
        axios.post('http://localhost:8000/api/profile/', { user_id: user_id }).then((response) => {
            if (response.status === 200 && response.data) {
                setUser({ ...user, ...response.data });
            }
        });
    }, []);

    const handleChangeProfile = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        switch (name) {
            case 'password':
                setNewPassword(value);
                break;
            case 'passwordRetype':
                setNewPasswordRetype(value);
                break;
            default:
                setUser({
                    ...user,
                    [e.target.name]: value,
                });
        }
    };

    const handleUpdate = () => {
        if (newPassword !== newPasswordRetype) {
            alert('Mật khẩu nhập lại không đúng');
        } else {
            axios
                .put('http://localhost:8000/api/profile/', { ...user, password: newPassword })
                .then((response) => {
                    // console.log(response);
                });
        }
    };

    return (
        <DefaultLayout>
            <div className={style.profile_container}>
                <Form className={style.form}>
                    <span className={style.title}>Welcome, {user.username}</span>
                    <div className={style.input_container}>
                        <input
                            className={style.input}
                            type="text"
                            placeholder="Email"
                            name="email"
                            value={user.email}
                            onChange={handleChangeProfile}
                        />
                        <input
                            className={style.input}
                            type="text"
                            placeholder="Username"
                            name="username"
                            value={user.username}
                            onChange={handleChangeProfile}
                        />
                        <input
                            className={style.input}
                            type="text"
                            name="password"
                            placeholder="New password"
                            value={newPassword}
                            onChange={handleChangeProfile}
                        />
                        <input
                            className={style.input}
                            type="text"
                            name="passwordRetype"
                            placeholder="Retype new password"
                            value={newPasswordRetype}
                            onChange={handleChangeProfile}
                        />
                    </div>
                    <button className={style.button} onClick={handleUpdate}>
                        Update
                    </button>
                </Form>
            </div>
        </DefaultLayout>
    );
}
