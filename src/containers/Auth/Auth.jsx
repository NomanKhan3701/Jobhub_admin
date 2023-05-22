import React from 'react'
import styles from './Auth.module.scss'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '@/store/actions'

const Auth = () => {
    const [loginData, setLoginData] = React.useState({
        email: "",
        password: ""
    })

    const dispatch = useDispatch();

    const login = async () => {
        if (loginData.email === "" || loginData.password === "") {
            toast.warn("Please fill all fields");
            return;
        }
        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/signin`, loginData);
            const user = {
                email: res.data.email,
                firstName: res.data.firstName,
                lastName: res.data.lastName,
            };
            dispatch(actions.setUser(user));
        } catch (e) {
            toast.error("Something went wrong");
            console.log(e);
        }

    }

    const handleInputChange = (e) => {
        setLoginData((state) => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }


    return (
        <div className={styles.Auth}>
            <div className={styles.form}>
                <div className={styles.form_item_full}>
                    <div className={styles.label}>Email</div>
                    <input type="text" value={loginData.email} placeholder='Enter your email' name="email" onChange={handleInputChange} />
                </div>
                <div className={styles.form_item_full}>
                    <div className={styles.label}>Password</div>
                    <input type="text" value={loginData.password} placeholder='Enter your password' name="password" onChange={handleInputChange} />
                </div>
                <button className={styles.submit_btn} onClick={login}>
                    Login
                </button>
            </div>
        </div>
    )
}

export default Auth