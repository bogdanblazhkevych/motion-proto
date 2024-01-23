import Dashboard from './dashboard'
import Menu from './menu/menu'
import styles from './styles.module.css'

export default function DashboardPage() {

  return (
    <main className={styles.main}>
      <Menu />
      <Dashboard />
    </main>
  )
}