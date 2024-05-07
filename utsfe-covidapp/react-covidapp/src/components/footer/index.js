// function Footer() {
//   return (
//     <>
//       <h2>Example Footer</h2>
//     </>
//   );
// }

// export default Footer;

/**
 * Import CSS Module Footer.
 * Disimpan di object styles.
 */
import styles from "./Footer.module.css";

function Footer() {
  /**
   * Menggunakan styles yang sudah diimport.
   * Memanggilnya menggunakan expression.
   */
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <h2 className={styles.footer__title}>Covid App</h2>
        <p className={styles.footer__author}>Developed by FauzanIlyas</p>
      </footer>
    </div>
  );
}

export default Footer;