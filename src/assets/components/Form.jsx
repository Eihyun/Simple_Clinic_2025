import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import './Form.css';

const schema = yup.object({
        Name: yup.string().required("Name is required"),
        Email: yup.string().email("Invalid email").required("Email is required"),
        Message: yup.string().required("Message is required"),
    });

export default function Form() {
    const formRef = useRef(null);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: yupResolver(schema),
        mode: "onSubmit"
    })

    // If valid, submit the actual <form> to FormSubmit
    const onValid = () => {
        formRef.current?.submit();
    }
    
    // If invalid, RHF shows errors; do nothing else
    const onInvalid = () => {};
    
    return (
        <form 
            ref={formRef}
            action="https://formsubmit.co/30c4169d3a3700f4b5c2d52d98112a76"
            method="POST"
            className="contact-form" 
            noValidate
        >
            {/* FormSubmit options */}
            <input type="hidden" name="_subject" value="New Simple Clinic Inquiry" />
            <input type="hidden" name="_captcha" value="false" />
            {/* Optional honeypot (bot trap): */}
            <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />


            {/* Name */}
            <div className="form-row">
                <label htmlFor="nameInput" className="form-label">Name</label>
                {errors.Name && <span>&#40;*{errors.Name.message}&#41;</span>}
            </div>
            <input type="text" placeholder="Name" id="nameInput" className="form-control" {...register("Name")} />

            {/* Email */}
            <div className="form-row">
                <label htmlFor="emailInput" className="form-label">Email</label>
                {errors.Email && <span>&#40;*{errors.Email.message}&#41;</span>}
            </div>
            <input type="text" placeholder="you@example.com" id="emailInput" className="form-control" {...register("Email")} />

            {/* Message */}
            <div className="form-row">
                <label htmlFor="messageInput" className="form-label">Message</label>
                {errors.Message && <span>&#40;*{errors.Message.message}&#41;</span>}
            </div>
            <textarea placeholder="Type your message..." id="messageInput" className="form-control" {...register("Message")} />

            {/* Submit - use RHF to gate native submit */}
            <button type="button" 
                onClick={handleSubmit(onValid, onInvalid)}
                disabled={isSubmitting}
            >Submit
            </button>
        </form>
    );
}