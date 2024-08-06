'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/send-email';

export type FormData = {
    name: string;
    email: string;
    message: string;
};
const ContactForm: FC = () => {
    const { register, handleSubmit } = useForm<FormData>();

    function onSubmit(data: FormData) {
        sendEmail(data);
    }

    return (
        <section className="contact-form">
            <h3 className="h3 form-title">Contact Form</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label
                        htmlFor='name'
                    >
                        Full Name
                    </label>
                    <input
                        type='text'
                        placeholder='Full Name'
                        {...register('name', { required: true })}/>
                </div>
                <div
                >
                    <label
                        htmlFor='email'
                    >
                        Email Address
                    </label>
                    <input
                        type='email'
                        placeholder='example@domain.com'
                        {...register('email', { required: true })}
                    />
                </div>
                <div>
                    <label
                        htmlFor='message'>
                        Message
                    </label>
                    <textarea
                        rows={4}
                        placeholder='Type your message'
                        {...register('message', { required: true })}
                    ></textarea>
                </div>
                <div>
                    <button>
                        Submit
                    </button>
                </div>
            </form>
        </section>
    );
};

export default ContactForm;