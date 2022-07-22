import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";
const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/pizza.png" alt="" width="250" height="250" />
      <h1 className={styles.title}>FIORI DI ZUCCA</h1>
      <span className={styles.price}>$19.90</span>
      <p className={styles.desc}>
       Lorem ipsum dolor sit amet.
       Ducimus impedit alias exercitationem nulla!
       Ratione laudantium esse numquam blanditiis!
       Excepturi adipisci facilis distinctio! Autem?
      </p>
    </div>
  );
};

export default PizzaCard;
