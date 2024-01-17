'use client'

import styles from './page.module.css'
import Colab from './components/colab/colab'
import { useState } from 'react'
import ColabIcon from './components/colabicon/colabicon'

export default function Home() {

  const [openModules, setOpenModules] = useState<string[]>([])

  return (
    <main className={styles.main}>
      {openModules.includes("colab") && <Colab />}
      <ColabIcon openModules={openModules} setOpenModules={setOpenModules}/>
    </main>
  )
}