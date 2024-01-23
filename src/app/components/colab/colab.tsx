import styles from './styles.module.css'
import { mockData } from './data'
import ColabNode from './colabnode/colabnode'
import Dragable from '../dragable/dragable'
import { Dispatch, SetStateAction } from 'react'
import { openModulesInterface } from '@/app/dashboard/dashboard/dashboard'

interface ColabPropsInterface {
    setOpenModules: Dispatch<SetStateAction<openModulesInterface>>,
    openModules: openModulesInterface
}

export default function Colab(props: ColabPropsInterface) {
    const { setOpenModules, openModules } = props

    const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
        const element = e.target as HTMLElement
        const id = element.id

        setOpenModules((prev) => {
            const newState = { ...prev }
            newState[id as keyof openModulesInterface] = false;
            return newState
        })
    }

    return (
        <Dragable>
            <div className={styles.colabwrapper}>
                <div className={styles.toolbar}>
                    <div className={styles.name}>
                        Collaborations
                    </div>
                    <div id="colab" className={styles.close} onClick={handleClose}>

                    </div>
                </div>
                <div className={styles.colablist}>
                    {mockData.map((node, index) => {
                        return(
                            <ColabNode data={node}/>
                        )
                    })}
                </div>
            </div>
        </Dragable>
    )
}