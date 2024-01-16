import Image from 'next/image'
import styles from './page.module.css'
import Colab from './components/colab/colab'

export default function Home() {
  return (
    <main className={styles.main}>
      <Colab></Colab>
    </main>
  )
}