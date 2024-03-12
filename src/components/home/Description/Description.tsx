"use client"
import Image from "next/image";
import classNames from "classnames/bind";
import { useState } from "react";
import styles from "./Description.module.sass";

export const Description = () => {

    const [hasBorder, setBorder] = useState(false);

    const handleClick = () => setBorder(!hasBorder);

    const cx = classNames.bind(styles);

    const buttonStyles = cx('Description__button', {
        'Description__button--border': hasBorder,
    })

    return (
        <section className={styles.Description}>

            <button onClick={handleClick} className={buttonStyles}>
                <div className={styles.Description__imageContainer}>
                    <Image
                        src="/images/Vivotaku 2.png" 
                        alt="Vivotaku Logo" 
                        fill
                    />
                </div>
            </button>
            
            <div className={styles.Description__text}>
                <h2>Description</h2>

                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi natus id expedita accusamus quidem animi veniam doloribus recusandae ea, blanditiis quos saepe, praesentium voluptate, minima perferendis magni necessitatibus deserunt. Officiis!</p>
            </div>
        </section>
    )
}