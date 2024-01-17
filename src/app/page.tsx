// 'use client'

import styles from './page.module.css'
// import Colab from './components/colab/colab'
// import { useEffect, useState } from 'react'
// import ColabIcon from './components/colabicon/colabicon'

// export interface openModulesInterface {
//   colab: boolean
// }

export default function Home() {

  // const [openModules, setOpenModules] = useState<openModulesInterface>({colab: false})

  // useEffect(() => {
  //   console.log(openModules)
  // }, [openModules])

  return (
    <main className={styles.main}>
      {/* {openModules.colab && <Colab openModules={openModules} setOpenModules={setOpenModules}/>}
      <ColabIcon openModules={openModules} setOpenModules={setOpenModules}/> */}
    </main>
  )
}