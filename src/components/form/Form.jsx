import React from 'react'
import { useForm } from 'react-hook-form';
import style from './Form.module.css';

export default function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
                <div className={style.inputGroup}>
                    <label className={style.label}>Name:</label>
                    <input {...register('name', { required: true })} className={style.input} />
                    {errors.name && (
                        <div className={style.error}>Name is required</div>
                    )}
                </div>

                <div className={style.inputGroup}>
                    <label className={style.label}>Email:</label>
                    <input type="email" {...register('email', { required: true })} className={style.input} />
                    {errors.email && (
                        <div className={style.error}>Email is required</div>
                    )}
                </div>

                <button type="submit" className={style.button}>Submit</button>
            </form>


        </div>
    )
}
