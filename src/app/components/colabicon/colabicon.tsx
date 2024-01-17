'use client'

import { Dispatch, SetStateAction } from 'react'
import styles from './styles.module.css'
import { openModulesInterface } from '@/app/dashboard/page'

interface ColabIconPropsInterface {
    setOpenModules: Dispatch<SetStateAction<openModulesInterface>>,
    openModules: openModulesInterface
}

export default function ColabIcon(props: ColabIconPropsInterface) {

    const { setOpenModules, openModules } = props

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const element = e.target as HTMLElement
        const id = element.id

        setOpenModules((prev) => {
            const newState = { ...prev }
            newState[id as keyof openModulesInterface] = true;
            return newState
        })
    }

    return(
        <div id="colab" onClick={handleClick} className={styles.colabiconwrapper}>

        </div>
    )
}