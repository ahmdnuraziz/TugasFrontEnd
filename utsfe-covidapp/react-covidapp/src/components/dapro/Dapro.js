
import data from "../../utils/constants/provinces";
import styles from "./Dapro.module.css";

function Dapro() {
  // Destructing props: state movies
  const dapro = data.provinces;

  return (
    <div>
      <div className={styles.container}>
        <section className={styles.dapro}>
          <h2 className={styles.dapro__title}>Provinsi</h2>
          <div className={styles.dapro__container}>
            <table className={styles.dapro__table}>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Provinsi</th>
                  <th>Positif</th>
                  <th>Sembuh</th>
                  <th>Dirawat</th>
                  <th>Meninggal</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Aceh</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
              </thead>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}


export default Dapro;
