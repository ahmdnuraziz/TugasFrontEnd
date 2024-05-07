// function Hello() {
//   return (
//     <>
//       <h2>Hello Component</h2>
//     </>
//   );
// }

// export default Hello;


import styles from "./Hello.module.css";

function Hello() {
  return (
    <div className={styles.container}>
      <section className={styles.hello}>
        <div className={styles.hello__left}>
          <h2 className={styles.hello__title}>Covid APP</h2>
          <h3 className={styles.hello__tagline}>
            Monitoring Perkembangan Covid
          </h3>
          <p className={styles.hello__description}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            cum accusamus quisquam earum velit ea nobis maiores exercitationem
            nam temporibus.
          </p>
          <button className={styles.hello__button}>Vaccine</button>
        </div>
        <div className="hello__right">
          <img
            className={styles.hello__image}
            src="https://dinkes.acehprov.go.id/uploads/Ilustrasi_Vaksinasi1.jpg"
            alt="placeholder"
          />
        </div>
      </section>
    </div>
  );
}

export default Hello;