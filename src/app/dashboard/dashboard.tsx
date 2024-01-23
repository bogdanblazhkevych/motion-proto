'use client'

import Canvas from '../components/canvas/canvas'
import Colab from '../components/colab/colab'
import ColabIcon from '../components/colabicon/colabicon'
import MarketShare from '../components/marketshare/marketshare'
import Revenue from '../components/revenue/revenue'
import styles from './styles.module.css'
import { useEffect, useState } from 'react'


export interface openModulesInterface {
  colab: boolean
}

export default function Dashboard() {

  const [openModules, setOpenModules] = useState<openModulesInterface>({colab: false})

  // useEffect(() => {
  //   console.log(openModules)
  // }, [openModules])

  return (
    <main className={styles.main}>
      {openModules.colab && <Colab openModules={openModules} setOpenModules={setOpenModules}/>}
      <ColabIcon openModules={openModules} setOpenModules={setOpenModules}/>
      <Revenue />
      <MarketShare />
      {/* <Canvas /> */}
    </main>
  )
}