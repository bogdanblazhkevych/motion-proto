import LoginModule from './components/loginmodule/loginmodule'
import styles from './page.module.css'

export default function Home() {

  return (
    <main className={styles.main}>
      <LoginModule />
    </main>
  )
}