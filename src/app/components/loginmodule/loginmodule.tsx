'use client'

import { useState } from 'react'
import styles from './styles.module.css'
import Logo from '../logo/logo'
import { useRouter } from "next/navigation";

export default function LoginModule() {
    const router = useRouter();

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (formData.username === 'testing' && formData.password === 'password') {
            router.push("/dashboard");
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    return(
        <div className={styles.loginwrapper}>
            <div className={styles.logowrapper}>
                <div className={styles.logocontainer}>
                    <Logo />
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className={styles.inputgroup}>
                    <input onChange={handleChange} value={formData.username} name="username" type="text" required/>
                    <label htmlFor="username">Username</label>
                </div>
                <div className={styles.inputgroup}>
                    <input onChange={handleChange} value={formData.password} name="password" type="password" required/>
                    <label htmlFor="password">Password</label>
                </div>
                <button type="submit" className={styles.submitbutton}>Log In</button>
            </form>
        </div>
    )
}