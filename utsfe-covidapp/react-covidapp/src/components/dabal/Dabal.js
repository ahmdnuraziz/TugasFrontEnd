
import styles from "./Dabal.module.css";

// Component dabal menerima props
function Dabal(props) {
  // Melakukan destructing props
  const { dabal } = props;

  return (
    <div className={styles.dabal}>
      <div className={styles.dabal__kolom}>
        <div className={styles.dabal__card}>
          <h3 className={styles.dabal__status}>{dabal.status}</h3>
          <h1 className={styles.dabal__total}>{dabal.total}</h1>
        </div>
      </div>
    </div>
  );
}

export default Dabal;
