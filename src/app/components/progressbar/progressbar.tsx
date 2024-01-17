import styles from './styles.module.css'

interface ProgressPropsInterface {
    progress: number
}

export default function Progressbar(props: ProgressPropsInterface) {
    const { progress } = props
    return(
        <div className={styles.progresswrapper}>
            <div className={styles.titlecontainer}>
                <p>
                    Progress
                </p>
                <p>
                    {progress}%
                </p>
            </div>
            <div className={styles.progressbarfull}>
                <div className={styles.progressbarfill} style={{width: `${progress}%`}}>
                </div>
            </div>
        </div>
    )
}