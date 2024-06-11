import styles from '../styles/BlogArticle.module.css'

export default function BlogArticle({ title, imgSrc, text }) {
  return (
    <div className={styles.article}>
      <img src={imgSrc} alt={title} className={styles.articleImage} />
      <div className={styles.articleContent}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  )
}
