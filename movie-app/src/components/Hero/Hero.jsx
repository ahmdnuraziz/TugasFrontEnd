import styles from "./Hero.module.css";
function Hero() {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.hero__left}>
                    <h2 className={styles.hero__title}>KKN Di Desa OPM</h2>
                    <h3 className={styles.hero__genre}>
                        Genre: Thriller, Drama, Horror
                    </h3>
                    <p className={styles.hero__description}> Sejumlah mahasiswa yang melaksanakan KKN di sebuah desa di Provinsi Papua
                    </p>
                    <button className={styles.hero__button}>Watch</button>
                </div>
                <div className={styles.hero__right}>
                    <img
                        className={styles.hero__image}
                        src='/img/kknui.jpeg'
                        alt="placeholder"
                    />
                </div>
            </section>
        </div>
    );
}
export default Hero;