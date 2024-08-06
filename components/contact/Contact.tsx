import React from 'react'
import HeaderTitle from '../HeaderTitle';
import MapBox from './MapBox';
import ContactForm from './ContactForm';

export default function Contact() {
    return (
        <article className="contact">
            <HeaderTitle>Contact</HeaderTitle>
            <MapBox />
            <ContactForm />
        </article>
    )
}
