import Social from './Social'
import styles from '@/styles/contact.module.scss'

export default function Contact() {
  return (
    <div className={styles.stact}>
      <h3 className={styles.heading}>Contact</h3>
      {/* <Social iconSize="30px"/> */}
      <address>cube@web.mail.address</address>
    </div>
  )
}
