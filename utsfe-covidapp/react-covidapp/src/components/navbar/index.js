
// function Navbar() {
//   return (
//     <>
//       <h2>Example Navbar</h2>
//     </>
//   );
// }

// export default Navbar;


import styles from "./Navbar.module.css";

function Navbar() {
  /**
   * Menggunakan styles yang sudah diimport.
   * Memanggilnya menggunakan expression.
   */
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div>
          <h1 className={styles.navbar__brand}>Covid ID</h1>
        </div>
        <div>
          <ul className={styles.navbar__list}>
            <li className={styles.navbar__item}>Global</li>
            <li className={styles.navbar__item}>Indonesia</li>
            <li className={styles.navbar__item}>Provinsi</li>
            <li className={styles.navbar__item}>About</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
