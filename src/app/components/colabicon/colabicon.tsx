'use client'

import { Dispatch, SetStateAction } from 'react'
import styles from './styles.module.css'

interface ColabIconPropsInterface {
    setOpenModules: Dispatch<SetStateAction<string[]>>,
    openModules: string[]
}

export default function ColabIcon(props: ColabIconPropsInterface) {

    const { setOpenModules, openModules } = props

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const element = e.target as HTMLElement
        const id = element.id

        if (openModules.includes(id)) return

        setOpenModules((prev) => {
            console.log("here")
            const newArr = [...prev]
            newArr.push(id)
            return newArr
        })
    }

    return(
        <div id="colab" onClick={handleClick} className={styles.colabiconwrapper}>

        </div>
    )
}