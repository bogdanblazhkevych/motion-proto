import styles from './styles.module.css'
import { mockData } from './data'
import ColabNode from './colabnode/colabnode'
import Dragable from '../dragable/dragable'

export default function Colab() {
    
    return (
        <Dragable>
            <div className={styles.colabwrapper}>
                <div className={styles.toolbar}>
                    <div className={styles.name}>
                        Collaborations
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