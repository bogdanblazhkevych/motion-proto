import styles from './styles.module.css'

interface ProgressPropsInterface {
    progress: number
}

export default function Progressbar(props: ProgressPropsInterface) {
    const { progress } = props
    return(
        <div className={styles.progresswrapper}>
            <p>
                Progress
            </p>
            <div className={styles.progressbarfull}>
                <div className={styles.progressbarfill} style={{width: `${progress}%`}}>
                </div>
            </div>
        </div>
    )
}