import styles from './SingleArticlePage.module.css'
import { useParams, useNavigate } from 'react-router-dom'
export default function SingleArticlePage() {

    const navigate = useNavigate()

    const { id } = useParams()
    function goBack() {
        navigate(-1)
    }

    return (
        <div className={styles.articleInfo}>
            <h2>Статья {id}</h2>
            <p>Cодержпния статьи {id}</p>
            <p>Текущий путь: /articles/{id}</p>
            <button onClick={goBack} className={styles.button}>Вернутся назад</button>
        </div>
    )
}