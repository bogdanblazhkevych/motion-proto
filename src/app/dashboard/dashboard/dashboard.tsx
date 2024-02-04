'use client'

import Notifications from '@/app/components/notifications/notifications'
import Canvas from '../../components/canvas/canvas'
import Colab from '../../components/colab/colab'
import ColabIcon from '../../components/colabicon/colabicon'
import MarketShare from '../../components/marketshare/marketshare'
import Revenue from '../../components/revenue/revenue'
import styles from './styles.module.css'
import { useEffect, useState } from 'react'


export interface openModulesInterface {
  colab: boolean
}

export default function Dashboard() {

  const [openModules, setOpenModules] = useState<openModulesInterface>({colab: false})

  return (
    <div className={styles.dashboardwrapper}>
      {/* {openModules.colab && <Colab openModules={openModules} setOpenModules={setOpenModules}/>} */}
      {/* <ColabIcon openModules={openModules} setOpenModules={setOpenModules}/> */}
      <div className={styles.boxone}>
        <Revenue />
      </div>
      <div className={styles.boxtwo}>
        <Revenue />
      </div>
      <div className={styles.boxthree}>
        <Notifications />
      </div>
      <div className={styles.boxfour}>
        <MarketShare />
      </div>
    </div>
  )
}