
import { useState } from "react";
import Alert from "..Alert/Alert";
import data from "../../utils/constants/provinces";
import styles from "./Coform.module.css";

// Menangkap props
function Coform() {
  const propinsi = data.provinces;
  const statusss = ["kasus", "sembuh", "dirawat", "meninggal"];
  /**
   * Ini hanya snippet(potongan) code.
   * Kode yang lainnya tetap sama.
   */

  // Membuat state title, date, image dan genre
  const [kota, setKota] = useState("");
  const [status, setStatus] = useState("");
  const [jumlah, setJumlah] = useState("");

  // Membuat state: isTitleError, isDateError dan isImageError
  const [isJumlahError, setIsJumlahError] = useState(false);

  /**
   * Membuat fungsi handleTitle
   * Dijalankan ketika nilai input berubah
   */
  function handleKota(e) {
    /**
     * Jalankan fungsi setTitile.
     * Set title nilai baru: input saat ini.
     */
    setKota(e.target.value);
  }

  /**
   * Membuat fungsi handleDate
   * Dijalankan ketika nilai input berubah
   */
  function handleStatus(e) {
    /**
     * Jalankan fungsi setDate.
     * Set date nilai baru: input saat ini.
     */
    setStatus(e.target.value);
  }

  /**
   * Membuat fungsi handleGenre
   * Dijalankan ketika nilai input berubah
   */
  function handleJumlah(e) {
    /**
     * Jalankan fungsi setGenre.
     * Set date nilai baru: input saat ini.
     */
    setJumlah(e.target.value);
  }

  function handleSubmit(e) {
    /**
     * Mencegah perilaku default form.
     * Mencegah form direfresh ketika disubmit.
     */
    e.preventDefault();

    // Jika title kosong, set isTitleError true
    if (jumlah === "") {
      setIsJumlahError(true);
    }

    // Jika tidak, maka push movie dan set error false
    else {
      // SOLVED: HOW TO ADD MOVIE TO MOVIES :)
      setIsJumlahError(false);
    }
  }

  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <div className={styles.form__left}>
          <img
            className={styles.form__image}
            src="https://picsum.photos/536/354"
            alt=""
          />
        </div>
        <div className={styles.form__right}>
          <h2 className={styles.form__title}>Add Movie Form</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.form__group}>
              {/* <label htmlFor="image" className={styles.form__label}> */}
              <label className={styles.form__label}>Provinsi</label>
              <select
                className={styles.form__select}
                id="kota"
                name="kota"
                // Memberikan value input: date
                value={kota}
                // Memberikan event onChange
                onChange={handleKota}
              >
                <option value="">Pilih Provinsi</option>
                {propinsi.map((prov, key) => {
                  return (
                    <option value={prov.kota} key={key}>
                      {prov.kota}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className={styles.form__group}>
              {/* <label htmlFor="image" className={styles.form__label}> */}
              <label className={styles.form__label}>Status</label>
              <select
                className={styles.form__select}
                id="status"
                name="status"
                // Memberikan value input: date
                value={status}
                // Memberikan event onChange
                onChange={handleStatus}
              >
                <option value="">Pilih Status</option>
                {statusss.map((stats, key) => {
                  return (
                    <option value={stats} key={key}>
                      {stats}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className={styles.form__group}>
              <label htmlFor="jumlah" className={styles.form__label}>
                Jumlah
              </label>
              <input
                id="jumlah"
                className={styles.form__input}
                type="text"
                name="jumlah"
                // Memberikan value input: title
                value={jumlah}
                // Memberikan event onChange
                onChange={handleJumlah}
              />
              {/*
               * Menambahkan infline if: operator &&
               * Jika isTitleError true maka render error
               */}
              {isJumlahError && <Alert>Title Wajib Diisi</Alert>}
            </div>
            <div>
              <button className={styles.form__button}>Add Movie</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Coform;
