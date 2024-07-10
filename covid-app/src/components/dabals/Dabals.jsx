
import styles from "./Dabals.module.css";
import data from "../../utils/constants/indonesia";
import DataCard from "../dabal/DataCard";


function Dabals() {
  // Destructing props: state movies
  const dabals = data.indonesia;

  return (
    <div>
      <div className={styles.container}>
        <section className={styles.dabals}>
          <h2 className={styles.dabals__title}>Indonesia</h2>
          <div className={styles.dabal__container}>
            {dabals.map(function(dabal, key) {
              return <DataCard dabal={dabal} key={key}/>;
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dabals;
