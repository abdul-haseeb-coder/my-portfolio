import React from 'react'
import styles from './MapBox.module.css'


function MapBox() {
    return (
        <section className={styles.mapbox} data-mapbox="">
            <figure>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217897.62046307584!2d72.92448722511955!3d31.423759041318238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392242a895a55ca9%3A0xdec58f88932671c6!2sFaisalabad%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1699226762569!5m2!1sen!2s" width="400" height="300" loading="lazy"></iframe>
            </figure>
        </section>
    )
}

export default MapBox