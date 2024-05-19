import { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Form from '../../components/Form';
import DefaultLayout from '../../components/Layout/DefaultLayout';
import style from './Profile.module.scss';
import axios from 'axios';

export default function Profile() {
    const user_id = localStorage.getItem('user_id');
    const [user, setUser] = useState({});
    const [newPassword, setNewPassword] = useState('');
    const [newPasswordRetype, setNewPasswordRetype] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.post('http://localhost:8007/api/profile/', { user_id: user_id }).then((response) => {
            if (response.status === 200 && response.data) {
                const userDB = response.data
                console.log(userDB)
                setUser({
                    ...userDB.account,
                    ...userDB.fullname,
                    ...userDB.address,
                    email: userDB.email,
                    id: userDB.id,
                });
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
            console.log(user);
            axios
                .put('http://localhost:8007/api/profile/', { ...user, password: newPassword })
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    alert(error.response.data)
                });
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('user_id');
        navigate('/login');
    };

    return (
        <DefaultLayout>
            <div className={style.profile_container}>
                <Form className={style.form}>
                    <span className={style.title}>Welcome, {user?.username}</span>
                    <div className={style.input_container}>
                        <div className={style.group_input}>
                            <input
                                className={style.input}
                                type="text"
                                placeholder="First name"
                                name="firstname"
                                defaultValue={user?.firstname}
                                onChange={handleChangeProfile}
                            />
                            <input
                                className={style.input}
                                type="text"
                                placeholder="Last name"
                                name="lastname"
                                defaultValue={user?.lastname}
                                onChange={handleChangeProfile}
                            />
                        </div>
                        <div className={style.group_input}>
                            <input
                                className={style.input}
                                type="text"
                                placeholder="Street"
                                name="street"
                                defaultValue={user?.street}
                                onChange={handleChangeProfile}
                            />
                            <input
                                className={style.input}
                                type="text"
                                placeholder="District"
                                name="district"
                                defaultValue={user?.district}
                                onChange={handleChangeProfile}
                            />
                            <input
                                className={style.input}
                                type="text"
                                placeholder="City"
                                name="city"
                                defaultValue={user?.city}
                                onChange={handleChangeProfile}
                            />
                        </div>

                        <input
                            className={style.input}
                            type="text"
                            placeholder="Email"
                            name="email"
                            defaultValue={user?.email}
                            onChange={handleChangeProfile}
                        />
                        <input
                            className={style.input}
                            type="text"
                            placeholder="Username"
                            name="username"
                            defaultValue={user?.username}
                            onChange={handleChangeProfile}
                        />
                        <input
                            className={style.input}
                            type="text"
                            name="password"
                            placeholder="New password"
                            defaultValue={newPassword}
                            onChange={handleChangeProfile}
                        />
                        <input
                            className={style.input}
                            type="text"
                            name="passwordRetype"
                            placeholder="Retype new password"
                            defaultValue={newPasswordRetype}
                            onChange={handleChangeProfile}
                        />
                    </div>
                    <div className={style.button_container}>
                        <button className={style.button} onClick={handleUpdate}>
                            Update
                        </button>
                        <button className={style.logout} onClick={handleLogout}>
                            Log out
                        </button>
                    </div>
                </Form>
            </div>
        </DefaultLayout>
    );
}
