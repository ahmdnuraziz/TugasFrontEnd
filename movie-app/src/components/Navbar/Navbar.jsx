import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
function Navbar() {

    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <div>
                    <h1 className={styles.navbar__brand}>Movie App</h1>
                </div>
                <div>
                    <ul className={styles.navbar__list}>
                        <li className={styles.navbar__item}><Link to="/">Home</Link></li>
                        <li className={styles.navbar__item}><Link to="/add-movie">Add Movie</Link></li>
                        <li className={styles.navbar__item}><Link to="/populer">Popular</Link></li>
                        <li className={styles.navbar__item}><Link to="/now-play">Now Playing</Link></li>
                        <li className={styles.navbar__item}><Link to="/top-rated">Top Rated</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;