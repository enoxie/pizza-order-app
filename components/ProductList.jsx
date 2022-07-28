import styles from "../styles/ProductList.module.css";
import PizzaCard from "./PizzaCard";
const ProductList = ({pizzaList}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> THE BEST PIZZA IN CITY</h1>
      <p className={styles.desc}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
        fugiat non nam sunt temporibus laborum, officia illo ipsum dicta saepe
        natus laudantium harum, nihil cumque beatae incidunt. Est, eius
        eligendi!
      </p>

      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
