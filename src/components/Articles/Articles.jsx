import styles from './Articles.module.css'
import { Link } from 'react-router-dom'
export default function Articles() {
    return (
        <div className={styles.articlesConteiner}>
            <h2>
                Вы можете выбрать статью:
            </h2>
            <ul>
                <li>
                    <Link className={styles.listItem} to='/articles/1'> Первая статья</Link>
                </li>
                <li>
                    <Link className={styles.listItem} to='/articles/2'> Вторая статья</Link>
                </li>
                <li>
                    <Link className={styles.listItem} to='/articles/3'> Третья статья</Link>
                </li>
            </ul>
        </div>
    )
}