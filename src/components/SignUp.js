import React, { useEffect, useState } from 'react';
import validate from './validate';
import styles from './SignUp.module.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import notify from './toast';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        isAccepted: false,
    })

    const [errors, setErrors] = useState({});
    const [touch, setTouch] = useState({});

    useEffect(() => {
        setErrors(validate(data, 'signup'))
    }, [data, touch])


    const changeHandler = (event) => {

        if (event.target.name === 'isAccepted') {
            setData({ ...data, [event.target.name]: event.target.checked })
        } else {
            setData({ ...data, [event.target.name]: event.target.value })
        }
    }


    const focusHandler = (event) => {
        setTouch({ [event.target.name]: true })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (!Object.keys(errors).length) {
            notify('You are signed up successfully', 'success');

        } else {
            setTouch({
                name: true,
                email: true,
                password: true,
                confirmPassword: true,
                isAccepted: true,
            })

            notify('Invalid data', 'error');

        }
    }

    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler} className={styles.formContainer}>
                <h2 className={styles.header}>Student Registration</h2>
                <div className={styles.formField}>
                    <label>Name</label>
                    <input type="text"
                        name='name'
                        value={data.name}
                        onChange={changeHandler}
                        onFocus={focusHandler}
                        className={errors.name && touch.name ? styles.uncompleted : styles.formInput}
                    />
                    {errors.name && touch.name && <span>{errors.name}</span>}
                </div>

                <div className={styles.formField}>
                    <label>Email</label>
                    <input type="email"
                        name='email'
                        value={data.email}
                        onChange={changeHandler}
                        onFocus={focusHandler}
                        className={errors.email && touch.email ? styles.uncompleted : styles.formInput}
                    />
                    {errors.email && touch.email && <span>{errors.email}</span>}
                </div>

                <div className={styles.formField}>
                    <label>Password</label>
                    <input type="password"
                        name='password'
                        value={data.password}
                        onChange={changeHandler}
                        onFocus={focusHandler}
                        className={errors.password && touch.password ? styles.uncompleted : styles.formInput}
                    />
                    {errors.password && touch.password && <span>{errors.password}</span>}
                </div>

                <div className={styles.formField}>
                    <label>Confirm Password</label>
                    <input type="password"
                        name='confirmPassword'
                        value={data.confirmPassword}
                        onChange={changeHandler}
                        onFocus={focusHandler}
                        className={errors.confirmPassword && touch.confirmPassword ? styles.uncompleted : styles.formInput}
                    />
                    {errors.confirmPassword && touch.confirmPassword && <span>{errors.confirmPassword}</span>}
                </div>

                <div className={styles.formField}>
                    <div className={styles.checkBoxContainer}>
                        <label>I Accept Terms and Conditions and Privacy Policy</label>
                        <input type="checkbox"
                            name='isAccepted'
                            value={data.isAccepted}
                            onChange={changeHandler}
                            onFocus={focusHandler}
                        />
                    </div>
                    {errors.isAccepted && touch.isAccepted && <span>{errors.isAccepted}</span>}
                </div>

                <div className={styles.formButtons}>
                <p>I already have an account.</p>
                    <Link to="/login">Login</Link>
                   <button type='submit'>Sign Up</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default SignUp;