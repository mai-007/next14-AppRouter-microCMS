import Container from '@/components/Container'
import Logo from './logo'
// import Social from './Social'
import styles from '@/styles/footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <Logo />
          {/* <Social/> */}
        </div>
      </Container>
    </footer>
  )
}
