import React from 'react'
import styles from './Auth.module.scss'

const Auth = () => {
    const [loginData, setLoginData] = React.useState({
        email: "",
        password: ""
    })

    const login = () => {

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
                    <input type="text" value={loginData.email} placeholder='Enter your password' name="password" onChange={handleInputChange} />
                </div>
                <button className={styles.submit_btn}>
                    Login
                </button>
            </div>
        </div>
    )
}

export default Auth