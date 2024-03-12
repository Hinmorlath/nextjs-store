import styles from "./Description.module.sass";
import Image from "next/image";

export const Description = () => {
    return (
        <section className={styles.Description}>
            <Image
                src="/images/Vivotaku 2.png" 
                alt="Vivotaku Logo" 
                height={300} 
                width={300}
            />
            
            <div className={styles.Description__text}>
                <h2>Description</h2>

                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi natus id expedita accusamus quidem animi veniam doloribus recusandae ea, blanditiis quos saepe, praesentium voluptate, minima perferendis magni necessitatibus deserunt. Officiis!</p>
            </div>
        </section>
    )
}