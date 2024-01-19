import Background from './components/background/background'
import LoginModule from './components/loginmodule/loginmodule'
import styles from './page.module.css'

export default function Home() {

  return (
    <main className={styles.main}>
      <Background />
      <LoginModule />
    </main>
  )
}