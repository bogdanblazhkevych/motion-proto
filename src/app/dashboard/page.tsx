'use client'

import Colab from '../components/colab/colab'
import ColabIcon from '../components/colabicon/colabicon'
import styles from './styles.module.css'
import { useEffect, useState } from 'react'

export interface openModulesInterface {
  colab: boolean
}

export default function Home() {

  const [openModules, setOpenModules] = useState<openModulesInterface>({colab: false})

  useEffect(() => {
    console.log(openModules)
  }, [openModules])

  return (
    <main className={styles.main}>
      {openModules.colab && <Colab openModules={openModules} setOpenModules={setOpenModules}/>}
      <ColabIcon openModules={openModules} setOpenModules={setOpenModules}/>
    </main>
  )
}