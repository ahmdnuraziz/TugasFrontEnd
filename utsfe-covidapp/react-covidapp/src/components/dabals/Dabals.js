
import Dabal from "..Dabal/Dabal";
import styles from "./Dabals.module.css";
import data from "../../utils/constants/indonesia";


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
              return <Dabal dabal={dabal} key={key}/>;
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dabals;
