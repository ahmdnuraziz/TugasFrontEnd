import React from "react";
import styles from "./AddForMovie.module.css";

function AddFormMovie() {
    return (
        <div className={styles.container}>
            <section className={styles.movies}>
                <h2 className={styles.movies__title}>Add Movie</h2>
                <div className={styles.movie__container}>
                    <div className={styles.form}>
                        <div className={styles.form__left}>
                            <img
                                className={styles.movie__image}
                                src="https://picsum.photos/535/354"
                                alt="Movie Poster"
                            />
                        </div>
                        <div className={styles.form__right}>
                            <form>
                                <div className={styles.form__group}>
                                    <label htmlFor="title" className={styles.form__label}>Title</label>
                                    <input type="text" id="title" className={styles.form__input} />
                                </div>
                                <div className={styles.form__group}>
                                    <label htmlFor="year" className={styles.form__label}>Year</label>
                                    <input type="text" id="year" className={styles.form__input} />
                                </div>
                                <button type="submit" className={styles.form__button}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AddFormMovie;
