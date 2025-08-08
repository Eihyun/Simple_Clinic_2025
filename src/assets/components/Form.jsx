import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import './Form.css';

const schema = yup
    .object({
        Name: yup.string().required("Name is required"),
        Email: yup.string().email("Invalid email").required("Email is required"),
        Message: yup.string().required("Message is required"),
    })
    .required()


export default function Form() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = data => console.log(data);

    
    return (
        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-row">
                <label htmlFor="nameInput" className="form-label">Name</label>
                {errors.Name && <span>&#40;*{errors.Name.message}&#41;</span>}
            </div>
            <input type="text" placeholder="Name" id="nameInput" className="form-control" {...register("Name")} />

            <div className="form-row">
                <label htmlFor="emailInput" className="form-label">Email</label>
                {errors.Email && <span>&#40;*{errors.Email.message}&#41;</span>}
            </div>
            <input type="text" placeholder="Email" id="emailInput" className="form-control" {...register("Email")} />

            <div className="form-row">
                <label htmlFor="messageInput" className="form-label">Message</label>
                {errors.Message && <span>&#40;*{errors.Message.message}&#41;</span>}
            </div>
            <textarea placeholder="Type your message..." id="messageInput" className="form-control" {...register("Message")} />

            <input type="submit" />
        </form>
    );
}