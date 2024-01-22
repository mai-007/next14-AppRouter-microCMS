import styles from '@/styles/postBody.module.scss'

export default function PostBody({ children }) {
  return (
    <div className={styles.stack}>
      {children}
    </div>
  )
}
